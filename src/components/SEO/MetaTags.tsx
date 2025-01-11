import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getPageMetaData } from './pageMetaData';
import { SeoProps } from './types';

export const MetaTags: React.FC<SeoProps> = ({ pageData, customSchema }) => {
  const location = useLocation();
  const path = location.pathname;
  
  const pageMetaData = getPageMetaData(path, pageData);
  
  return (
    <Helmet>
      {/* Structured Data only */}
      <script type="application/ld+json">
        {JSON.stringify(pageMetaData.schema || customSchema || {})}
      </script>
    </Helmet>
  );
};
