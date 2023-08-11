import firstSectionImg from "../../asset/RightSidebarFirstSectionImg.png";

export const firstSectionDummy: firstDummy = {
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

interface firstSectionProps {
  title: string;
  content: { img: string; text: string }[];
}

interface firstDummy {
  firstDummy: firstSectionProps;
  secondDummy: firstSectionProps;
}
