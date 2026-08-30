import './globals.css';

export const metadata = {
  title: 'Aytən Ağayeva',
  description: 'Aytən Ağayeva — şəxsi portfolio saytı',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
