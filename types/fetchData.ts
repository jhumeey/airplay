
export type Resource = {
  // id: number;
  // createdAt?: string;
  // updatedAt?: string;
  // name: string;
  // link: string;
  // tag: string;
  // description: string
  json: {
    id: string,
    fields: Res[]
  }
}

export interface ResourcesProps {
  resources: Res[]
}

type Res = {
  id: string;
  fields: {
    id: number,
    link: string,
    description: string,
    tag: string,
    name: string,
    createdAt: string
  }
}