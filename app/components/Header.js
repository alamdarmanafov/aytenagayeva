import { IconInstagram, IconYoutube, IconWhatsapp } from '../icons';
import { WHATSAPP_LINK, YOUTUBE_LINK, INSTAGRAM_LINK } from '../constants';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-socials">
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
      </div>

      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-logo" href="/">
            Aytən Ağayeva
          </a>
          <ul className="nav-links">
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
              <a href="/#certificates">Sertifikatlar</a>
            </li>
            <li>
              <a href="/#testimonials">Rəylər</a>
            </li>
          </ul>
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp ilə yaz
          </a>
        </div>
      </nav>
    </>
  );
}
