import { getImage } from "../lib/utils";
import type { CreatorsCard, Metric } from "../types";

const creatorsMetrics: Metric[] = [
  {
    label: "Verified Creators",
    value: "245+",
  },
  {
    label: "Works Created",
    value: "12.6K+",
  },
  {
    label: "Collections",
    value: "3.8K+",
  },
  {
    label: "Countries",
    value: "48",
  },
];
const baseCreatorImagePath = "/src/assets/images/creators";
const creators: CreatorsCard[] = [
  {
    image: getImage(`${baseCreatorImagePath}/marco-valeri.webp`),
    alt: "Portrait of Marco Valeri, a filmmaker",
    name: "Marco Valeri",
    role: "Filmmaker",
    bio: "Crafting visual stories that inspire and endure.",
    collectionCount: 12,
    floorPrice: 0.68,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/livia-chen.webp`),
    alt: "Portrait of Livia Chen, an illustrator",
    name: "Livia Chen",
    role: "Illustrator",
    bio: "Creating evocative illustrations that bridge history and imagination.",
    collectionCount: 9,
    floorPrice: 0.45,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/nox-dev.webp`),
    alt: "Portrait of Nox Dev, a digital architect",
    name: "Nox Dev",
    role: "Digital Architect",
    bio: "Building digital experiences that honor timeless values.",
    collectionCount: 6,
    floorPrice: 0.92,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/aurelius.webp`),
    alt: "Portrait of Aurelius, a digital artist",
    name: "Aurelius",
    role: "Digital Artist",
    bio: "Bringing timeless stories to life through modern digital art.",
    collectionCount: 15,
    floorPrice: 1.2,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/elara-moon.webp`),
    alt: "Portrait of Elara Moon, a 3D artist",
    name: "Elara Moon",
    role: "3D Artist",
    bio: "Crafting immersive worlds in stunning detail.",
    collectionCount: 7,
    floorPrice: 0.55,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/jules-verner.webp`),
    alt: "Portrait of Jules Verner, a concept artist",
    name: "Jules Verner",
    role: "Concept Artist",
    bio: "Designing visionary concepts that spark imagination.",
    collectionCount: 10,
    floorPrice: 0.78,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/maya-sinclair.webp`),
    alt: "Portrait of Maya Sinclair, a curator",
    name: "Maya Sinclair",
    role: "Curator",
    bio: "Connecting culture, stories, and communities.",
    collectionCount: 4,
    floorPrice: 0.33,
    currency: "ETH",
  },
  {
    image: getImage(`${baseCreatorImagePath}/kael-wong.webp`),
    alt: "Portrait of Kael Wong, a motion designer",
    name: "Kael Wong",
    role: "Motion Designer",
    bio: "Bringing ideas to life through motion and rhythm.",
    collectionCount: 11,
    floorPrice: 0.6,
    currency: "ETH",
  },
];

export { creatorsMetrics, creators };
