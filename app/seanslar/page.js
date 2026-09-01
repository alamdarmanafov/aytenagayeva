import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK } from '../constants';
import { services, prices } from '../servicesData';

export const metadata = {
  title: 'Seanslar — Aytən Ağayeva',
  description:
    'ThetaHealing, Life Coach, Bolluq-Bərəkət, JAAS, Qadın Enerjisi, Sound Healing seansları.',
};

export default function Seanslar() {
  return (
    <>
      <Header />

      <main>
        <section id="services" style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Seanslar</p>
              <h2>Necə Kömək Edə Bilərəm</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Hər kartın üzərinə klikləyərək ətraflı məlumatı görə bilərsiniz.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <details className="service-card" key={service.title}>
                  <summary>
                    <div className="service-media">
                      <Image src={service.photo} alt={service.title} placeholder="blur" />
                    </div>
                    <div className="service-body">
                      <div className="service-body-head">
                        <h3>{service.title}</h3>
                        <svg className="chevron" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                      <p className="service-summary">{service.summary}</p>
                      {service.meta.length > 0 && (
                        <div className="service-meta">
                          {service.meta.map((m) => (
                            <span key={m}>{m}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </summary>
                  <div className="service-details">
                    {service.details}
                    <a className="service-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      Qeydiyyat üçün WhatsApp-da yazın →
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="qiymetler">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Qiymətlər</p>
              <h2>Fərdi Seans Qiymətləri</h2>
            </div>
            <div className="price-list">
              {prices.map((p) => (
                <div className="price-row" key={p.title}>
                  <span>{p.title}</span>
                  <span className="price-value">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
