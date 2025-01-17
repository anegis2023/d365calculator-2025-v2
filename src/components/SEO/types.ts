export interface MetaTagsData {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
  image?: string;
  canonical?: string;
  schema?: object;
  siteName?: string;
}

export interface MetaTagsProps {
  pageData?: Record<string, any>;
}
