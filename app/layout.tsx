import "./globals.css";
import Header from "./compornents/Header";
import Footer from "./compornents/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <body>
      <Header />
      {children}
      <Footer />
    </body>
    </html>
  );
}
