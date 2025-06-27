import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Product Showcase',
  description: 'Simple product app using Fake Store API',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
