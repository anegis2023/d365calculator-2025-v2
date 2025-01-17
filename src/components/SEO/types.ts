export interface MetaTagsData {
  title: string;
  description: string;
  keywords: string;
  ogType?: string;
  image?: string;
  canonical?: string;
  schema?: object;
}

export interface MetaTagsProps {
  pageData?: Record<string, any>;
}
