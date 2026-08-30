import Image from 'next/image';
import {
  IconLeaf,
  IconHeart,
  IconCoin,
  IconSpark,
  IconUsers,
  IconInstagram,
  IconWhatsapp,
  IconYoutube,
} from './icons';
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

const WHATSAPP_LINK = 'https://wa.me/994708768657';
const YOUTUBE_LINK = 'https://youtube.com/@ruhsaloyanis';
const INSTAGRAM_LINK = 'https://instagram.com/ayten.ga';

const specialties = [
  { icon: IconLeaf, title: 'Şüuraltı Transformasiya', text: 'Şüuraltı blokların və keçmiş travmaların şəfalandırılması.' },
  { icon: IconHeart, title: 'Emosional Balans', text: 'Stresin azaldılması və emosional tarazlığın bərpası.' },
  { icon: IconCoin, title: 'Bolluq-Bərəkət', text: 'Niyyət çalışmaları ilə bolluq şüurunun aktivləşdirilməsi.' },
  { icon: IconSpark, title: 'Enerji Balanslama', text: 'İntuitiv enerji oxuma və balanslama praktikaları.' },
  { icon: IconUsers, title: 'Qadın Enerjisi', text: 'Daxili gücün və qadınlıq enerjisinin aktivləşdirilməsi.' },
];

const services = [
  {
    photo: aboutPhoto,
    title: 'ThetaHealing — Şüuraltı Seans',
    summary:
      'Problemlərin şüuraltı səbəblərini müəyyən edib dərhal şəfalandırmağa imkan yaradan effektiv texnika. Beynimizdəki mənfi inancları, enerji tıxanıqlarını və travmaları aradan qaldırır.',
    meta: ['16 yaş və yuxarı', 'İlk 2 seans 1 saat 30 dəq', 'Sonra 1 saat', 'Ayda 1 dəfə'],
    details: (
      <>
        <p>Hansı mövzular üzərində işləmək olar:</p>
        <ul>
          <li>Ana və atadan gələn travmalar</li>
          <li>Ana bətni</li>
          <li>Evlilik</li>
          <li>Atılmaq</li>
          <li>Təcavüz</li>
          <li>Karyera</li>
          <li>Fobiyalar</li>
          <li>Sevilməmə</li>
          <li>Dəyərsizlik</li>
          <li>Rədd edilmə</li>
          <li>Münasibətlər</li>
          <li>Bolluq bərəkət</li>
          <li>Ölüm qorxusu</li>
          <li>Həyatda özünü tapma</li>
          <li>Fiziki və ruhi gərginliklər</li>
        </ul>
        <p>
          İlk 2 seans 1 saat 30 dəqiqə çəkir, sonrakı seanslar isə 1 saat davam edir. Neçə seans yetərlidir sualının
          cavabı ilk seansdan sonra bəlli olur, minimum 3-5 seans məsləhət görülür.
        </p>
      </>
    ),
  },
  {
    photo: heroPhoto,
    title: 'Life Coach Seansı',
    summary:
      'Potensialınızı maksimuma çıxarmaq, güclü tərəflərinizi üzə çıxarmaq, özünə inamı və disiplini artırmaq üçün fərdi koçluq seansı.',
    meta: ['50 dəqiqə'],
    details: (
      <>
        <p>
          Koç, rəsmi və qlobal təhsili olan, insanlara hədəflərinə çatmaları üçün dəstək olan mütəxəssisdir. Sizi olmaq
          istədiyiniz nöqtəyə ən uyğun və rahat yolla çatdırmağa kömək edir.
        </p>
        <p>Hansı mövzularda seans almaq olar:</p>
        <ul>
          <li>Şəxsi inkişaf</li>
          <li>Biznes, karyera</li>
          <li>Ailə, uşaq münasibəti</li>
          <li>Disiplin və s.</li>
        </ul>
        <p>
          Koç əvvəlcə güclü bir dinləyicidir; özəl suallarla sizə fərqindəlik yaşadır, bir növ güzgü olub potensialınızı
          üzə çıxarır və doğru addımları tapmağınıza şərait yaradır.
        </p>
      </>
    ),
  },
  {
    photo: headshotPhoto,
    title: 'Bolluq-Bərəkət Seansı',
    summary:
      'Maddi axının qarşısındakı görünməyən blokları təmizləyən, bolluq şüurunu aktivləşdirən və daxili dəyər hissini yüksəldən xüsusi seans.',
    meta: [],
    details: (
      <>
        <p>Bu seans kimlər üçündür:</p>
        <ul>
          <li>Maddi axının qarşısında bloklar hiss edənlər</li>
          <li>Eyni səylə çalışıb nəticə görə bilməyənlər</li>
          <li>Öz dəyərini artırmaq, özünə icazə vermək istəyənlər</li>
          <li>Qorxu və köhnə inanclardan azad olmaq istəyənlər</li>
          <li>Həyatında daha çox firavanlıq görmək istəyənlər</li>
        </ul>
        <p>Seansda nələr olur: köhnə pul qorxularının şəfalandırılması, bolluq şüurunun aktivləşdirilməsi, enerji bloklarının yumşaldılması, daxili dəyər və icazə enerjisinin yüksəldilməsi.</p>
        <p>Nəticələr: maddiyyata qarşı rahat münasibət, yeni imkan və gəlir axını, daha çox açılan qapılar, pul qəbul etmə enerjisinin güclənməsi.</p>
      </>
    ),
  },
  {
    photo: aboutPhoto,
    title: 'JAAS Seansı',
    summary:
      "Jean Adrienne's Clearing System — enerji protokolları və şüuraltı sorğu sistemləri ilə işləyən, strukturlaşdırılmış və dəqiq nəticəli bir metod.",
    meta: ['16 yaş və yuxarı', '40-60 dəqiqə'],
    details: (
      <>
        <p>Bu protokollar sayəsində:</p>
        <ul>
          <li>Sualın kök səbəbi dəqiq müəyyən edilir</li>
          <li>Şüuraltı inancın hansı mərhələdə yarandığı aşkarlanır</li>
          <li>Enerji blokunun mənbə nöqtəsi aydın görünür</li>
          <li>Konkret "bəli/xeyr", "blok/axın" cavabları gəlir</li>
          <li>Niyyətə uyğun enerji istiqaməti müəyyən olunur</li>
        </ul>
        <p>Seans hər kəs üçün təhlükəsizdir və fərdi enerji tələblərinə uyğun işlənir.</p>
      </>
    ),
  },
  {
    photo: heroPhoto,
    title: 'Qadın Enerjisi Seansı',
    summary:
      'Qadının içində gizli qalan ilahi gücü oyatmaq, ruhani enerjisini yüksəltmək və həyatında bolluq, sevgi və harmoniya axınını aktivləşdirmək üçün hazırlanmış xüsusi seans.',
    meta: [],
    details: (
      <>
        <ul>
          <li>Müqəddəs qadın yaradılışı ilə bağlantı — daxili gücün oyanması</li>
          <li>Qadın enerjisinin artımı — zəriflik, cazibə, özünə dəyər, intuisiya</li>
          <li>Bolluq kanalının açılması — qıtlıq və qorxu kodlarının təmizlənməsi</li>
          <li>Ailə və sevgi kanalının şəfalandırılması — ana nəsli və keçmiş münasibətlərin təmizlənməsi</li>
        </ul>
        <p>
          Seans sonunda özünə sevgi, özünə dəyər, güvən, sevgi və bolluğu qəbul etmə hissi ilə güclü bir enerji
          proqramı yaradılır.
        </p>
        <p>
          Kimlər üçündür: qadın enerjisini gücləndirmək, münasibətlərdə təkrar edən döngüləri dəyişmək, bolluq
          kanalındakı bloku açmaq və özünə sevgini şəfalandırmaq istəyən hər bir qadın üçün.
        </p>
      </>
    ),
  },
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

const INSTAGRAM_REVIEWS_LINK = 'https://www.instagram.com/stories/highlights/18083118499401201/';

const testimonials = [
  'Seans mənə çətin olsa da, çox şeyi yada salmağı və unutmağı öyrətdi. Hal-hazırda özümü çox yaxşı hiss edirəm, sizinlə bağışlamağı və şəfalanmağı öyrənirəm.',
  'İçimdə olan neqativ hissi atmağı bacardım, yığılıb qalmış duyğuları söküb atdım eləbil. Əvvəl mənfi fikir gələndə başıma ağrılar gəlirdi, indi heç düşünmək belə istəmir beynim.',
  'Seansdan çıxdığımda hiss etdiyim o xoşbəxtlik indi də üzərimdədir. Heç bir fiziki narahatlığım yoxdur artıq, bu sevinclə ətrafımdakı hər kəsi xoşbəxt etməyə çalışıram.',
  '6 il içimdə saxladığım qorxu hissi, uşaqlıqdan gələn günahkarlıq hissi — artıq həmin hisslər yoxdur məndə. Sonsuz təşəkkür edirəm.',
  'Otağın aurası, mühiti o qədər gözəl idi ki, getmək istəmirdim heç. İlk gündən belə təsir gördümsə, sonrakı günlər daha yaxşı olacaq.',
  'Sizin yanınıza gəlməmişdən bir neçə saat sonra özümdə fərqindəlik hiss etdim, insanlara qırılmamaq üçün "yox" deməyi bacardım və özümü ruhən çox rahatlamış hiss edirəm.',
  'Mənə özümü sevdirdiyiniz üçün çox sağ olun. Seans vaxtı ən çox təsirləndiyim an özümü qucaqlayanda oldu — əsas sevgini özümə göstərməli olduğumu anladım.',
  'Özümü yeni bir insan kimi hiss edirəm. Sizin yanınıza gəlməyimlə həyatımda böyük iz qoyan bir hadisəni tamam fərqli görməyə başladım.',
];

export default function Home() {
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
          <a className="nav-logo" href="#top">
            Aytən Ağayeva
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">Haqqımda</a>
            </li>
            <li>
              <a href="#services">Seanslar</a>
            </li>
            <li>
              <a href="#certificates">Sertifikatlar</a>
            </li>
            <li>
              <a href="#testimonials">Rəylər</a>
            </li>
            <li>
              <a href="#contact">Qeydiyyat</a>
            </li>
          </ul>
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp ilə yaz
          </a>
        </div>
      </nav>

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
                <a className="btn btn-primary" href="#services">
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

        <section id="services">
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
                <strong>3</strong>
                <span>Dil (Az, Tr, Ru)</span>
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
            <div className="testimonials-grid">
              {testimonials.map((quote, i) => (
                <div className="testimonial-card" key={i}>
                  <span className="testimonial-quote">"</span>
                  <p>{quote}</p>
                </div>
              ))}
            </div>
            <p className="testimonials-more">
              Daha çox real rəy üçün:{' '}
              <a href={INSTAGRAM_REVIEWS_LINK} target="_blank" rel="noreferrer">
                Instagram — Nəticələr
              </a>
            </p>
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
                Sadəcə online və canlı studioda seanslar keçirilir. Qeydiyyat üçün öncədən yazılmaq mütləqdir.
                Qiymətlə bağlı məlumat WhatsApp-da veriləcək.
              </p>
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp ilə yaz
              </a>
            </div>
          </div>
        </section>
      </main>

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
                  <a href="#about">Haqqımda</a>
                </li>
                <li>
                  <a href="#services">Seanslar</a>
                </li>
                <li>
                  <a href="#certificates">Sertifikatlar</a>
                </li>
                <li>
                  <a href="#testimonials">Rəylər</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Seanslar</h4>
              <ul>
                {services.slice(0, 4).map((s) => (
                  <li key={s.title}>
                    <a href="#services">{s.title}</a>
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
    </>
  );
}
