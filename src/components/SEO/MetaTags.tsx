import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageMetaData } from './pageMetaData';
import { MetaTagsProps } from './types';

export const MetaTags: React.FC<MetaTagsProps> = ({ pageData }) => {
  const location = useLocation();
  const path = location.pathname.replace(/^\//, '');
  const currentUrl = `https://dynamics365.com.pl${location.pathname}`;
  
  const pageMetaData = getPageMetaData(path, pageData);
  
  return (
    <Helmet>
      <title>{pageMetaData.title}</title>
      <meta name="description" content={pageMetaData.description} />
      <meta name="keywords" content={pageMetaData.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageMetaData.ogType || 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageMetaData.title} />
      <meta property="og:description" content={pageMetaData.description} />
      
      {/* Twitter */}
      <meta property="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={pageMetaData.title} />
      <meta name="twitter:description" content={pageMetaData.description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};
