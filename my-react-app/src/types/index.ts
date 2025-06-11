export interface Review {
  id: number;
  text: string;
  img: string;
  author: string;
  artist: string;
}

export enum ApiStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

export interface ApiResponse<T> {
  data: T | null;
  status: ApiStatus;
  error: string | null;
}