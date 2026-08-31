import { IconInstagram, IconYoutube, IconWhatsapp } from '../icons';
import { WHATSAPP_LINK, YOUTUBE_LINK, INSTAGRAM_LINK } from '../constants';
import { services } from '../servicesData';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Aytən Ağayeva</div>
            <p>Şüuraltı seanslar, enerji praktikaları, meditasiya və şəxsi transformasiya.</p>
            <div className="footer-socials">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer" aria-label="YouTube">
                <IconYoutube />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <IconWhatsapp />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Keçidlər</h4>
            <ul>
              <li>
                <a href="/#about">Haqqımda</a>
              </li>
              <li>
                <a href="/seanslar">Seanslar</a>
              </li>
              <li>
                <a href="/paketler">Paket Seanslar</a>
              </li>
              <li>
                <a href="/telim">Təlim</a>
              </li>
              <li>
                <a href="/meditasiya">Meditasiya</a>
              </li>
              <li>
                <a href="/#certificates">Sertifikatlar</a>
              </li>
              <li>
                <a href="/#testimonials">Rəylər</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Seanslar</h4>
            <ul>
              {services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <a href="/seanslar">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aytən Ağayeva. Bütün hüquqlar qorunur.</span>
        </div>
      </div>
    </footer>
  );
}
