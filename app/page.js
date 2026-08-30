import {
  IconLeaf,
  IconShield,
  IconSpark,
  IconClock,
  IconUsers,
  IconMail,
  IconPhone,
  IconMapPin,
  IconInstagram,
  IconLinkedin,
  IconGithub,
} from './icons';

const features = [
  { icon: IconLeaf, title: 'Diqqətli Yanaşma', text: 'Hər layihəyə detallara önəm verərək yanaşıram.' },
  { icon: IconShield, title: 'Etibarlı Nəticə', text: 'Keyfiyyət və vaxtında təhvil ön planda olur.' },
  { icon: IconSpark, title: 'Yaradıcı Həllər', text: 'Fərqli fikirlərlə orijinal nəticələr yaradıram.' },
  { icon: IconClock, title: 'Vaxtında Təhvil', text: 'Razılaşdırılmış müddətə hörmətlə yanaşıram.' },
  { icon: IconUsers, title: 'Əməkdaşlıq', text: 'Müştəri ilə açıq ünsiyyət və şəffaf proses.' },
];

const services = [
  { title: 'Xidmət 1', text: 'Bu xidmətin qısa təsviri buraya yazılacaq.' },
  { title: 'Xidmət 2', text: 'Bu xidmətin qısa təsviri buraya yazılacaq.' },
  { title: 'Xidmət 3', text: 'Bu xidmətin qısa təsviri buraya yazılacaq.' },
  { title: 'Xidmət 4', text: 'Bu xidmətin qısa təsviri buraya yazılacaq.' },
  { title: 'Xidmət 5', text: 'Bu xidmətin qısa təsviri buraya yazılacaq.' },
  { title: 'Xidmət 6', text: 'Bu xidmətin qısa təsviri buraya yazılacaq.' },
];

const testimonials = [
  { name: 'Nigar M.', role: 'Müştəri', text: '"Peşəkar yanaşma və vaxtında təhvil üçün təşəkkürlər."' },
  { name: 'Elvin R.', role: 'Həmkar', text: '"Yaradıcı fikirləri və məsuliyyəti ilə seçilir."' },
  { name: 'Səbinə T.', role: 'Müştəri', text: '"Gözlədiyimdən daha yaxşı nəticə aldıq."' },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <span>info@aytenagayeva.com</span>
          <div className="topbar-socials">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-logo" href="#top">
            Aytən Ağayeva
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">Haqqımda</a>
            </li>
            <li>
              <a href="#services">Xidmətlər</a>
            </li>
            <li>
              <a href="#testimonials">Rəylər</a>
            </li>
            <li>
              <a href="#contact">Əlaqə</a>
            </li>
          </ul>
          <a className="btn btn-primary" href="#contact">
            Əlaqə saxla
          </a>
        </div>
      </nav>

      <main>
        <section id="top" className="hero container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h1>Salam, mən Aytən Ağayevayam</h1>
              <p className="lead">
                Buraya özünüz haqqında qısa bir tanıtım cümləsi yazacaqsınız — kim
                olduğunuz, nə ilə məşğul olduğunuz və nəyə üstünlük verdiyiniz.
              </p>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span>5.0 — məmnun müştərilər</span>
              </div>
              <div className="btn-row">
                <a className="btn btn-primary" href="#services">
                  Xidmətlərimə bax
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Əlaqə saxla
                </a>
              </div>
            </div>
            <div className="hero-media">
              <div className="placeholder-photo">Şəkliniz buraya əlavə olunacaq</div>
              <div className="badge-float">
                <strong>5+</strong>
                <span>İl Təcrübə</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="features-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <div className="feature" key={title}>
                  <div className="feature-icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="container">
          <div className="section-head">
            <p className="eyebrow">Xidmətlər</p>
            <h2>Sizə Necə Kömək Edə Bilərəm</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <div className="card-media">Şəkil</div>
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="card-link" href="#contact">
                    Ətraflı →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-grid">
            <div className="about-photo">Şəkliniz buraya əlavə olunacaq</div>
            <div>
              <p className="eyebrow">Haqqımda</p>
              <h2>Təcrübə və Dəyərlərim</h2>
              <p>
                Bu bölmədə təhsiliniz, iş təcrübəniz və maraq dairəniz haqqında
                bir-iki paraqraf yazıla bilər. Məzmunu göndərsəniz, birbaşa bura
                əlavə edərəm.
              </p>
              <div className="stats-row">
                <div className="stat">
                  <strong>5+</strong>
                  <span>İl Təcrübə</span>
                </div>
                <div className="stat">
                  <strong>20+</strong>
                  <span>Layihə</span>
                </div>
                <div className="stat">
                  <strong>15+</strong>
                  <span>Müştəri</span>
                </div>
                <div className="stat">
                  <strong>98%</strong>
                  <span>Məmnuniyyət</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="container">
          <div className="section-head">
            <p className="eyebrow">Rəylər</p>
            <h2>Müştərilərim Nə Deyir</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial" key={t.name}>
                <span className="stars">★★★★★</span>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <div className="cta">
            <h2>Birlikdə İşləyək</h2>
            <p>Layihəniz haqqında danışmaq üçün mənimlə əlaqə saxlayın.</p>
            <a className="btn btn-primary" href="#contact">
              Əlaqə saxla
            </a>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Aytən Ağayeva</div>
              <p>Şəxsi portfolio — layihələr, bacarıqlar və əlaqə məlumatları.</p>
              <div className="footer-socials">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <IconInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <IconLinkedin />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <IconGithub />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Keçidlər</h4>
              <ul>
                <li>
                  <a href="#about">Haqqımda</a>
                </li>
                <li>
                  <a href="#services">Xidmətlər</a>
                </li>
                <li>
                  <a href="#testimonials">Rəylər</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Xidmətlər</h4>
              <ul>
                {services.slice(0, 3).map((s) => (
                  <li key={s.title}>
                    <a href="#services">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Əlaqə</h4>
              <ul>
                <li>
                  <a href="mailto:info@aytenagayeva.com">
                    <IconMail /> &nbsp;info@aytenagayeva.com
                  </a>
                </li>
                <li>
                  <a href="tel:+994000000000">
                    <IconPhone /> &nbsp;+994 00 000 00 00
                  </a>
                </li>
                <li>
                  <span>
                    <IconMapPin /> &nbsp;Bakı, Azərbaycan
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Aytən Ağayeva. Bütün hüquqlar qorunur.</span>
            <span>aytenagayeva.com</span>
          </div>
        </div>
      </footer>
    </>
  );
}
