export type CardDetails = {
  name: string,
  link: string,
  tag: string,
  description: string,
  createdAt?: string,
  updatedAt?: string,
}

export interface ItemProps {
  item: CardDetails
}
