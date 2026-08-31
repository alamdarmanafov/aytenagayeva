import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Məxfilik və Vacib Məlumat — Aytən Ağayeva',
  description: 'Seansların mahiyyəti, spiritual xidmətlərin əhatə dairəsi və şəxsi məlumatların məxfiliyi haqqında vacib məlumat.',
};

export default function Mexfilik() {
  return (
    <>
      <Header />

      <main>
        <section style={{ paddingTop: '3rem' }}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hüquqi Məlumat</p>
              <h2>Məxfilik və Vacib Məlumat</h2>
            </div>
            <div className="policy-content">
              <h3>⚠️ VACİB MƏLUMAT</h3>
              <p>
                Saytda təqdim olunan Theta Healing, Sound Healing, Sadhu, JAAS, enerji, meditasiya və digər
                spiritual seanslar şəxsi inkişaf, özünü tanıma, meditasiya və spiritual/energetik təcrübə
                məqsədi daşıyır.
              </p>
              <p>
                Bu xidmətlər tibbi müayinə, diaqnostika, müalicə, psixoterapiya və ya psixoloji konsultasiyanı
                əvəz etmir. Seanslar zamanı hər hansı xəstəliyin müalicə edildiyi, sağaldıldığı və ya müəyyən
                tibbi/psixoloji nəticənin mütləq əldə olunacağı vəd edilmir.
              </p>
              <p>
                Seanslarda yaşanan təcrübə və nəticələr fərdi olaraq dəyişə bilər. Hər bir insanın fiziki,
                emosional və spiritual təcrübəsi fərqlidir.
              </p>

              <h3>🔒 MƏXFİLİK VƏ ŞƏXSİ MƏLUMATLAR</h3>
              <p>
                Seans zamanı paylaşdığınız şəxsi məlumatlara hörmət edilir və onlar məxfi saxlanılır. Şəxsi
                məlumatlarınız sizin razılığınız olmadan reklam, paylaşım və ya digər kommersiya məqsədləri
                üçün istifadə edilmir, qanunla tələb olunan hallar istisna təşkil edir.
              </p>

              <p>
                Saytdan istifadə etməklə siz bu məlumatları oxuduğunuzu və spiritual xidmətlərin mahiyyətini
                başa düşdüyünüzü qəbul etmiş olursunuz.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
