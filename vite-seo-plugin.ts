import { Plugin } from 'vite';
import { JSDOM } from 'jsdom';
import { getPageMetaData } from './src/components/SEO/pageMetaData';

interface RouteMap {
  [key: string]: string;
}

const ROUTES_MAP: RouteMap = {
  'index.html': '',
  'kontakt.html': 'kontakt',
  'selection.html': 'selection',
  'questions.html': 'questions',
  'review.html': 'review'
};

function getMetaTagsForRoute(route: string): string {
  const pageMetaData = getPageMetaData(route);
  const metaTags: string[] = [];

  // Add title
  metaTags.push(`<title>${pageMetaData.title}</title>`);

  // Add meta description
  metaTags.push(`<meta name="description" content="${pageMetaData.description}">`);

  // Add robots
  metaTags.push(`<meta name="robots" content="index, follow">`);

  // Add OpenGraph tags
  metaTags.push(`<meta property="og:title" content="${pageMetaData.title}">`);
  metaTags.push(`<meta property="og:description" content="${pageMetaData.description}">`);
  metaTags.push(`<meta property="og:type" content="${pageMetaData.ogType || 'website'}">`);
  metaTags.push(`<meta property="og:url" content="https://dynamics365.com.pl/${route ? route : ''}">`);
  metaTags.push(`<meta property="og:site_name" content="Kalkulator licencji Microsoft Dynamics 365 by ANEGIS">`);

  // Add canonical URL
  metaTags.push(`<link rel="canonical" href="https://dynamics365.com.pl${route ? '/' + route : ''}">`);

  // Add schema
  if (pageMetaData.schema) {
    metaTags.push(`<script type="application/ld+json">${JSON.stringify(pageMetaData.schema)}</script>`);
  }

  return metaTags.join('\n');
}

// Helper function to extract meta tags from SEO HTML
function extractMetaTags(html: string): string[] {
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const container = doc.createElement('div');
  container.innerHTML = html;

  const elements = container.children;
  const tags: string[] = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.tagName) {
      tags.push(element.outerHTML);
    }
  }

  return tags;
}

// Helper function to inject meta tags into HTML
function injectMetaTags(html: string, metaTags: string[]): string {
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const head = doc.head;

  // Create a temporary container for the meta tags
  const container = doc.createElement('div');
  container.innerHTML = metaTags.join('\n');

  // Remove existing meta tags
  const existingMetaTags = head.querySelectorAll('meta, title, link[rel="canonical"], script[type="application/ld+json"]');
  existingMetaTags.forEach(tag => tag.remove());

  // Add new meta tags
  while (container.firstChild) {
    const child = container.firstChild;
    if (child) {
      head.appendChild(child);
    }
  }

  return dom.serialize();
}

// Main SEO plugin
export default function seoPlugin(): Plugin {
  return {
    name: 'vite-plugin-seo',
    transformIndexHtml: {
      enforce: 'post',
      transform(html: string, { filename }) {
        // Get the route from the filename
        const route = ROUTES_MAP[filename] || '';

        // Get meta tags for the route
        const seoContent = getMetaTagsForRoute(route);

        // Extract and inject meta tags
        const metaTags = extractMetaTags(seoContent);
        return injectMetaTags(html, metaTags);
      },
    },
  };
}
