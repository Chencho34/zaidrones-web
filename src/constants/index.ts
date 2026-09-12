
import { BusinessLine1, BusinessLine2, BusinessLine3 } from "../components/icons";

const businessLines = [
  {
    img: "images/business-lines-bg-1.webp",
    index: "01",
    title: "Venta de equipo",
    description:
      "Distribuidor oficial DJI Enterprise y Pix4D. Drones industriales, payloads y software de fotogrametría.",
    features: [
      "DJI Matrice 400 / 4T / 4E",
      "DJI Dock 3",
      "Zenmuse H30T, L3, P1",
      "PIX4Dmapper",
    ],
    href: "#equipo",
    icon: BusinessLine1,
    badge: "Distribución",
    featured: false,
  },
  {
    img: "images/business-lines-bg-2.webp",
    index: "02",
    title: "Servicios profesionales",
    description:
      "Capturamos y procesamos datos aéreos por proyecto: mapeo, inspección, monitoreo y contenido visual.",
    features: [
      "Ortomosaico y nube de puntos",
      "Inspección de infraestructura",
      "Monitoreo puntual",
      "Foto y video aéreo",
    ],
    href: "#servicios",
    icon: BusinessLine2,
    badge: "Por proyecto",
    featured: false,
  },
  {
    img: "images/business-lines-bg-3.webp",
    index: "03",
    title: "Vigilancia 24/7",
    description:
      "No solo instalamos un drone. Administramos toda la operación desde nuestro centro de monitoreo.",
    features: [
      "DJI Dock 3 instalado",
      "Patrullaje autónomo",
      "Pilotos especializados",
      "Reportes de cada misión",
    ],
    href: "#servicio-administrado",
    icon: BusinessLine3,
    badge: "Premium",
    featured: true,
  },
];

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Vigilancia 24/7", href: "#servicio-administrado" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const heroPaths = [
  {
    index: "01",
    label: "Servicios",
    title: "Datos aéreos por proyecto",
    href: "#servicios",
  },
  {
    index: "02",
    label: "Equipo",
    title: "DJI Enterprise y Pix4D",
    href: "#equipo",
  },
  {
    index: "03",
    label: "Vigilancia 24/7",
    title: "Solicitar demo administrada",
    href: "#servicio-administrado",
    featured: true,
  },
];

export {
  businessLines,
  navLinks,
  heroPaths,
}
