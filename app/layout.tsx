import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, DM_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ali Abdo | Remote Freelance Front-End & Data Architect',
  description: 'Experienced freelance engineer bridging the gap between high-performance Next.js frontends and powerful data science (Python, ML). Available for hire worldwide.',
  keywords: 'Freelance Developer, Next.js Expert, React Developer, Data Analyst, Machine Learning, Python, Remote Contractor, Front-End Engineer',
  authors: [{ name: 'Ali Abdo' }],
  openGraph: {
    title: 'Ali Abdo | Digital Engineer & Consultant',
    description: 'Transforming complex data into beautiful, scalable web experiences.',
    url: 'https://github.com/Aliabdo6',
    siteName: 'Ali Abdo Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Abdo | Digital Engineer',
    description: 'Specializing in next-gen Front-End Architecture & Data Analytics.',
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23080B10"/><text x="50" y="70" font-family="monospace" font-size="65" font-weight="bold" fill="%2300FFD1" text-anchor="middle">&lt;/&gt;</text></svg>'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark dark:bg-[#080B10] bg-slate-50 transition-colors duration-400 scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dmSans.variable} font-sans antialiased text-slate-800 dark:text-slate-200`} suppressHydrationWarning>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
