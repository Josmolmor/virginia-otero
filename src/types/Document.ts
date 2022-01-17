export interface Dimensions {
  width: number;
  height: number;
}

export interface Image {
  dimensions: Dimensions;
  alt?: string | null;
  copyright?: string | null;
  url: string;
}
