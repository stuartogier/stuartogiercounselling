import './global.css';
import './style.css';

export const metadata = {
  title: 'Stuart Ogier | Integrative Counsellor',
  description:
    'Stuart Ogier is a counsellor in training offering a confidential, non-judgemental space for people facing anxiety, depression, addiction, bereavement, and life transitions. Based in Hertfordshire.',
  authors: [{ name: 'Stuart Ogier' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Stuart Ogier | Integrative Counsellor',
    description:
      'A confidential space where you can be truly heard. Working with anxiety, depression, addiction, bereavement and life transitions.',
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
          href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Inter:wght@300;400;500&display=swap"
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
