import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Le Miel Havre - Charity, Faith and Hope',
  description: 'Le Miel Havre is dedicated to making a meaningful difference in the lives of those in need. Join us in building a brighter future through education, support, and compassion.',
  keywords: 'charity, NGO, education, children, sponsorship, humanitarian aid, Le Miel Havre',
  authors: [{ name: 'Le Miel Havre' }],
  openGraph: {
    title: 'Le Miel Havre - Charity, Faith and Hope',
    description: 'Making a meaningful difference in the lives of those in need',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
