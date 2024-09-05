// src/app/layout.tsx
// import '../styles/global.css'; // Global stil dosyasını import eder
import { ReactNode } from 'react';
import LanguageSelector from '../components/LanguageSelector'; // Dil seçici bileşen

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Next.js App</h1>
          <LanguageSelector />
        </header>
        <main>{children}</main>
        <footer>© 2024 My Next.js App</footer>
      </body>
    </html>
  );
}
