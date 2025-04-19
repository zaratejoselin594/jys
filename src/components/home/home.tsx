import './home.css';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

interface Props {
  images: string[];
  currentIndex: number;
  texto: string;
  titulo: string;
  nextSlide: () => void;
  prevSlide: () => void;
  mensajeWpp: () => void;
  isMenuOpen: boolean,
  toggleMenu: () => void,
}

const DivPlanViaje = ({ images, currentIndex, titulo, texto,isMenuOpen, nextSlide, prevSlide, mensajeWpp, toggleMenu }: Props) => {
  return (
    <div className={`planViajeContainer ${isMenuOpen ? "open" : ""}`}>
      {/* Slider de imágenes */}
      <div className="slider">
        <div className="overlay"></div>
        <div className="caption">{titulo}</div> {/* Texto desde el parámetro */}
        <button className="prev btnSlider" onClick={prevSlide} aria-label="Imagen anterior">
          <IoIosArrowDropleft />
        </button>
        <div className="slider-content">
          {images.length > 0 ? (
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} onClick={toggleMenu} className='imgPlanViaje'/>
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <button className="next btnSlider" onClick={nextSlide} aria-label="Imagen siguiente">
          <IoIosArrowDropright />
        </button>
      </div>

      {/* Contenido del plan de viaje */}
      <div className={`planViajeContent ${isMenuOpen ? "open" : ""}`}>
        <h3>{titulo}</h3>

        <div className="planViajeDescripcion">
          <p>{texto}</p>
        </div>

        {/* Precio y botón de compra */}
        <div className="planViajeFooter">
          <button className='buttonFooter' onClick={mensajeWpp}>Consultar Plan</button>
        </div>
      </div>
    </div>
  );
};

export const InicioPag = () => {
  return (
    <div className="inicioPag">
      <div className="programar">
        <svg preserveAspectRatio="none" className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#540045" fill-opacity="1"
            d="M0,192L20,186.7C40,181,80,171,120,154.7C160,139,200,117,240,117.3C280,117,320,139,360,154.7C400,171,440,181,480,176C520,171,560,149,600,128C640,107,680,85,720,106.7C760,128,800,192,840,224C880,256,920,256,960,256C1000,256,1040,256,1080,240C1120,224,1160,192,1200,154.7C1240,117,1280,75,1320,69.3C1360,64,1400,96,1420,112L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">
          </path>
        </svg>
        <div>
          <h1>Tu viaje seguro</h1>
          <p>
            En JYS Viajes ofrecemos transporte habilitado, cómodo y seguro. <br />
            Traslados ejecutivos, viajes largos o eventos: te llevamos con puntualidad y confianza.
          </p>
          <a href="https://wa.me/+5493516691279" target="_blank" rel="noopener noreferrer">
            <button className='btnFront'>Viaja con JyS</button>
          </a>
        </div>
        <svg preserveAspectRatio="none" className="wave wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#540045" fill-opacity="1"
            d="M0,32L48,69.3C96,107,192,181,288,192C384,203,480,149,576,138.7C672,128,768,160,864,160C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
          </path>
       </svg>
      </div >

    </div>

  )
}
export const Home = ({ images, currentIndex, titulo, texto, isMenuOpen, nextSlide, prevSlide, mensajeWpp, toggleMenu }: Props) => {
  return (
    <DivPlanViaje
      images={images}
      currentIndex={currentIndex}
      titulo={titulo}
      texto={texto}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      mensajeWpp={mensajeWpp}
      isMenuOpen={isMenuOpen}        // ✅ agregado
      toggleMenu={toggleMenu}        // ✅ agregado
    />
  );
};
