
export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface Highlight {
  id: string;
  imageUrl: string;
  title: string;
  postUrl: string;
}

export interface Consultation {
  id: string;
  text: string;
  timestamp: number;
  showOnMain: boolean;
}
