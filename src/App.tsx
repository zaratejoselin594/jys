import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { Nav, Home, InicioPag, Footer } from './components';


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
  const [openPlans, setOpenPlans] = useState<{ [key: number]: boolean }>({});


  // Alternar menú
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Alternar plan de viaje
  const togglePlanViaje = (index: number) => {
    setOpenPlans(prev => ({
      ...prev,
      [index]: !prev[index], // Alterna solo el clickeado
    }));
  };

  // Cierra el menú al hacer clic fuera de él
  const closeMenu = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.nav') || target.closest('.menu-btn')) return;
    setIsMenuOpen(false);
  }, []);

  // Cierra plan de viaje al hacer clic fuera de él
  const closePlanViaje = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // Si se clickeó dentro de alguna zona activa, no cerrar nada
    if (target.closest('.imgPlanViaje') || target.closest('.planViajeContent')) return;

    // Si se clickeó fuera, cerramos todos
    setOpenPlans({});
  }, []);


  
  // Efecto para menú
  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener('click', closeMenu);
    }
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen, closeMenu]);


  // Efecto para plan de viaje
  useEffect(() => {
    const isAnyOpen = Object.values(openPlans).some(val => val);
    if (isAnyOpen) {
      window.addEventListener('click', closePlanViaje);
    }
    return () => {
      window.removeEventListener('click', closePlanViaje);
    };
  }, [openPlans, closePlanViaje]);


  const mensajeWpp = (info: string) => {
    window.open(`https://wa.me/+5493516691279?text=${encodeURIComponent(info)}`, "_blank");
  };

  return (
    <>
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <InicioPag></InicioPag>
      <section className='homeSection'>
        <h2>Planes de Viajes</h2>
        <div className='divHome'>
        {[{
          titulo: "Mina Clavero",
          texto: `Salimos desde el punto que el grupo elija, al horario acordado. Dependiendo del punto geográfico de salida pasamos por Las Jarillas, Copina, El Cóndor, Pampa de Achala, el desierto de piedras y el nacimiento del Río Mina Clavero. Deteniéndonos en los paradores que el grupo elija. Descenso por el Valle de Traslasierra hasta llegar a la localidad de Cura Brochero, con tiempo libre para almorzar. Por la tarde, conoceremos la localidad de Mina Clavero, donde podremos disfrutar de la ciudad y el balneario. Luego retornamos.`
        }, {
          titulo: "7 Cascadas",
          texto: `Salimos desde el punto que el grupo elija, al horario acordado. Hacia la ciudad de La Falda, pasando por Estancia Vieja, Bialet Massé (Horno Histórico 1884), Santa María de Punilla, Cosquín, Casa Grande, Valle Hermoso, hasta llegar al complejo 7 Cascadas con sus aguas provenientes del Río Grande de Punilla y provisto además de lo natural, natatorios, toboganes acuáticos y confiterías. De regreso visitamos la fábrica de alfajores y chocolates.`
        }, {
          titulo: "Villa General Belgrano",
          texto: `Salimos desde el punto que el grupo elija, al horario acordado. Dependiendo del punto geográfico de salida pasamos por Falda del Carmen y llegamos a Alta Gracia. Allí pasaremos por la casa del Che Guevara y la Estancia Jesuítica (NO se ingresa a la casa del Che ni a la Estancia). Seguimos por Ruta N°5, cruce del Río Anisacate, La Bolsa, Los Aromos, La Serranita visitando el Dique los Molinos. Continuamos por Villa La Merced, Villa Parque, Los Reartes y arribamos a Villa General Belgrano con tiempo libre y regresamos.`
        }, {
          titulo: "La Cumbrecita",
          texto: `Salimos desde el punto que el grupo elija, al horario acordado. Dependiendo del punto geográfico de salida pasamos por Falda del Carmen y llegamos a Alta Gracia. Allí pasaremos por la casa del Che Guevara y la Estancia Jesuítica (NO se ingresa a la casa del Che ni a la Estancia). Seguimos por Ruta N°5, cruce del Río Anisacate, La Bolsa, Los Aromos, La Serranita visitando el Dique los Molinos. Continuamos por Villa La Merced, Villa Parque, Los Reartes y arribamos a La Cumbrecita con tiempo libre y regresamos.`
        }, {
          titulo: "Capilla del Monte",
          texto: `Salimos desde el punto que el grupo elija, al horario acordado. Dependiendo del punto geográfico de salida pasamos por Villa del Lago, Bialet Massé, Horno Histórico el Argentino (1884), Cosquín (Capital nacional del Folklore), Plaza Prospero Molina, Valle Hermoso, La Falda, Huerta Grande, Villa Giardino, La Cumbre (se observa el Cristo Redentor, pero no se realiza el ascenso al mismo), Cruz Chica y Cruz Grande. Seguimos por Los Cocos, hasta llegar al Dique de Piscu Yaco y la telesilla, que en San Esteban y continuamos por Ruta N°38 hasta Capilla del Monte finalizando en el Dique el Cajón. Al regreso visitamos la fábrica de alfajores y chocolates.`
        }].map(({ titulo, texto }, index) => {
          const isOpen = !!openPlans[index];
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
              isMenuOpen={!!openPlans[index]} // solo ese plan
              toggleMenu={() => togglePlanViaje(index)}
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
          
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};


export default App;
