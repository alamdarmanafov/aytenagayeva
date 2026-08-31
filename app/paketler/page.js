import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK } from '../constants';
import { packages } from '../servicesData';

export const metadata = {
  title: 'Paket Seanslar — Aytən Ağayeva',
  description: 'Çox aylıq seans paketləri — bir mövzu üzərində daha dərin işləmək istəyənlər üçün.',
};

export default function Paketler() {
  return (
    <>
      <Header />

      <main>
        <section id="packages" style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Paket Seanslar</p>
              <h2>Çox Aylıq Proqramlar</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Bir mövzu üzərində daha dərin işləmək istəyənlər üçün seanslardan ibarət paketlər.
              </p>
            </div>
            <div className="packages-grid">
              {packages.map((pkg) => (
                <div className="package-card" key={pkg.title}>
                  <div className="package-head">
                    <h3>{pkg.title}</h3>
                    <span className="package-price">{pkg.price}</span>
                  </div>
                  <p className="package-duration">{pkg.duration}</p>
                  <ul>
                    {pkg.sessions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a className="service-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Qeydiyyat üçün WhatsApp-da yazın →
                  </a>
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
