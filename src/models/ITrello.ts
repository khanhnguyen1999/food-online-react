export type ITrelloState = {
  lists: any,
  cards: any,
  columns: any
}

export type ICard = {
  id: string;
  list: string;
  title: string;
}