import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK, YOUTUBE_LINK } from '../constants';

export const metadata = {
  title: 'Meditasiya — Aytən Ağayeva',
  description: 'Ödənişli və ödənişsiz meditasiya seansları. Pulsuz meditasiyalar YouTube kanalında.',
};

const videoIds = ['7C65kCZYCgw', 'K2WaT4DoFi0', 'VA_MWMDjrAM', '2lXMlGIYQxA', 'QMqW7OeQHj4'];

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
            <div className="section-head">
              <p className="eyebrow">YouTube</p>
              <h2>Pulsuz Meditasiya Videoları</h2>
            </div>
            <div className="videos-slider">
              <div className="videos-track">
                {[...videoIds, ...videoIds].map((id, i) => (
                  <a
                    className="video-card"
                    key={i}
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="Meditasiya videosu" loading="lazy" />
                    <span className="play-icon">
                      <span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="testimonials-more">
              <a className="btn btn-primary" href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
                Daha çox video — YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
