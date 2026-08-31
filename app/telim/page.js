import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK } from '../constants';
import { training } from '../servicesData';

export const metadata = {
  title: 'Sadhu Təlimi — Aytən Ağayeva',
  description: 'Sadhu Təlimi — 4 günlük transformativ proqram, terapist sertifikatı ilə başa çatan özünə qayıdış təlimi.',
};

export default function Telim() {
  return (
    <>
      <Header />

      <main>
        <section id="telim" style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Təlim</p>
              <h2>Sadhu Təlimi</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Terapist olub seanslar etmək hüququ verən 4 günlük transformativ proqram.
              </p>
            </div>
            <div className="services-grid">
              <details className="service-card" open>
                <summary>
                  <div className="service-media">
                    <Image src={training.photo} alt={training.title} placeholder="blur" />
                  </div>
                  <div className="service-body">
                    <div className="service-body-head">
                      <h3>{training.title}</h3>
                    </div>
                    <p className="service-summary">{training.summary}</p>
                    {training.meta.length > 0 && (
                      <div className="service-meta">
                        {training.meta.map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </summary>
                <div className="service-details">
                  {training.details}
                  <a className="service-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Qeydiyyat üçün WhatsApp-da yazın →
                  </a>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
