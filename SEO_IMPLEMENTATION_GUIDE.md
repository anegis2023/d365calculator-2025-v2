# SEO Implementation Guide for New Pages

## Overview
This guide explains how to implement SEO functionality for new pages in our React application. Our SEO system ensures proper metadata generation for both client-side rendering and static HTML generation through Vite.

## Key Components

### 1. Meta Tag Generation (`vite.config.ts`)
- Handles static HTML generation during build
- Injects meta tags into HTML files
- Ensures proper SEO for direct page access and crawlers

### 2. Page Metadata (`src/components/SEO/pageMetaData.ts`)
- Defines metadata for each route
- Provides consistent metadata structure
- Supports schema.org markup

### 3. React Components (`src/components/SEO/MetaTags.tsx`)
- Handles client-side meta tag updates
- Uses react-helmet-async for dynamic updates
- Ensures proper SEO during client-side navigation

## Implementation Steps for New Pages

### 1. Create HTML File
Create a new HTML file in the root directory (e.g., `your-page.html`):
```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 2. Update Vite Configuration
Add your page to `vite.config.ts` in the `rollupOptions.input`:
```typescript
build: {
  rollupOptions: {
    input: {
      // Existing pages...
      'your-page': './your-page.html',
    }
  }
}
```

### 3. Add Page Metadata
In `src/components/SEO/pageMetaData.ts`, add metadata for your new page:
```typescript
export const getPageMetaData = (path: string): MetaTags => {
  const metaData: { [key: string]: MetaTags } = {
    // Existing pages...
    'your-page': {
      title: "Your Page Title | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS",
      description: "Your page description (150-160 characters recommended)",
      ogType: 'website',
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Your Page Title",
        "description": "Your page description",
        "url": "https://d365calculator.netlify.app/your-page",
        "publisher": {
          "@type": "Organization",
          "name": "ANEGIS",
          "url": "https://d365calculator.netlify.app"
        }
      }
    }
  };

  return metaData[path] || metaData[''];  // Fallback to home page metadata
};
```

### 4. Create React Component
Create a new component in `src/pages/YourPage.tsx`:
```typescript
import React from 'react';
import { MetaTags } from '../components/SEO/MetaTags';

const YourPage: React.FC = () => {
  return (
    <>
      <MetaTags />
      {/* Your page content */}
    </>
  );
};

export default YourPage;
```

### 5. Add Route
Update `src/App.tsx` with the new route:
```typescript
import YourPage from './pages/YourPage';

// In your router configuration:
<Route path="/your-page" element={<YourPage />} />
```

## SEO Best Practices

### Meta Tags Structure
1. **Title Tag**
   - Format: `Primary Keyword | Brand Name`
   - Length: 50-60 characters
   - Example: `Kontakt | Kalkulator Licencji Microsoft Dynamics 365 by ANEGIS`

2. **Meta Description**
   - Length: 150-160 characters
   - Include main keyword naturally
   - Add clear call-to-action
   - Example: `Skontaktuj się z nami w sprawie licencji Microsoft Dynamics 365. Nasi eksperci pomogą dobrać optymalne rozwiązanie dla Twojej firmy.`

3. **OpenGraph Tags**
   - og:title (same as meta title)
   - og:description (same as meta description)
   - og:type (usually 'website' or specific type)
   - og:url (full canonical URL)
   - og:site_name (consistent across all pages)

4. **Twitter Cards**
   - twitter:card (usually 'summary_large_image')
   - twitter:title (same as meta title)
   - twitter:description (same as meta description)

5. **Canonical URL**
   - Always include for each page
   - Use absolute URLs
   - Format: `https://d365calculator.netlify.app/your-page`

### Schema.org Implementation
1. **Basic Structure**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "WebPage",
     "name": "Page Title",
     "description": "Page Description",
     "url": "https://d365calculator.netlify.app/your-page",
     "publisher": {
       "@type": "Organization",
       "name": "ANEGIS"
     }
   }
   ```

2. **Special Page Types**
   - Contact Page: Use `@type: "ContactPage"`
   - Product Pages: Use `@type: "Product"`
   - Service Pages: Use `@type: "Service"`

## Verification Steps

After implementing a new page:

1. **Build Check**
   ```bash
   npm run build
   ```
   - Verify HTML file is generated in `dist/`
   - Check meta tags in generated HTML

2. **Meta Tags Verification**
   - View page source in browser
   - Verify all meta tags are present
   - Test with Facebook Debugger
   - Test with Twitter Card Validator
   - Validate Schema with Google's Rich Results Test

3. **SEO Tools Testing**
   - Test with Google Mobile-Friendly Test
   - Verify with Google Search Console
   - Check PageSpeed Insights

## Troubleshooting

### Common Issues

1. **Meta Tags Not Showing in View Source**
   - Check vite.config.ts HTML transform
   - Verify page is in rollupOptions.input
   - Ensure metadata is defined in pageMetaData.ts

2. **React-Helmet Not Updating**
   - Verify MetaTags component is used
   - Check if HelmetProvider is present in app root
   - Confirm route is correctly defined

3. **Schema.org Validation Errors**
   - Validate JSON-LD syntax
   - Check required fields for specific types
   - Use Google's Rich Results Test for validation
