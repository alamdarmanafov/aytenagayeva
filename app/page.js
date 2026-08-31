import Image from 'next/image';
import { IconLeaf, IconHeart, IconCoin, IconSpark, IconUsers } from './icons';
import Header from './components/Header';
import Footer from './components/Footer';
import { WHATSAPP_LINK, INSTAGRAM_REVIEWS_LINK } from './constants';
import heroPhoto from '../public/images/photos/portrait-studio.jpg';
import aboutPhoto from '../public/images/photos/session-in-progress.jpg';
import headshotPhoto from '../public/images/photos/headshot.jpg';
import certBasicDna from '../public/images/certificates/basic-dna.jpg';
import certBasicDnaFull from '../public/images/certificates/basic-dna-full.jpg';
import certAdvancedDna from '../public/images/certificates/advanced-dna.jpg';
import certAdvancedDnaFull from '../public/images/certificates/advanced-dna-full.jpg';
import certYouAndCreator from '../public/images/certificates/you-and-creator.jpg';
import certYouAndCreatorFull from '../public/images/certificates/you-and-creator-full.jpg';
import certDigDeeper from '../public/images/certificates/dig-deeper.jpg';
import certDigDeeperFull from '../public/images/certificates/dig-deeper-full.jpg';
import certManifesting from '../public/images/certificates/manifesting-abundance.jpg';
import certManifestingFull from '../public/images/certificates/manifesting-abundance-full.jpg';
import certJaas from '../public/images/certificates/jaas.jpg';
import certJaasFull from '../public/images/certificates/jaas-full.jpg';

const specialties = [
  { icon: IconLeaf, title: 'Şüuraltı Transformasiya', text: 'Şüuraltı blokların və keçmiş travmaların şəfalandırılması.' },
  { icon: IconHeart, title: 'Emosional Balans', text: 'Stresin azaldılması və emosional tarazlığın bərpası.' },
  { icon: IconCoin, title: 'Bolluq-Bərəkət', text: 'Niyyət çalışmaları ilə bolluq şüurunun aktivləşdirilməsi.' },
  { icon: IconSpark, title: 'Enerji Balanslama', text: 'İntuitiv enerji oxuma və balanslama praktikaları.' },
  { icon: IconUsers, title: 'Qadın Enerjisi', text: 'Daxili gücün və qadınlıq enerjisinin aktivləşdirilməsi.' },
];

const certificates = [
  {
    year: '2023',
    images: [
      { src: certBasicDna, full: certBasicDnaFull, label: 'ThetaHealing — Basic DNA' },
      { src: certAdvancedDna, full: certAdvancedDnaFull, label: 'ThetaHealing — Advanced DNA' },
      { src: certDigDeeper, full: certDigDeeperFull, label: 'ThetaHealing — Dig Deeper' },
      { src: certYouAndCreator, full: certYouAndCreatorFull, label: 'ThetaHealing — You and the Creator' },
    ],
    pills: ['Life Coaching', 'Sadhu Therapy'],
  },
  {
    year: '2024',
    images: [],
    pills: ['Kvant Therapy', 'Access Bars', 'Sound Healing', 'Access Body', 'Regression'],
  },
  {
    year: '2025',
    images: [
      { src: certManifesting, full: certManifestingFull, label: 'ThetaHealing — Manifesting and Abundance' },
      { src: certJaas, full: certJaasFull, label: "JAAS — Jean Adrienne's Clearing System" },
    ],
    pills: [],
  },
];

const testimonials = [
  'Seans mənə çətin olsa da, çox şeyi yada salmağı və unutmağı öyrətdi. Hal-hazırda özümü çox yaxşı hiss edirəm, sizinlə bağışlamağı və şəfalanmağı öyrənirəm.',
  'İçimdə olan neqativ hissi atmağı bacardım, yığılıb qalmış duyğuları söküb atdım eləbil. Əvvəl mənfi fikir gələndə başıma ağrılar gəlirdi, indi heç düşünmək belə istəmir beynim.',
  'Seansdan çıxdığımda hiss etdiyim o xoşbəxtlik indi də üzərimdədir. Heç bir fiziki narahatlığım yoxdur artıq, bu sevinclə ətrafımdakı hər kəsi xoşbəxt etməyə çalışıram.',
  '6 il içimdə saxladığım qorxu hissi, uşaqlıqdan gələn günahkarlıq hissi — artıq həmin hisslər yoxdur məndə. Sonsuz təşəkkür edirəm.',
  'Otağın aurası, mühiti o qədər gözəl idi ki, getmək istəmirdim heç. İlk gündən belə təsir gördümsə, sonrakı günlər daha yaxşı olacaq.',
  'Mənə özümü sevdirdiyiniz üçün çox sağ olun. Seans vaxtı ən çox təsirləndiyim an özümü qucaqlayanda oldu — əsas sevgini özümə göstərməli olduğumu anladım.',
  'Özümü yeni bir insan kimi hiss edirəm. Sizin yanınıza gəlməyimlə həyatımda böyük iz qoyan bir hadisəni tamam fərqli görməyə başladım.',
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="top" className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Ruhsal Yolculuğa Xoş Gəldin ✨</p>
              <h1>Aytən Ağayeva</h1>
              <p className="lead">
                Son illər ruhsal sağlamlığın önəmini bütün dünya anlayır. Elm qəbul etməyə başlayır ki, bütün
                xəstəliklərin altında yatan keçmiş travmalardır. ThetaHealing şüuraltı meditasiya üsulu, enerji
                praktikaları və şəxsi inkişaf seansları ilə sizə bu yolda rəhbərlik edirəm.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="/seanslar">
                  Seanslara bax
                </a>
                <a className="btn btn-secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                  WhatsApp ilə əlaqə
                </a>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-photo">
                <Image src={heroPhoto} alt="Aytən Ağayeva — Studio Om Shri" placeholder="blur" priority />
              </div>
              <div className="badge-float">
                <strong>2023</strong>
                <span>-dən bəri</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="features-grid">
              {specialties.map(({ icon: Icon, title, text }) => (
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

        <section id="about" className="about">
          <div className="container about-grid">
            <div className="hero-photo">
              <Image src={aboutPhoto} alt="Aytən Ağayeva — səs terapiyası seansı" placeholder="blur" />
            </div>
            <div>
              <p className="eyebrow">Haqqımda</p>
              <h2>Şəxsi İnkişaf və Şüuraltı Transformasiya</h2>
              <p>
                Mən Aytən Ağayeva — şəxsi inkişaf, meditasiya və şüuraltı transformasiya sahəsində fəaliyyət
                göstərirəm. 2023-cü ildən etibarən aktiv şəkildə fərdi və qrup seansları keçirirəm, online və canlı
                workshoplar təşkil edirəm.
              </p>
              <ul className="specialty-list">
                <li>Şüuraltı blokların transformasiyası</li>
                <li>Emosional balans və stresin azaldılması</li>
                <li>Bolluq-bərəkət və niyyət çalışmaları</li>
                <li>Enerji balanslama və intuitiv iş</li>
                <li>Qadın enerjisi və daxili gücün aktivləşdirilməsi</li>
                <li>Şəxsi inkişaf və həyat keyfiyyətinin yüksəldilməsi</li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="stats-row">
              <div className="stat">
                <strong>2023</strong>
                <span>Fəaliyyətə başlama</span>
              </div>
              <div className="stat">
                <strong>2000+</strong>
                <span>İştirakçı</span>
              </div>
              <div className="stat">
                <strong>5</strong>
                <span>Seans növü</span>
              </div>
              <div className="stat">
                <strong>1</strong>
                <span>Dil (Az)</span>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sertifikatlar</p>
              <h2>Təhsil və Sertifikatlar</h2>
            </div>
            {certificates.map((group) => (
              <div className="cert-year" key={group.year}>
                <h3>{group.year}</h3>
                {group.images.length > 0 && (
                  <div className="cert-grid">
                    {group.images.map((cert) => (
                      <a
                        className="cert-thumb"
                        key={cert.label}
                        href={cert.full.src}
                        target="_blank"
                        rel="noreferrer"
                        title={cert.label}
                      >
                        <Image src={cert.src} alt={cert.label} placeholder="blur" />
                      </a>
                    ))}
                  </div>
                )}
                {group.pills.length > 0 && (
                  <div className="cert-pills">
                    {group.pills.map((item) => (
                      <span className="cert-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Rəylər</p>
              <h2>Müştərilərimin Söylədikləri</h2>
            </div>
            <div className="testimonials-slider">
              <div className="testimonials-track">
                {[...testimonials, ...testimonials].map((quote, i) => (
                  <div className="testimonial-card" key={i}>
                    <span className="stars">★★★★★</span>
                    <p>{quote}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonials-more">
              <a className="btn btn-primary" href={INSTAGRAM_REVIEWS_LINK} target="_blank" rel="noreferrer">
                Daha çox rəy — Instagram
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="cta" id="contact">
              <div className="cta-avatar">
                <Image src={headshotPhoto} alt="Aytən Ağayeva" placeholder="blur" />
              </div>
              <h2>Qeydiyyat</h2>
              <p>
                Seanslar online və ya canlı studioda keçirilir. Qeydiyyat üçün öncədən yazılmaq mütləqdir.
                Qiymətlə bağlı məlumat WhatsApp-da veriləcək.
              </p>
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp ilə yaz
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
