import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { WHATSAPP_LINK, YOUTUBE_LINK } from '../constants';
import qadinEnerjisiMeditasiya from '../../public/images/services/meditasiya-qadin-enerjisi.jpg';
import olumlamaMeditasiya from '../../public/images/services/meditasiya-olumlama.jpg';
import bolluqBeraketMeditasiya from '../../public/images/services/meditasiya-bolluq-beraket.jpg';

export const metadata = {
  title: 'Meditasiya — Aytən Ağayeva',
  description: 'Ödənişli və ödənişsiz meditasiya seansları. Pulsuz meditasiyalar YouTube kanalında.',
};

const videoIds = ['7C65kCZYCgw', 'K2WaT4DoFi0', 'VA_MWMDjrAM', '2lXMlGIYQxA', 'QMqW7OeQHj4'];

const paidMeditations = [
  {
    photo: qadinEnerjisiMeditasiya,
    title: 'Qadın Enerjisi & Neqativ İnancların Təmizlənməsi',
    price: '50 AZN',
    summary:
      'Qadınlıq, özünə dəyər, sevgi, münasibətlər və bolluqla bağlı şüuraltında formalaşmış məhdudlaşdırıcı inanclar üzərində işləmək üçün hazırlanıb.',
    details: (
      <>
        <p>
          Bu meditasiya qadınlıq, özünə dəyər, sevgi, münasibətlər və bolluqla bağlı şüuraltında formalaşmış
          məhdudlaşdırıcı inanclar üzərində işləmək üçün hazırlanıb.
        </p>
        <p>
          "Sevilməyə layiq deyiləm", "mənə dəyər verilməz", "qadın olmaq çətindir", "hər şeyi özüm etməliyəm" kimi
          daxili inancların fərqinə vararaq onları daha dəstəkləyici düşüncələrlə əvəzləməyə yönəlir.
        </p>
        <p>
          Meditasiya qadın enerjisi ilə əlaqəni gücləndirməyə, özünü qəbul etməyi və daxili rahatlığı dəstəkləməyə
          xidmət edir.
        </p>
      </>
    ),
  },
  {
    photo: olumlamaMeditasiya,
    title: 'Olumlama Meditasiyası',
    price: '50 AZN',
    summary: 'Gündəlik düşüncə tərzini daha pozitiv və dəstəkləyici istiqamətə yönəltmək üçün hazırlanıb.',
    details: (
      <>
        <p>Bu meditasiya gündəlik düşüncə tərzini daha pozitiv və dəstəkləyici istiqamətə yönəltmək üçün hazırlanıb.</p>
        <p>
          Sevgi, özünə dəyər, sağlamlıq, rahatlıq, inam, motivasiya, münasibətlər və həyat məqsədi kimi müxtəlif
          mövzularda pozitiv cümlələrdən istifadə olunur.
        </p>
        <p>
          21 gün ərzində mütəmadi dinləməklə pozitiv düşüncələrə daha çox fokuslanmaq, özün haqqında daha
          dəstəkləyici daxili dialoq formalaşdırmaq və həyatına fərqli baxış qazandırmaq məqsədi daşıyır.
        </p>
      </>
    ),
  },
  {
    photo: bolluqBeraketMeditasiya,
    title: 'Bolluq-Bərəkət — 250 Pozitiv İnanc Yükləmə Meditasiyası',
    price: '50 AZN',
    summary:
      'Pul, bolluq, uğur və imkanlarla bağlı şüuraltında formalaşmış məhdudlaşdırıcı inanclar üzərində işləyən, 250 pozitiv inanc üzərində qurulmuş meditasiya.',
    details: (
      <>
        <p>
          Pul, bolluq, uğur və imkanlarla bağlı şüuraltında formalaşmış məhdudlaşdırıcı inanclar həyatımıza və
          seçimlərimizə təsir edə bilər.
        </p>
        <p>
          Bu meditasiya 250 pozitiv inanc üzərində qurulub və bolluq-bərəkət, pul, qazanc, qəbul etmə, layiqlilik,
          uğur və imkanlarla bağlı daha dəstəkləyici düşüncə modelinin formalaşmasına yönəlib.
        </p>
        <p>
          Məqsəd bolluğu yalnız maddi anlayış kimi deyil, həyatdakı imkanları, sevgini, rahatlığı, uğuru və bərəkəti
          qəbul etməyə açıq olmaq kimi dərk etməyə dəstək olmaqdır.
        </p>
        <p>
          21 gün boyunca davamlı dinləmə bu pozitiv mesajların gündəlik düşüncə və fokusunuzda daha çox yer
          almasına kömək edə bilər.
        </p>
      </>
    ),
  },
];

export default function Meditasiya() {
  return (
    <>
      <Header />

      <main>
        <input type="radio" name="meditasiya-tab" id="tab-paid" className="tab-radio" defaultChecked />
        <input type="radio" name="meditasiya-tab" id="tab-free" className="tab-radio" />

        <section style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Meditasiya</p>
              <h2>Ödənişli və Ödənişsiz Meditasiyalar</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Aşağıdan seçim edərək hazır meditasiyalara və ya YouTube videolarına baxa bilərsiniz.
              </p>
            </div>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <label htmlFor="tab-paid" className="btn btn-primary tab-label">
                Ödənişli Meditasiya
              </label>
              <label htmlFor="tab-free" className="btn btn-secondary tab-label">
                Ödənişsiz Meditasiya
              </label>
            </div>
          </div>
        </section>

        <section id="panel-paid" className="tab-panel">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Ödənişli</p>
              <h2>Hazır Meditasiyalar</h2>
              <p className="lead" style={{ margin: '0 auto' }}>
                Hər kartın üzərinə klikləyərək ətraflı məlumatı görə bilərsiniz.
              </p>
            </div>
            <div className="services-grid">
              {paidMeditations.map((item) => (
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
                      <div className="service-meta">
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </summary>
                  <div className="service-details">
                    {item.details}
                    <a className="service-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                      Sifariş üçün WhatsApp-da yazın →
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="panel-free" className="tab-panel">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">YouTube</p>
              <h2>Meditasiya Videoları</h2>
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
