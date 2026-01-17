import { Helmet } from 'react-helmet-async';

export function SEO() {
  return (
    <Helmet>
      <title>Priya Kumari - Software Developer Engineer | Immediate Joiner</title>
      <meta
        name="description"
        content="Priya Kumari - Software Developer Engineer. Built 5+ production apps, 25% API optimization. Skilled in React, Node.js, Python, Java. Immediate Joiner. Open to exciting opportunities."
      />
      <meta name="keywords" content="Priya Kumari, Software Developer, Engineer, Full-Stack, React, Java, Python, Portfolio, IIIT Manipur, Immediate Joiner" />
      <meta name="author" content="Priya Kumari" />
      
      <meta property="og:title" content="Priya Kumari - Full-Stack Developer" />
      <meta
        property="og:description"
        content="Built 5+ production-grade applications with proven track record of 25% performance optimization. Let's build something amazing together."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://priyakumari.dev/og-image.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Priya Kumari - Full-Stack Developer" />
      <meta
        name="twitter:description"
        content="Full-Stack Developer | 5+ Projects | Performance Optimization | Open to Opportunities"
      />
      <meta name="twitter:image" content="https://priyakumari.dev/og-image.jpg" />
      
      <link rel="canonical" href="https://priyakumari.dev" />
      <meta name="theme-color" content="#9333ea" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}