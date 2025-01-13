import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getPageMetaData } from './src/components/SEO/pageMetaData';

function generateMetaTags(route: string, mode: string) {
  const metadata = getPageMetaData(route);
  const baseUrl = 'https://dynamics365.com.pl';
  const fullUrl = route ? `${baseUrl}/${route}` : baseUrl;

  // 1. Required meta tags (charset and viewport)
  const requiredTags = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />`;

  // 2. Icon
  const iconTag = `
    <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.prod.website-files.com/5c8f846a0fcf5a79e8c7dd24/67851581b0aead5e01fdca3d_favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.prod.website-files.com/5c8f846a0fcf5a79e8c7dd24/67851581c14e0e15b22ff799_favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.prod.website-files.com/5c8f846a0fcf5a79e8c7dd24/67851581105df1f5c364dbcf_apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="https://cdn.prod.website-files.com/5c8f846a0fcf5a79e8c7dd24/678515814b0a3bb9bec17281_android-chrome-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="https://cdn.prod.website-files.com/5c8f846a0fcf5a79e8c7dd24/6785158139494742637d746f_android-chrome-512x512.png" />`;

  // 3. Title and basic meta tags
  const basicTags = `
    <title>${metadata.title}</title>
    <meta name="title" content="${metadata.title}" />
    <meta name="description" content="${metadata.description}" />
    <meta name="keywords" content="${metadata.keywords}" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Polish" />
    <meta name="author" content="ANEGIS" />
    <!-- Leadinfo tracking code -->
    <script>
    (function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
    l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
    l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
    }(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','LI-6784FFF469D66'));
    </script>`;

  // 4. Open Graph / Facebook
  const openGraphTags = `
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${metadata.ogType || 'website'}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:site_name" content="Kalkulator licencji Microsoft Dynamics 365 by ANEGIS" />`;

  // 5. Twitter
  const twitterTags = `
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${fullUrl}" />
    <meta property="twitter:title" content="${metadata.title}" />
    <meta property="twitter:description" content="${metadata.description}" />`;

  // 6. Canonical URL
  const canonicalTag = `
    <!-- Canonical URL -->
    <link rel="canonical" href="${fullUrl}" />`;

  // 7. Schema.org JSON-LD
  const schemaTag = `
    <!-- Schema.org -->
    <script type="application/ld+json">
      ${JSON.stringify(metadata.schema || {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": metadata.title,
        "description": metadata.description,
        "url": fullUrl,
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": baseUrl
        }
      }, null, 2)}
    </script>`;

  // Development-specific scripts
  const devScripts = mode === 'development' ? `
    <!-- Development Mode Scripts -->
    <script type="module">
      import RefreshRuntime from "/@react-refresh"
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="/@vite/client"></script>` : '';

  // Combine all tags in the correct order
  return `${requiredTags}${iconTag}${basicTags}${openGraphTags}${twitterTags}${canonicalTag}${schemaTag}${mode === 'development' ? devScripts : ''}`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html, ctx) {
        let route = '';
        if (ctx.filename) {
          route = ctx.filename
            .replace(/^.*[\/\\]/, '') // Remove path
            .replace(/\.html$/, ''); // Remove .html extension

          // Handle index.html specially
          if (route === 'index') {
            route = '';
          }
        }

        // In production, remove any existing development scripts
        if (mode === 'production') {
          html = html.replace(/<script type="module">[\s\S]*?<\/script>/g, '');
          html = html.replace(/<script type="module" src="\/@vite\/client"><\/script>/g, '');
        }

        return html.replace(
          /<\/head>/,
          `${generateMetaTags(route, mode)}\n  </head>`
        );
      }
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
    copyPublicDir: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
