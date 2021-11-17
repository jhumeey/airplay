
export type Resource = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  link: string;
  tag: string;
  imageUrl: string;
  description: string
}

export interface IndexProps {
  resources: Resource[]
}