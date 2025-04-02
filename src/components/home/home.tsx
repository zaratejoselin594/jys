import './home.css';

interface Props {
  images: string[];
  currentIndex: number;
  texto: string;
  titulo: string;
  nextSlide: () => void;
  prevSlide: () => void;
  mensajeWpp: () => void;
}

const DivPlanViaje = ({ images, currentIndex, titulo, texto, nextSlide, prevSlide, mensajeWpp }: Props) => {
  return (
    <div className="planViajeContainer">
      {/* Slider de imágenes */}
      <div className="slider">
        <button className="prev btnSlider" onClick={prevSlide} aria-label="Imagen anterior">
          &#10094;
        </button>
        <div className="slider-content">
          {images.length > 0 ? (
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
        <button className="next btnSlider" onClick={nextSlide} aria-label="Imagen siguiente">
          &#10095;
        </button>
      </div>

      {/* Contenido del plan de viaje */}
      <div className="planViajeContent">
        <h3>{titulo}</h3>

        <div className="planViajeDescripcion">
          <p>{texto}</p>
        </div>

        {/* Precio y botón de compra */}
        <div className="planViajeFooter">
          <h3>$123,457</h3>
          <button onClick={mensajeWpp}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export const Home = ({ images, currentIndex, titulo, texto, nextSlide, prevSlide, mensajeWpp }: Props) => {
  return (
    <DivPlanViaje
      images={images}
      currentIndex={currentIndex}
      titulo={titulo}
      texto={texto}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      mensajeWpp={mensajeWpp}
    />
  );
};
