
export interface ProjectChapter {
  title: string;
  subtitle?: string;
  perspective: string;
  deliverables: string[];
  outcome: string;
  images?: string[]; // Array of image URLs or base64 strings
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  role: string;
  chapters?: ProjectChapter[];
  perspective?: string;
  deliverables?: string[];
  outcome?: string;
  tags: string[];
  images?: string[]; // Array of image URLs or base64 strings
}
