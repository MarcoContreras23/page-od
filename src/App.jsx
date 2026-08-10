import { useState } from "react";
import "./App.css";
import doctoraPhoto from "./assets/doctora.png";

const WHATSAPP_NUMBER = "573157292452";
const WHATSAPP_MESSAGE =
  "Hola, vi la publicidad del tratamiento de ortodoncia y quiero más información.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Nombre del lugar de atención. Si tienes la dirección exacta, reemplázala
// aquí y en LOCATION_MAPS_QUERY para que el mapa y el botón "Cómo llegar"
// apunten al punto exacto.
const LOCATION_NAME = "Centro Internacional de Especialistas";
const LOCATION_MAPS_QUERY = encodeURIComponent(LOCATION_NAME);
const LOCATION_MAPS_EMBED = `https://www.google.com/maps?q=${LOCATION_MAPS_QUERY}&output=embed`;
const LOCATION_MAPS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${LOCATION_MAPS_QUERY}`;

// TODO: reemplaza "#" por la URL real de cada red social.
const SOCIAL_LINKS = [
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61592402687233" },
  { label: "TikTok", icon: TikTokIcon, href: "#" },
];

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#ubicanos", label: "Ubícanos" },
  { href: "#contacto", label: "Contacto" },
];

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34z" />
      <path d="M12.04 2C6.58 2 2.13 6.42 2.13 11.86c0 1.84.5 3.55 1.38 5.03L2 22l5.27-1.46a10.02 10.02 0 0 0 4.77 1.21h.01c5.46 0 9.9-4.42 9.9-9.86C21.95 6.45 17.5 2 12.04 2zm0 18.07h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.87.84-3.06-.2-.31a8.16 8.16 0 0 1-1.26-4.38c0-4.53 3.7-8.22 8.26-8.22 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 0 1 2.42 5.82c0 4.53-3.7 8.19-8.26 8.19z" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.4 2.1 1.9 3.7 4 4v3c-1.5 0-2.9-.4-4-1.2v6.7a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.4 2.4 0 1 0 1.7 2.3V3h2.8z" />
    </svg>
  );
}

const BENEFITS = [
  {
    glyph: "🦷",
    title: "Mejora tu sonrisa",
    text: "Y recupera la confianza para sonreír sin pena, en cada foto y en cada conversación.",
  },
  {
    glyph: "⚙️",
    title: "Alinea tus dientes",
    text: "Corrige la posición dental y mejora tu salud bucal a largo plazo, no solo la estética.",
  },
  {
    glyph: "✨",
    title: "Resultados reales",
    text: "Un tratamiento serio, con seguimiento clínico, que cambia vidas de verdad.",
  },
  {
    glyph: "👥",
    title: "Atención especializada",
    text: "A cargo de residente de ortodoncia, supervisada en todo momento por docentes especialistas.",
  },
];

const FAQS = [
  {
    q: "¿Quién realiza el tratamiento?",
    a: "La Dra. Viviana Mogollón, residente de ortodoncia de la Universidad Santo Tomás, con supervisión constante de docentes especialistas en cada cita.",
  },
  {
    q: "¿Es un tratamiento serio y seguro?",
    a: "Sí. Al ser un programa universitario, cada procedimiento sigue protocolos clínicos y está respaldado por docentes especialistas que supervisan el proceso de principio a fin.",
  },
  {
    q: "¿Cuánto dura el tratamiento?",
    a: "Depende del caso de cada paciente. En la valoración inicial te contamos un estimado y el plan de controles.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El valor varía según el diagnóstico de cada persona. Escríbenos por WhatsApp para agendar tu valoración y conocer el costo.",
  },
  {
    q: "¿Dónde se realiza la atención?",
    a: `En ${LOCATION_NAME}. Encuentras la ubicación exacta y cómo llegar más abajo en esta página.`,
  },
  {
    q: "¿Cómo agendo una cita?",
    a: "Escríbenos por WhatsApp al 315 729 2452 y coordinamos tu valoración inicial.",
  },
];

// Casos de antes/después: reemplaza estas entradas con fotos reales de
// pacientes (con su autorización) y su testimonio cuando los tengas.
const TESTIMONIALS = [
  { caseLabel: "Caso 1" },
  { caseLabel: "Caso 2" },
  { caseLabel: "Caso 3" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <nav className="nav">
        <div className="nav__row">
          <a className="nav__mark" href="#inicio">
            Dra. Viviana Mogollón <span className="nav__mark-dot">·</span>{" "}
            Ortodoncia
          </a>

          <div className="nav__right">
            <div className="nav__links">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <a
              className="nav__cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Escríbenos
            </a>
            <button
              className="nav__toggle"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="nav__mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="btn btn--primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Escríbenos
            </a>
          </div>
        )}
      </nav>

      <header className="hero" id="inicio">
        <div>
          <span className="hero__eyebrow">
            Universidad Santo Tomás · Primer claustro universitario de
            Colombia
          </span>
          <h1>
            Mejora tu sonrisa con un tratamiento de <em>ortodoncia</em>
          </h1>
          <p className="lead">
            Estamos en búsqueda de personas que quieran mejorar su sonrisa con
            ortodoncia. Atención personalizada a cargo de la Dra. Viviana
            Mogollón, residente de ortodoncia, con supervisión constante de
            docentes especialistas.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Agenda tu valoración
            </a>
            <a className="btn btn--ghost" href="#nosotros">
              Conoce el tratamiento
            </a>
          </div>
          <p className="hero__proof">
            Tu sonrisa es tu mejor inversión. 315&nbsp;729&nbsp;2452 ·{" "}
            {LOCATION_NAME}.
          </p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="stack-card stack-card--1">
            <div className="stack-card__label">Paso 1</div>
            <div className="stack-card__value">Valoración</div>
          </div>
          <div className="stack-card stack-card--2">
            <div className="stack-card__label">Paso 2</div>
            <div className="stack-card__value">Brackets</div>
          </div>
          <div className="stack-card stack-card--3">
            <div className="stack-card__label">Paso 3</div>
            <div className="stack-card__value">Nueva sonrisa</div>
          </div>
        </div>
      </header>

      <div className="strip">
        <span>Universidad Santo Tomás</span>
        <span>{LOCATION_NAME}</span>
        <span>Docentes especialistas</span>
        <span>Atención supervisada</span>
      </div>

      <section className="about" id="nosotros">
        <div className="section-head">
          <span className="section-head__eyebrow">Nosotros</span>
          <h2>Un tratamiento universitario, con respaldo clínico real.</h2>
          <p className="section-head__text">
            Hacemos parte del programa de posgrado en ortodoncia de la
            Universidad Santo Tomás, primer claustro universitario de
            Colombia. Cada paciente es atendido con seguimiento clínico y
            supervisión constante, de la valoración inicial hasta el
            resultado final.
          </p>
        </div>

        <div className="doctor-card">
          <div className="doctor-card__photo">
            <img
              src={doctoraPhoto}
              alt="Dra. Viviana Mogollón, residente de ortodoncia"
              loading="lazy"
            />
          </div>
          <div>
            <span className="doctor-card__eyebrow">Residente de ortodoncia</span>
            <h3>Dra. Viviana Mogollón</h3>
            <p>
              Odontóloga en formación de posgrado en ortodoncia en la
              Universidad Santo Tomás. Atiende cada caso bajo la supervisión
              directa de docentes especialistas, siguiendo los protocolos
              clínicos del programa universitario, desde el diagnóstico hasta
              el control final del tratamiento.
            </p>
            <span className="doctor-card__badge">
              Supervisada por docentes especialistas · Universidad Santo Tomás
            </span>
          </div>
        </div>

        <div className="feature-grid">
          {BENEFITS.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__glyph" aria-hidden="true">
                {f.glyph}
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="quote">
        <div className="quote__inner">
          <span className="quote__mark">&ldquo;</span>
          <div>
            <p>Tu sonrisa es tu mejor inversión.</p>
            <cite>
              — Dra. Viviana Mogollón, Residente de Ortodoncia · Universidad
              Santo Tomás
            </cite>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-head">
          <span className="section-head__eyebrow">Preguntas frecuentes</span>
          <h2>Resolvemos tus dudas antes de empezar.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="location" id="ubicanos">
        <div className="section-head">
          <span className="section-head__eyebrow">Ubícanos</span>
          <h2>Te esperamos en {LOCATION_NAME}.</h2>
          <p className="section-head__text">
            Encuentra la ubicación en el mapa y traza tu ruta directamente
            desde aquí.
          </p>
        </div>
        <div className="location__grid">
          <iframe
            className="location__map"
            title="Ubicación en el mapa"
            src={LOCATION_MAPS_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="location__info">
            <div className="cta__info-item">
              <span className="cta__info-label">Lugar</span>
              <span>{LOCATION_NAME}</span>
            </div>
            <div className="cta__info-item">
              <span className="cta__info-label">WhatsApp</span>
              <span>315 729 2452</span>
            </div>
            <a
              className="btn btn--primary"
              href={LOCATION_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
            </a>
            <a
              className="btn btn--ghost"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Escríbenos
            </a>
          </div>
        </div>
      </section>

      <section className="cta" id="contacto">
        <h2>
          ¡Estamos aquí para ayudarte a lograr la sonrisa que siempre has
          querido!
        </h2>
        <p>
          Escríbenos por WhatsApp y agenda tu valoración de ortodoncia. Te
          atendemos en {LOCATION_NAME}.
        </p>
        <div className="cta__actions">
          <a
            className="btn btn--primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} />
            Contactar por WhatsApp
          </a>
          <a
            className="btn btn--ghost"
            href={LOCATION_MAPS_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Ver ubicación
          </a>
        </div>
        <div className="cta__info">
          <div className="cta__info-item">
            <span className="cta__info-label">WhatsApp</span>
            <span>315 729 2452</span>
          </div>
          <div className="cta__info-item">
            <span className="cta__info-label">Ubicación</span>
            <span>{LOCATION_NAME}</span>
          </div>
          <div className="cta__info-item">
            <span className="cta__info-label">Tratamiento</span>
            <span>Ortodoncia</span>
          </div>
        </div>

        <div className="social-row">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              className="social-icon"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <span>
            © {new Date().getFullYear()} Dra. Viviana Mogollón · Ortodoncia ·
            Universidad Santo Tomás
          </span>
          <div className="footer__links">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={LOCATION_MAPS_LINK} target="_blank" rel="noreferrer">
              Ubicación
            </a>
            <a href="#faq">Preguntas frecuentes</a>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-fab"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  );
}

export default App;
