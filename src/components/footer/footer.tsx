import './footer.css';
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export const Footer = () => {
  return (

    <footer className="py-16 px-6 text-white" style={{ backgroundColor: "var(--color-primario)" }}>
      <svg preserveAspectRatio="none" className='waveFooter' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#540045" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,133.3C320,149,400,203,480,218.7C560,235,640,213,720,181.3C800,149,880,107,960,112C1040,117,1120,171,1200,197.3C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
      <div className="footer-sobre-nosotros">
        {/* Sección izquierda: Sobre Nosotros */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[var(--color-acento)]">
            Sobre nosotros
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-white/90">
            <p>
              En <strong>JYS Viajes</strong> nos especializamos en ofrecer
              servicios de transporte de pasajeros pensados para <span> garantizarte
                seguridad, comodidad y puntualidad, estés donde estés. </span>
            </p>
            <p>
              <span> Estamos habilitados por la Ordenanza N.º 3570 </span> para realizar
              traslados especiales, escolares y obreros, siempre conducidos por
              choferes profesionales altamente capacitados.
            </p>
            <p>
              Nuestras unidades cuentan con climatizador, butacas reclinables y
              mantenimiento permanente, listas para viajes de corta, media y
              larga distancia, dentro de la provincia o al Mercosur.
            </p>
            <h3 className="text-lg font-semibold text-[var(--color-acento-secundario)] mt-6">
              ¿Cómo funcionan nuestros presupuestos?
            </h3>
            <p>
              Los presupuestos que ofrecemos se calculan según el tipo de
              viaje, la distancia, la duración y el servicio requerido,{" "}
              <strong>NO</strong> por la cantidad de personas.
            </p>
            <p>
              <span> El precio es único, independientemente de si viajan 5 o más
              personas.</span> Si tu grupo es más chico, compartís más espacio. Si es
              más grande, aprovechás más el costo. Pero el valor del viaje no
              cambia.
            </p>
            <p>
              Además,  vos elegís con quién viajar: tu familia, tus amigos, tus
              compañeros… <span> ¡vos armás tu grupo y nosotros te llevamos! </span>
            </p>
            <p className="mt-2 font-medium text-white">
              Para confirmar el servicio, solo pedimos una <span><strong> seña del 30% del
              presupuesto total.</strong></span>
            </p>
          </div>
        </div>

        {/* Sección derecha: Contacto */}
        <div className="footer-contacto">
          <h2>Contacto JyS Viajes</h2>
          <div className="iconos">
            <a href="https://wa.me/+5493516691279" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/jysviajescba/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@tuusuario" target="_blank" rel="noopener noreferrer" title="TikTok">
              <FaTiktok />
            </a>
            <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="mailto:tuemail@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
              <FaEnvelope />
            </a>
          </div>
          <p className="credito">
            Web creada por <a href="https://tuperfil.dev" target="_blank" rel="noopener noreferrer">Joselin S. Zarate</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
