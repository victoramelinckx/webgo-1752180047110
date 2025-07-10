
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas." subheadline="Digitaliza tu negocio rápidamente con nuestro soporte 24/7, sin complicaciones ni esperas." cta1="Empieza Ahora" />
<How step1Title="Solicita tu web" step1Desc="Completa un sencillo formulario online." step2Title="Creamos tu sitio" step2Desc="Diseñamos una web lista para vender." step3Title="Lanzamiento express" step3Desc="Tu web activa en menos de 24 horas." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Ahora" subheadline="Transformamos recomendaciones en ventas online con soluciones simples y efectivas, sin complicaciones." beneficiotitulo1="Fácil Implementación" beneficio1="Simplifica la gestión del sitio web." beneficiotitulo2="Aumento de Ventas" beneficio2="Convierte recomendaciones en clientes online." />
<Services heading="Transforma tu Negocio Digitalmente" description="Sitios web efectivos sin complicaciones ni pérdida de tiempo." services={[{"name":"Diseño Web Express","icon":"bolt","description":"Webs listas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu web."},{"name":"SEO Optimizado","icon":"chart-line","description":"Aumenta tu visibilidad online."},{"name":"Integración de E-commerce","icon":"shopping-cart","description":"Vende online fácilmente."},{"name":"Automatización de Marketing","icon":"robot","description":"Simplifica tus campañas digitales."},{"name":"Análisis de tráfico","icon":"analytics","description":"Conoce el comportamiento de tus clientes."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web impresionantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas?","respuesta":"WebGo crea sitios web personalizados que hacen que vender en línea sea fácil. Nos encargamos de todo para que tú puedas concentrarte en lo que mejor sabes hacer: manejar tu negocio."},{"pregunta":"¿Qué beneficios obtendré al vender online con WebGo?","respuesta":"Con WebGo, tus ventas pueden aumentar al llegar a más clientes potenciales en línea. Además, nuestros sitios web están optimizados para SEO, lo que significa más visibilidad y más ventas."},{"pregunta":"¿Necesito tener experiencia técnica para usar los servicios de WebGo?","respuesta":"No, no necesitas experiencia técnica. WebGo se encargará de todo el proceso de construcción y mantenimiento de tu sitio web, así tendrás más tiempo para dedicar a tu negocio."},{"pregunta":"¿Cuánto tiempo tomará tener mi sitio web listo con WebGo?","respuesta":"WebGo trabaja de manera eficiente para que tu sitio web esté listo en poco tiempo. Nos aseguramos de que la transición a las ventas online sea sencilla y rápida."},{"pregunta":"¿Cómo WebGo puede ayudarme si no sé cómo generar ventas online?","respuesta":"WebGo se especializa en crear estrategias de marketing digital que aumentan tus ventas online. Desde SEO hasta campañas en redes sociales, te ayudamos a llegar a más clientes y a vender más."}]} />
<BookAppointment 
                      heading="Digitaliza tu Ventas y Crece" 
                      description="Únete a WebGo y transforma tus recomendaciones en ventas online sin complicaciones. Simplifica tu negocio y alcanza más clientes con nuestra ayuda experta."
                      formPostUrl="api/contact-us"
                      projectId="vHP4PisDjjQ9QCXQDsvDHvINO1u1"
                    />
<Footer />
    </main>
  );
}
