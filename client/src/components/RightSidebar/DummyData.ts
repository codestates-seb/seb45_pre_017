import firstSectionImg from "../../asset/RightSidebarFirstSectionImg.png";

export const firstSectionDummy: FirstDummy = {
  firstDummy: {
    title: "The Overflow Blog",
    content: [
      {
        img: firstSectionImg,
        text: "Speeding up the I/O-heavy app: Q&A with Malte Ubl of Vercel",
      },
      { img: firstSectionImg, text: "Understanding SRE (Ep. 597)" },
    ],
  },
  secondDummy: {
    title: "Featured on Meta",
    content: [
      {
        img: firstSectionImg,
        text: "Moderation strike: Results of negotiations",
      },
      {
        img: firstSectionImg,
        text: "Our Design Vision for Stack Overflow and the Stack Exchange network",
      },
      {
        img: firstSectionImg,
        text: "Temporary policy: Generative AI (e.g., ChatGPT) is banned",
      },
      {
        img: firstSectionImg,
        text: "Preview of Search and Question-Asking Powered by GenAI",
      },
      {
        img: firstSectionImg,
        text: "Collections: A New Feature for Collectives on Stack Overflow",
      },
    ],
  },
};

export const secondSectionDummy: SecondSectionProps[] = [
  {
    img: firstSectionImg,
    brandName: "AWS",
    followers: "16k Members",
    description:
      "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted...",
  },
  {
    img: firstSectionImg,
    brandName: "Microsoft Azure",
    followers: "11k Members",
    description:
      "On-premises, hybrid, multicloud, or at the edge—build on your terms with best-in-...",
  },
  {
    img: firstSectionImg,
    brandName: "Twilio",
    followers: "9k Members",
    description:
      "Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the world’s communications infrastructure...",
  },
];

interface FirstSectionProps {
  title: string;
  content: { img: string; text: string }[];
}

interface FirstDummy {
  firstDummy: FirstSectionProps;
  secondDummy: FirstSectionProps;
}

interface SecondSectionProps {
  img: string;
  brandName: string;
  followers: string;
  description: string;
}
