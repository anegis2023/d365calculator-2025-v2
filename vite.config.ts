import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getPageMetaData } from './src/components/SEO/pageMetaData';

function generateMetaTags(route: string) {
  const metadata = getPageMetaData(route);
  const baseUrl = 'https://d365calculator.netlify.app';
  const fullUrl = route ? `${baseUrl}/${route}` : baseUrl;

  return `
    <title>${metadata.title}</title>
    <meta name="title" content="${metadata.title}" />
    <meta name="description" content="${metadata.description}" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Polish" />
    <meta name="author" content="ANEGIS" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${metadata.ogType || 'website'}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:site_name" content="Kalkulator licencji Microsoft Dynamics 365 by ANEGIS" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${fullUrl}" />
    <meta property="twitter:title" content="${metadata.title}" />
    <meta property="twitter:description" content="${metadata.description}" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}" />
    
    <!-- Schema.org -->
    <script type="application/ld+json">
      ${JSON.stringify(metadata.schema, null, 2)}
    </script>`;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html, ctx) {
        // Get the route based on the file being processed
        let route = '';
        if (ctx.filename.includes('index.html')) {
          route = '';
        } else if (ctx.filename.includes('kontakt.html')) {
          route = 'kontakt';
        } else if (ctx.filename.includes('dynamics-365-sales.html')) {
          route = 'dynamics-365-sales';
        } else if (ctx.filename.includes('dynamics-365-finance.html')) {
          route = 'dynamics-365-finance';
        } else if (ctx.filename.includes('dynamics-365-supply-chain.html')) {
          route = 'dynamics-365-supply-chain';
        } else if (ctx.filename.includes('dynamics-365-field-service.html')) {
          route = 'dynamics-365-field-service';
        } else if (ctx.filename.includes('dynamics-365-project-operations.html')) {
          route = 'dynamics-365-project-operations';
        } else if (ctx.filename.includes('dynamics-365-customer-service.html')) {
          route = 'dynamics-365-customer-service';
        } else if (ctx.filename.includes('dynamics-365-customer-insights.html')) {
          route = 'dynamics-365-customer-insights';
        } else if (ctx.filename.includes('dynamics-365-commerce.html')) {
          route = 'dynamics-365-commerce';
        } else if (ctx.filename.includes('dynamics-365-human-resources.html')) {
          route = 'dynamics-365-human-resources';
        } else if (ctx.filename.includes('selection.html')) {
          route = 'selection';
        } else if (ctx.filename.includes('questions.html')) {
          route = 'questions';
        } else if (ctx.filename.includes('review.html')) {
          route = 'review';
        }

        // Find the head tag and insert meta tags after it
        const metaTags = generateMetaTags(route);
        return html.replace(
          /<head>/, 
          `<head>\n    ${metaTags}`
        );
      },
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        kontakt: './kontakt.html',
        'dynamics-365-sales': './dynamics-365-sales.html',
        'dynamics-365-finance': './dynamics-365-finance.html',
        'dynamics-365-supply-chain': './dynamics-365-supply-chain.html',
        'dynamics-365-field-service': './dynamics-365-field-service.html',
        'dynamics-365-project-operations': './dynamics-365-project-operations.html',
        'dynamics-365-customer-service': './dynamics-365-customer-service.html',
        'dynamics-365-customer-insights': './dynamics-365-customer-insights.html',
        'dynamics-365-commerce': './dynamics-365-commerce.html',
        'dynamics-365-human-resources': './dynamics-365-human-resources.html',
        selection: './selection.html',
        questions: './questions.html',
        review: './review.html'
      }
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
