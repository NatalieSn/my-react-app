export interface CardData {
  id: number;
  text: string;
  name: string;
  profession: string;
  imgSrc: string | null;
}

export interface CardProps {
  text: string;
  name: string;
  profession: string;
  imgSrc: string | null;
}
