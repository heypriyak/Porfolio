import { Helmet } from 'react-helmet-async';

export function SEO() {
  return (
    <Helmet>
      <title>Priya Kumari - Python Developer | AI & ML Enthusiast</title>
      <meta name="description" content="Portfolio of Priya Kumari, a Python Developer and AI/ML enthusiast. View my projects, experience, and get in touch." />
      <meta name="keywords" content="Priya Kumari, Python Developer, AI, ML, Machine Learning, Portfolio, IIIT Manipur" />
      
      <meta property="og:title" content="Priya Kumari - Python Developer | AI & ML Enthusiast" />
      <meta property="og:description" content="Portfolio of Priya Kumari, a Python Developer and AI/ML enthusiast. View my projects, experience, and get in touch." />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Priya Kumari - Python Developer | AI & ML Enthusiast" />
      <meta name="twitter:description" content="Portfolio of Priya Kumari, a Python Developer and AI/ML enthusiast. View my projects, experience, and get in touch." />
      
      <link rel="canonical" href="https://priyakumari.dev" />
    </Helmet>
  );
}