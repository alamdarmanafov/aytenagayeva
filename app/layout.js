import './globals.css';

const title = 'Aytən Ağayeva — ThetaHealing, Enerji Seansları və Life Coaching';
const description =
  'Aytən Ağayeva ilə ThetaHealing, JAAS, bolluq-bərəkət, qadın enerjisi seansları və life coaching. Bakıda (Studio Om Shri) və online şüuraltı transformasiya seansları.';

export const metadata = {
  title,
  description,
  keywords: [
    'Aytən Ağayeva',
    'Ayten Agayeva',
    'Ayten Aghayeva',
    'Aytan Aghayeva',
    'Aytən Agayeva',
    'aytenagayeva',
    'ayten.ga',
    'ThetaHealing Bakı',
    'ThetaHealing Azərbaycan',
    'ThetaHealing practitioner Baku',
    'enerji seansı',
    'enerji terapevti Bakı',
    'şüuraltı transformasiya',
    'life coach Bakı',
    'life coaching Azərbaycan',
    'meditasiya seansı',
    'meditasiya Bakı',
    'JAAS seansı',
    "Jean Adrienne's Clearing System",
    'bolluq bərəkət seansı',
    'qadın enerjisi seansı',
    'səs terapiyası Bakı',
    'sound healing Baku',
    'Studio Om Shri',
    'ruhsal inkişaf',
    'ruhsal sağlamlıq',
    'enerji balanslama',
    'access bars Bakı',
  ],
  openGraph: {
    title,
    description,
    locale: 'az_AZ',
    type: 'website',
  },
  verification: {
    google: 's3PJHz3c7zsq_S2ZP_aGmhNJDCzW4Lb6V8mlWfTrTyk',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
