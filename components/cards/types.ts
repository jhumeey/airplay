export type CardDetails = {
  name: string,
  link: string,
  tag: string,
  imageUrl: string,
  description: string,
  created_at: string,
  updated_at: string,
}


export interface ItemProps {
  item: CardDetails
}