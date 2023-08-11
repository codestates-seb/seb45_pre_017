import firstSectionImg from "../../asset/RightSidebar-firstSection.png";
import firstSectionImg02 from "../../asset/RightSidebar-firstSection02.jpeg";
import firstSectionImg03 from "../../asset/RightSidebar-firstSection03.png";
import secondSectionImg from "../../asset/RightSidebar-secondSection.png";
import secondSectionImg02 from "../../asset/RightSidebar-secondSection02.png";
import secondSectionImg03 from "../../asset/RightSidebar-secondSection03.png";

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
        img: firstSectionImg02,
        text: "Moderation strike: Results of negotiations",
      },
      {
        img: firstSectionImg02,
        text: "Our Design Vision for Stack Overflow and the Stack Exchange network",
      },
      {
        img: firstSectionImg03,
        text: "Temporary policy: Generative AI (e.g., ChatGPT) is banned",
      },
      {
        img: firstSectionImg03,
        text: "Preview of Search and Question-Asking Powered by GenAI",
      },
      {
        img: firstSectionImg03,
        text: "Collections: A New Feature for Collectives on Stack Overflow",
      },
    ],
  },
};

export const secondSectionDummy: SecondDunmmy[] = [
  {
    img: secondSectionImg,
    brandName: "AWS",
    followers: "16k Members",
    description:
      "Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted...",
  },
  {
    img: secondSectionImg02,
    brandName: "Microsoft Azure",
    followers: "11k Members",
    description:
      "On-premises, hybrid, multicloud, or at the edge—build on your terms with best-in-...",
  },
  {
    img: secondSectionImg03,
    brandName: "Twilio",
    followers: "9k Members",
    description:
      "Twilio has democratized channels like voice, text, chat, video, and email by virtualizing...",
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

interface SecondDunmmy {
  img: string;
  brandName: string;
  followers: string;
  description: string;
}
