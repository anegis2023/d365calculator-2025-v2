# SEO Implementation Guide

## Overview
This guide outlines key considerations and troubleshooting steps for implementing SEO metadata in our React application deployed on Netlify.

## Implementation Components

### 1. Metadata Structure
- All SEO metadata is centralized in `src/components/SEO/pageMetaData.ts`
- Each route has its own metadata configuration including:
  - Basic meta tags (title, description, keywords)
  - Open Graph tags
  - Twitter Card tags
  - Schema.org structured data

### 2. MetaTags Component
- Located in `src/components/SEO/MetaTags.tsx`
- Uses `react-helmet-async` for managing document head
- Automatically fetches metadata based on current route
- Can accept custom metadata through props if needed

## Common Issues and Solutions

### 1. Netlify Deployment Metadata Issues
**Problem**: Metadata not appearing in production despite working in preview/development.

**Common Cause**: Missing redirect rules in `netlify.toml`

**Solution**:
1. Check if the page has a specific redirect rule in `netlify.toml`
2. Add a redirect rule for the affected route:
```toml
[[redirects]]
  from = "/your-route"
  to = "/your-route.html"
  status = 200
```
3. Place specific redirects before the catch-all redirect:
```toml
# Specific redirects first
[[redirects]]
  from = "/specific-route"
  to = "/specific-route.html"
  status = 200

# Catch-all redirect last
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = true
```

**Why This Happens**: 
- Without a specific redirect rule, Netlify falls back to the catch-all redirect
- This serves `index.html` instead of the page-specific HTML file
- As a result, the page-specific metadata is not properly injected

### 2. Verification Steps
After implementing SEO changes:
1. Test locally using `npm run preview`
2. Check the page source to verify metadata
3. Deploy to Netlify
4. Verify metadata in production page source
5. Test with:
   - Google's Rich Results Test
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - Schema.org Validator

## Best Practices

1. **Metadata Organization**
   - Keep all metadata centralized in `pageMetaData.ts`
   - Use TypeScript interfaces for type safety
   - Include all required SEO elements for each page

2. **Testing**
   - Always test metadata in both development and production
   - Use SEO testing tools to validate structured data
   - Check mobile and desktop renderings

3. **Deployment**
   - Always verify netlify.toml configuration
   - Add specific redirect rules for new pages
   - Monitor Netlify deploy logs for any issues

4. **Maintenance**
   - Regularly update metadata for content changes
   - Keep schema.org structured data current
   - Monitor Google Search Console for any SEO issues
