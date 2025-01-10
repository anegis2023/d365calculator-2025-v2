export interface SeoProps {
  pageData?: any;
  customSchema?: object;
}

export interface MetaTags {
  title: string;
  description: string;
  ogType?: string;
  image?: string;
  canonical?: string;
  schema?: object;
}
