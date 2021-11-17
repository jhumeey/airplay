export type CardDetails = {
  name: string,
  link: string,
  tag: string,
  imageUrl: string,
  description: string,
  createdAt: string,
  updatedAt: string,
}


export interface ItemProps {
  item: CardDetails
}