import './global.css';
import './style.css';

export const metadata = {
  metadataBase: new URL('https://www.stuartogiercounselling.com'),
  title: 'Counselling in St Albans & Online | Stuart Ogier',
  description:
    'Integrative counselling in St Albans, Hertfordshire — in person and online. A confidential, non-judgemental space for anxiety, depression, addiction, bereavement and life transitions.',
  authors: [{ name: 'Stuart Ogier' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Counselling in St Albans & Online | Stuart Ogier',
    description:
      'A confidential space where you can be truly heard. Working with anxiety, depression, addiction, bereavement and life transitions.',
    type: 'website',
    url: '/',
    locale: 'en_GB',
    siteName: 'Stuart Ogier Counselling',
    images: [{ url: '/images/og.png', width: 1200, height: 900, alt: 'Stuart Ogier Counselling — St Albans & online' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Counselling in St Albans & Online | Stuart Ogier',
    description:
      'A confidential space where you can be truly heard. Working with anxiety, depression, addiction, bereavement and life transitions.',
  },
};

export const viewport = {
  themeColor: '#2a1f2e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Stuart Ogier Counselling',
  url: 'https://www.stuartogiercounselling.com/',
  image: 'https://www.stuartogiercounselling.com/images/me2.png',
  email: 'hi@stuartogiercounselling.com',
  description:
    'Integrative counselling in St Albans, Hertfordshire, in person and online. Counsellor in training working with anxiety, depression, addiction, bereavement, low self-esteem and life transitions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'St Albans',
    addressRegion: 'Hertfordshire',
    addressCountry: 'GB',
  },
  areaServed: ['St Albans', 'Hertfordshire', 'United Kingdom'],
  founder: {
    '@type': 'Person',
    name: 'Stuart Ogier',
    jobTitle: 'Integrative Counsellor in Training',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#content" className="skip-link">Skip to main content</a>
        <main id="content">{children}</main>
      </body>
    </html>
  );
}