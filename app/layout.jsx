import './global.css';
import './style.css';

export const metadata = {
  title: 'Stuart Ogier — Trainee Integrative Counsellor',
  description: 'Stuart Ogier is a trainee integrative counsellor on placement at The Living Room in St Albans, supporting people in and around addiction recovery.',
  authors: [{ name: 'Stuart Ogier' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Stuart Ogier — Trainee Integrative Counsellor',
    description: 'A space to be heard, understood and met with honesty.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2a1f2e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#content" className="skip-link">Skip to main content</a>
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
