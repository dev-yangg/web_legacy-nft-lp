import type { ImageMetadata } from "astro";
import { getImage } from "../lib/utils";

export interface TeamMember {
  name: string;
  role: string;
  image: ImageMetadata;
  socials?: {
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

const baseTeamImagePath = "/src/assets/images/team";

export const team: TeamMember[] = [
  {
    name: "Alex Morgan",
    role: "Co-Founder & CEO",
    image: getImage(`${baseTeamImagePath}/alex-morgan.webp`),
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Maya Khan",
    role: "Co-Founder & CMO",
    image: getImage(`${baseTeamImagePath}/maya-khan.webp`),
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Julian Reyes",
    role: "CTO",
    image: getImage(`${baseTeamImagePath}/julian-reyes.webp`),
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Sofia Lenz",
    role: "Head of Community",
    image: getImage(`${baseTeamImagePath}/sofia-lenz.webp`),
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
];
