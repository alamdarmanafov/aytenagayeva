import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK } from '../constants';
import { trainings } from '../servicesData';

export const metadata = {
  title: 'Təlimlər — Aytən Ağayeva',
  description: 'Sadhu Təlimi və Theta Healing Təlimi — sertifikatlı transformativ proqramlar.',
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
              <h2>Təlimlər</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Hər kartın üzərinə klikləyərək ətraflı məlumatı görə bilərsiniz.
              </p>
            </div>
            <div className="services-grid">
              {trainings.map((item) => (
                <details className="service-card" key={item.title}>
                  <summary>
                    <div className="service-media">
                      <Image src={item.photo} alt={item.title} placeholder="blur" />
                    </div>
                    <div className="service-body">
                      <div className="service-body-head">
                        <h3>{item.title}</h3>
                        <svg className="chevron" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                      <p className="service-summary">{item.summary}</p>
                      {item.meta.length > 0 && (
                        <div className="service-meta">
                          {item.meta.map((m) => (
                            <span key={m}>{m}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </summary>
                  <div className="service-details">
                    {item.details}
                    <a className="service-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      Qeydiyyat üçün WhatsApp-da yazın →
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
