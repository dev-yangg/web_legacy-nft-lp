interface Metric {
  label: string;
  value: string;
}

interface CreatorsCard {
  image: ImageMetadata;
  alt: string;
  name: string;
  xHandle: string;
  role: string;
  bio: string;
  collectionCount: number;
  floorPrice: number;
  currency: string;
  isVerified?: boolean;
}

export type { Metric, CreatorsCard };
