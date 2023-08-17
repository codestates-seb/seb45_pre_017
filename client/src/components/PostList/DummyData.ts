export const mainData: DummyData[] = [
  {
    id: 1,
    nickname: "Spix737",
    userImage: "https://cdn2.thecatapi.com/images/1gh.jpg",
    title: "Authorizing USB debugging on a dead touchscreen",
    votes: 3,
    answers: 3,
    tag: ["android", "adb", "usb-otg", "google-pixel"],
    createdAd: "2023-06-28 17:00:00",
  },
  {
    id: 2,
    nickname: "Spix737",
    userImage: "https://cdn2.thecatapi.com/images/1gh.jpg",
    title: "Authorizing USB debugging on a dead touchscreen",
    votes: 3,
    answers: 0,
    tag: ["android", "adb", "usb-otg", "google-pixel"],
    createdAd: "2023-06-28 17:00:00",
  },
  {
    id: 3,
    nickname: "Spix737",
    userImage: "https://cdn2.thecatapi.com/images/1gh.jpg",
    title: "Authorizing USB debugging on a dead touchscreen",
    votes: 0,
    answers: 0,
    tag: ["android", "adb", "usb-otg", "google-pixel"],
    createdAd: "2023-06-28 17:00:00",
  },
];

interface DummyData {
  id: number;
  nickname: string;
  userImage: string;
  title: string;
  votes: number;
  answers: number;
  tag: any[];
  createdAd: string;
}
