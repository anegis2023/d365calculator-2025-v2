import { Plugin } from 'vite';
import { JSDOM } from 'jsdom';
import { getPageMetaData } from './src/components/SEO/pageMetaData';

interface RouteConfig {
  path: string;
  outputFile: string;
}

const routes: RouteConfig[] = [
  { path: '', outputFile: 'index.html' },
  { path: 'kontakt', outputFile: 'kontakt.html' },
  { path: 'selection', outputFile: 'selection.html' },
  { path: 'questions', outputFile: 'questions.html' },
  { path: 'review', outputFile: 'review.html' }
];

function generateMetaTags(route: string) {
  const metadata = getPageMetaData(route);
  const baseUrl = 'https://dynamics365.com.pl';
  const fullUrl = route ? `${baseUrl}/${route}` : baseUrl;

  return `
    <!-- Primary Meta Tags -->
    <title>${metadata.title}</title>
    <meta name="title" content="${metadata.title}">
    <meta name="description" content="${metadata.description}">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Polish">
    <meta name="author" content="ANEGIS">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${metadata.ogType || 'website'}">
    <meta property="og:url" content="${fullUrl}">
    <meta property="og:title" content="${metadata.title}">
    <meta property="og:description" content="${metadata.description}">
    <meta property="og:site_name" content="Kalkulator licencji Microsoft Dynamics 365 by ANEGIS">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${fullUrl}">
    <meta property="twitter:title" content="${metadata.title}">
    <meta property="twitter:description" content="${metadata.description}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}">
    
    <!-- Schema.org -->
    <script type="application/ld+json">
      ${JSON.stringify(metadata.schema, null, 2)}
    </script>
  `;
}

export default function prerenderPlugin(): Plugin {
  return {
    name: 'vite-plugin-prerender',
    transformIndexHtml(html, ctx) {
      // Get the route from the filename
      const route = routes.find(r => ctx.filename.endsWith(r.outputFile))?.path || '';
      
      // Create a new JSDOM instance
      const dom = new JSDOM(html);
      const { document } = dom.window;
      
      // Get the head element
      const head = document.head;
      
      // Remove existing meta tags but keep charset
      const elements = head.children;
      for (let i = elements.length - 1; i >= 0; i--) {
        const element = elements[i];
        if (element.tagName !== 'META' || element.getAttribute('charset') !== 'UTF-8') {
          element.remove();
        }
      }
      
      // Add new meta tags
      const metaTags = generateMetaTags(route);
      head.insertAdjacentHTML('beforeend', metaTags);
      
      // Return the modified HTML
      return dom.serialize();
    }
  };
}
