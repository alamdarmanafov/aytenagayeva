export const metadata = {
  title: 'Aytən Ağayeva',
  description: 'aytenagayeva.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  );
}
