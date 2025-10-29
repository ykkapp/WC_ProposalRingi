export interface FaqItemDetails {
  applicableProject?: string;
  subject?: string;
  attachments?: {
    name: string;
    required: boolean;
  }[];
  concurrentProposals?: {
    title: string;
    link: string;
  }[];
  applicationContent?: string;
}

export interface FaqItem {
  title: string;
  link?: string; // The final link destination for leaf nodes
  url?: string;
  children?: FaqItem[]; // Nested items for expandable categories
  details?: FaqItemDetails; // Optional details for leaf nodes
}
