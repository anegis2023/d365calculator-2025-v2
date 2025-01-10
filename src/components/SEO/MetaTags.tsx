import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { BASE_META_TAGS } from './constants';
import { getPageMetaData } from './pageMetaData';
import { SeoProps } from './types';

export const MetaTags: React.FC<SeoProps> = ({ pageData, customSchema }) => {
  const location = useLocation();
  const path = location.pathname;
  
  const pageMetaData = getPageMetaData(path, pageData);
  
  return (
    <Helmet>
      <title>{pageMetaData.title}</title>
      <meta name="description" content={pageMetaData.description} />
      <meta name="robots" content="index, follow" />
      
      {/* OpenGraph Tags */}
      <meta property="og:title" content={pageMetaData.title} />
      <meta property="og:description" content={pageMetaData.description} />
      <meta property="og:type" content={pageMetaData.ogType || 'website'} />
      <meta property="og:image" content={pageMetaData.image || BASE_META_TAGS.image} />
      <meta property="og:site_name" content={BASE_META_TAGS.siteName} />
      <meta property="og:url" content={`${window.location.origin}${path}`} />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={BASE_META_TAGS.twitterSite} />
      <meta name="twitter:title" content={pageMetaData.title} />
      <meta name="twitter:description" content={pageMetaData.description} />
      <meta name="twitter:image" content={pageMetaData.image || BASE_META_TAGS.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${window.location.origin}${path}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(pageMetaData.schema || customSchema || {})}
      </script>
    </Helmet>
  );
};
