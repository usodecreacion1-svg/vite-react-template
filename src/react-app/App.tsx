import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo">
            <h1>PropagandaPro</h1>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#features">Características</a></li>
              <li><a href="#how-it-works">Cómo Funciona</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#pricing">Precios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-fade-in-up" data-delay="100">Potencia tu negocio con propaganda efectiva</h1>
            <p className="animate-fade-in-up" data-delay="200">Plataforma integral para crear, gestionar y optimizar tus campañas publicitarias. Llega a más clientes y maximiza tu ROI.</p>
            <div className="hero-actions">
              <a href="#features" className="btn-primary animate-fade-in-up" data-delay="300">Comenzar Gratis</a>
              <a href="#contact" className="btn-secondary animate-fade-in-up" data-delay="400">Contáctanos</a>
            </div>
          </div>
          <div className="hero-image animate-fade-in-up" data-delay="500">
            <div className="ad-preview">
              {/* Placeholder for ad preview */}
              <div className="ad-frame">
                <div className="ad-content">
                  <h3>Tu Mensaje Aquí</h3>
                  <p>Descripción atractiva que convierte</p>
                  <button>Call to Action</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2>Características destacadas</h2>
          <p>Todo lo que necesitas para campañas exitosas</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Editor Intuitivo</h3>
              <p>Crea anuncios impactantes sin experiencia en diseño. Arrastrar y soltar con plantillas profesionales.</p>
            </div>
            <div className="feature-card">
              <h3>Segmentación Avanzada</h3>
              <p>Llega a tu audiencia ideal con filtros demográficos, intereses y comportamientos.</p>
            </div>
            <div className="feature-card">
              <h3>Analítica en Tiempo Real</h3>
              <p>Monitoriza el rendimiento de tus campañas y toma decisiones basadas en datos.</p>
            </div>
            <div className="feature-card">
              <h3>Optimización Automática</h3>
              <p>Nuestro AI ajusta tus anuncios para máximo rendimiento sin intervención manual.</p>
            </div>
            <div className="feature-card">
              <h3>Multiplataforma</h3>
              <p>Publica en Facebook, Instagram, Google, LinkedIn y más desde un solo panel.</p>
            </div>
            <div className="feature-card">
              <h3>Soporte 24/7</h3>
              <p>Equipo dedicado para ayudarte en cualquier momento y resolver tus dudas rápidamente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2>Cómo funciona</h2>
          <p>Tres pasos simples para lanzar tu primera campaña</p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Define tu objetivo</h3>
              <p>Elige qué quieres lograr: más ventas, leads, reconocimiento de marca o tráfico web.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Crea tu anuncio</h3>
              <p>Usa nuestro editor o suba tus diseños. Ajusta texto, imágenes y llamadas a la acción.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Lanza y optimiza</h3>
              <p>Publica en tus plataformas elegidas y observa cómo nuestro sistema mejora resultados continuamente.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <p>«PropagandaPro nos ayudó a aumentar nuestras ventas en un 150% en tres meses. La plataforma es increíblemente fácil de usar.»</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>María González</h4>
                  <p>Directora de Marketing, TechSolutions</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>«Finalmente entendemos nuestro ROI publicitario. Las analíticas son profundas pero accesibles.»</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Carlos Méndez</h4>
                  <p>Fundador, EcoStartups</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>«El soporte técnico resuelve cualquier problema en minutos. Vale cada centavo de la inversión.»</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Laura Chen</h4>
                  <p>Gerente de Campañas, GlobalBrands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container">
          <h2>Planes para cada necesidad</h2>
          <p>Elige el plan que se ajuste a tu escala y objetivos</p>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Básico</h3>
              <p className="price">$0</p>
              <p className="period">por mes</p>
              <ul>
                <li>Hasta 3 campañas activas</li>
                <li>Editor básico</li>
                <li>Analíticas estándar</li>
                <li>Soporte por email</li>
              </ul>
              <a href="#" className="btn-primary">Comenzar gratis</a>
            </div>
            <div className="pricing-card recommended">
              <h3>Profesional</h3>
              <p className="price">$49</p>
              <p className="period">por mes</p>
              <ul>
                <li>Campañas ilimitadas</li>
                <li>Editor avanzado con plantillas</li>
                <li>Analíticas avanzadas</li>
                <li>Optimización automática</li>
                <li>Soporte prioritario</li>
              </ul>
              <a href="#" className="btn-primary">Empezar prueba</a>
            </div>
            <div className="pricing-card">
              <h3>Empresarial</h3>
              <p className="price">$199</p>
              <p className="period">por mes</p>
              <ul>
                <li>Todo en Profesional</li>
                <li>Administrador de cuentas dedicado</li>
                <li>Integraciones personalizadas</li>
                <li>Reportes personalizados</li>
                <li>Soporte 24/7 telefónico</li>
              </ul>
              <a href="#" className="btn-primary">Solicitar demo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container">
          <h2>¿Listo para transformar tu publicidad?</h2>
          <p>Únete a miles de empresas que ya están creciendo con PropagandaPro</p>
          <a href="#" className="btn-primary">Comenzar gratis hoy</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>PropagandaPro</h3>
              <p>Impulsando tu éxito publicitario</p>
            </div>
            <div className="footer-links">
              <h4>Producto</h4>
              <ul>
                <li><a href="#features">Características</a></li>
                <li><a href="#how-it-works">Cómo funciona</a></li>
                <li><a href="#pricing">Precios</a></li>
                <li><a href="#">Integraciones</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Carreras</a></li>
                <li><a href="#">Prensa</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Soporte</h4>
              <ul>
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Tutoriales</a></li>
                <li><a href="#">Contáctanos</a></li>
                <li><a href="#">Estado del servicio</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 PropagandaPro. Todos los derechos reservados.</p>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;