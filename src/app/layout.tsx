import "./styles/index.scss";
import Aside from "@/widgets/aside";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="app-container">
          <Aside/>
          <main className="app-body">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
