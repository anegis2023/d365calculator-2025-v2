import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageMetaData } from './pageMetaData';
import { MetaTagsProps } from './types';

export const MetaTags: React.FC<MetaTagsProps> = ({ pageData }) => {
  const location = useLocation();
  const path = location.pathname;
  
  const pageMetaData = getPageMetaData(path, pageData);
  
  return (
    <Helmet>
      <title>{pageMetaData.title}</title>
      <meta name="description" content={pageMetaData.description} />
      <meta name="keywords" content={pageMetaData.keywords} />
      {pageMetaData.siteName && (
        <meta name="google-site-name" content={pageMetaData.siteName} />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageMetaData.ogType || 'website'} />
      <meta property="og:title" content={pageMetaData.title} />
      <meta property="og:description" content={pageMetaData.description} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={pageMetaData.title} />
      <meta name="twitter:description" content={pageMetaData.description} />
      
      {pageMetaData.schema && (
        <script type="application/ld+json">
          {JSON.stringify(pageMetaData.schema)}
        </script>
      )}
    </Helmet>
  );
};
