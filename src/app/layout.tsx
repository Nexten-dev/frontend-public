import "./styles/index.scss";
import favicon from "./favicon.png";
export const metadata = {
  title: "Instagram",
  description: "Instagram is the best social",
  icons: {
    icon: favicon.src
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
