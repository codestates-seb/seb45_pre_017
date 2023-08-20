import dummyImg from "../../asset/stack-overflow.png";

export const dummyDamain: dummyProps[] = [
  { logo: dummyImg, domain: "askubuntu.com" },
  { logo: dummyImg, domain: "mathoverflow.net" },
  { logo: dummyImg, domain: "serverfault.com" },
  { logo: dummyImg, domain: "stackapps.com" },
  { logo: dummyImg, domain: "stackexchange.com" },
  { logo: dummyImg, domain: "stackoverflow.com" },
  { logo: dummyImg, domain: "superuser.com" },
];

interface dummyProps {
  logo: string;
  domain: string;
}
