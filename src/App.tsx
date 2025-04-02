import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { Nav, Home } from './components';


const images: string[] = Object.values(import.meta.glob("./resourse/*.jpg", { eager: true })).map(
  (mod: any) => mod.default
);


// Dividir las imágenes en grupos según el prefijo
const minaClaveroImages = images.filter(img => img.includes('minaClavero'));
const cascadasImages = images.filter(img => img.includes('7cascadas'));
const cumbrecitaImages = images.filter(img => img.includes('cumbresita'));
const villagbelgranoImages = images.filter(img => img.includes('villagbelgrano'));
const capillaMonteImages = images.filter(img => img.includes('capillaMonte'));


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // Alternar menú
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  // Cierra el menú al hacer clic fuera de él
  const closeMenu = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.nav') || target.closest('.menu-btn')) return;
    setIsMenuOpen(false);
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('click', closeMenu);
    }
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen, closeMenu]);

  const mensajeWpp = (info: string) => {
    window.open(`https://wa.me/+5493513665721?text=${encodeURIComponent(info)}`, "_blank");
  };

  return (
    <>
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <section className='homeSection'>
        {[{
          titulo: "Mina Clavero",
          texto: `Hora de salida: 8:00. Hora de regreso: 19:30
          Salimos desde Córdoba capital, pasando por Las Jarillas, Copina, El Cóndor,
          Pampa de Achala, el desierto de piedras y el nacimiento del Río Mina Clavero.
          Descenso por el Valle de Traslasierra hasta llegar a la localidad de Cura Brochero, con tiempo
          libre para almorzar. Por la tarde, conoceremos la localidad de Mina Clavero, donde podremos disfrutar de la ciudad y el balneario.
          Luego retornamos.`
        }, {
          titulo: "7 Cascadas",
          texto: `Hora de salida: 13:00. Hora de regreso: 20:00
          Salimos desde Córdoba capital, hacia la ciudad de La Falda, pasando por Estancia Vieja, Bialet Massé
          (Horno Histórico 1884), Santa María de Punilla, Cosquín, Casa Grande, Valle Hermoso, hasta llegar al complejo 7
          Cascadas con sus aguas provenientes del Río Grande de Punilla y provisto además de lo natural, natatorios, toboganes
          acuáticos y confiterías. De regreso visitamos fábrica de alfajores y chocolates. La excursión puede ser modificada
          antes o durante el recorrido sin previo aviso debido a factores externos.`
        }, {
          titulo: "Villa General Belgrano",
          texto: `Salida: 13:30 hs Regreso: 20:00 hs
          Partimos desde Córdoba por autopista Justiniano Allende Posse. Nos desviamos por Ruta C45 hacia Punta de Agua,
          Falda del Carmen y llegamos a Alta Gracia. Allí pasaremos por la casa del Che Guevara y la Estancia Jesuítica
          (NO se ingresa a la casa del Che ni a la Estancia). Seguimos por Ruta N°5, cruce del Río Anisacate, La Bolsa,
          Los Aromos, La Serranita por Cuesta del Águila visitando el Dique los Molinos (degustación de quesos y salames).
          Continuamos por Villa La Merced, Villa Parque, Los Reartes y arribamos a Villa General Belgrano con tiempo libre
          y regresamos. La excursión puede ser modificada antes o durante el recorrido sin previo aviso debido a factores externos.`
        }, {
          titulo: "La Cumbrecita",
          texto: `Salida: 08:00 hs  Regreso: 20:00 hs
          Partimos desde Córdoba por autopista Justiniano Allende Posse. Nos desviamos por Ruta C45 hacia Punta de Agua,
          Falda del Carmen y llegamos a Alta Gracia. Allí pasaremos por la casa del Che Guevara y la Estancia Jesuítica
          (NO se ingresa a la casa del Che ni a la Estancia). Seguimos por Ruta N°5, cruce del Río Anisacate, La Bolsa,
          Los Aromos, La Serranita por Cuesta del Águila visitando el Dique los Molinos (degustación de quesos y salames).
          Luego, recorremos Los Reartes y llegamos a Villa General Belgrano, donde habrá tiempo libre para almorzar y recorrer.
          Finalmente, regresamos. La excursión puede ser modificada antes o durante el recorrido sin previo aviso debido a factores externos.`
        }, {
          titulo: "Capilla del Monte",
          texto: `Salida: 13:30 hs Regreso: 20:00 hs
          Comenzamos el paseo conociendo Villa del Lago, Bialet Massé, Horno Histórico el Argentino (1884), Cosquín
          (Capital nacional del Folklore), Plaza Prospero Molina, Valle Hermoso, La Falda, Huerta Grande, Villa Giardino,
          La Cumbre (se observa el Cristo Redentor, pero no se realiza el ascenso al mismo), Cruz Chica y Cruz Grande.
          Seguimos por Los Cocos, hasta llegar al Dique de Piscu Yaco y la telesilla, que en San Esteban y continuamos
          por Ruta N°38 hasta Capilla del Monte finalizando en el Dique el Cajón (NO se pasa por la telesilla). Al regreso
          visitamos fábrica de alfajores y chocolates. La excursión puede ser modificada antes o durante el recorrido sin previo
          aviso debido a factores externos.`
        }].map(({ titulo, texto }, index) => {
          const [currentIndex, setCurrentIndex] = useState(0);
          // Obtener la longitud del array de imágenes correspondiente al destino
          const getImagesLength = (title: string) => {
            switch (title) {
              case "Mina Clavero":
                return minaClaveroImages.length;
              case "7 Cascadas":
                return cascadasImages.length;
              case "Villa General Belgrano":
                return villagbelgranoImages.length;
              case "La Cumbrecita":
                return cumbrecitaImages.length;
              case "Capilla del Monte":
                return capillaMonteImages.length;
              default:
                return 0;
            }
          };

          const imagesToShow = (() => {
            switch (titulo) {
              case "Mina Clavero":
                return minaClaveroImages;
              case "7 Cascadas":
                return cascadasImages;
              case "Villa General Belgrano":
                return villagbelgranoImages;
              case "La Cumbrecita":
                return cumbrecitaImages;
              case "Capilla del Monte":
                return capillaMonteImages;
              default:
                return [];
            }
          })();

          const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % getImagesLength(titulo));
          };

          const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? getImagesLength(titulo) - 1 : prevIndex - 1));
          };

          useEffect(() => {
            const interval = setInterval(nextSlide, 3000);
            return () => clearInterval(interval);
          }, [titulo]);  // El useEffect depende del título para cambiar la longitud de las imágenes

          return (
            <Home
              key={index}
              images={imagesToShow}
              currentIndex={currentIndex}
              titulo={titulo}
              texto={texto}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
              mensajeWpp={() => mensajeWpp(`Hola, me interesa saber más acerca del Plan de Viaje a ${titulo} 🚐🏞️`)}
            />
          );
        })}
      </section>
    </>
  );
};


export default App;
