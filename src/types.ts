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
  geminiUrl?: string; // Optional Gemini chat URL shown as a left-side button on leaf nodes
  children?: FaqItem[]; // Nested items for expandable categories
  details?: FaqItemDetails; // Optional details for leaf nodes
}
