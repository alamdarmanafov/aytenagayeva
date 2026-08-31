import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK, YOUTUBE_LINK } from '../constants';

export const metadata = {
  title: 'Meditasiya — Aytən Ağayeva',
  description: 'Ödənişli və ödənişsiz meditasiya seansları. Pulsuz meditasiyalar YouTube kanalında.',
};

export default function Meditasiya() {
  return (
    <>
      <Header />

      <main>
        <section style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Meditasiya</p>
              <h2>Ödənişli və Ödənişsiz Meditasiyalar</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Fərdi ödənişli meditasiya seansı üçün WhatsApp-da yazın, ya da pulsuz meditasiyaları YouTube
                kanalımızda izləyin.
              </p>
            </div>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Ödənişli Meditasiya
              </a>
              <a className="btn btn-secondary" href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
                Ödənişsiz Meditasiya
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="cta">
              <h2>Pulsuz Meditasiyalar — YouTube</h2>
              <p>
                Ruh Saloyanı YouTube kanalında müntəzəm olaraq pulsuz meditasiya videoları paylaşılır. Kanala
                abunə olun ki, yeni videolardan xəbərdar olasınız.
              </p>
              <a className="btn btn-primary" href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
                YouTube kanalına keç
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
