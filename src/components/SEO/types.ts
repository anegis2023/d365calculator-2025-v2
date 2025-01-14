export interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
  image?: string;
  canonical?: string;
  schema?: object;
}

export interface SeoProps {
  pageData?: any;
}
