interface Metric {
  label: string;
  value: string;
}

interface CreatorsCard {
  image: ImageMetadata;
  alt: string;
  name: string;
  role: string;
  bio: string;
  collectionCount: number;
  floorPrice: number;
  currency: string;
}

export type { Metric, CreatorsCard };
