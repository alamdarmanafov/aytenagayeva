import './globals.css';

const title = 'Aytən Ağayeva — ThetaHealing, Enerji Seansları və Life Coaching';
const description =
  'Aytən Ağayeva ilə ThetaHealing, JAAS, bolluq-bərəkət, qadın enerjisi seansları və life coaching. Bakıda (Studio Om Shri) və online şüuraltı transformasiya seansları.';

export const metadata = {
  title,
  description,
  keywords: [
    'Aytən Ağayeva',
    'ThetaHealing Bakı',
    'ThetaHealing Azərbaycan',
    'enerji seansı',
    'şüuraltı transformasiya',
    'life coach Bakı',
    'life coaching Azərbaycan',
    'meditasiya seansı',
    'JAAS seansı',
    'bolluq bərəkət seansı',
    'qadın enerjisi seansı',
    'Studio Om Shri',
    'ruhsal inkişaf',
    'enerji balanslama',
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
