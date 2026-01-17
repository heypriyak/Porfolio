import { Helmet } from 'react-helmet-async';

export function SEO() {
  return (
    <Helmet>
      <title>Priya Kumari - AI/ML Engineer & Full-Stack Developer | Hiring Now</title>
      <meta
        name="description"
        content="Priya Kumari - AI/ML engineer & full-stack developer. Built 5+ production apps, 97% ML accuracy, 25% API optimization. Skilled in React, Node.js, Python, Java. Open to exciting opportunities."
      />
      <meta name="keywords" content="Priya Kumari, AI engineer, ML developer, Full-Stack, React, Java, Python, Portfolio, IIIT Manipur, Software Engineer" />
      <meta name="author" content="Priya Kumari" />
      
      <meta property="og:title" content="Priya Kumari - AI/ML Engineer & Full-Stack Developer" />
      <meta
        property="og:description"
        content="Built 5+ production-grade applications with proven track record of 25% performance optimization and 97% ML accuracy. Let's build something amazing together."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://priyakumari.dev/og-image.jpg" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Priya Kumari - AI/ML Engineer & Full-Stack Developer" />
      <meta
        name="twitter:description"
        content="AI/ML Engineer | Full-Stack Developer | 5+ Projects | 97% ML Accuracy | Open to Opportunities"
      />
      <meta name="twitter:image" content="https://priyakumari.dev/og-image.jpg" />
      
      <link rel="canonical" href="https://priyakumari.dev" />
      <meta name="theme-color" content="#9333ea" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}