import img from "@/assets/img.jpg";

export const responsiveCorusel = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1,
  },
};

export const responsiveCoruselPosts = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const videoUrls = [
  {
    url: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    profilePic: img,
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
    profilePic: img,
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    profilePic: img,
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
    profilePic: img,
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    profilePic: img,
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
    profilePic: img,
    username: "dailydotdev",
    description:
      "Every developer brain @francesco.ciulla #developerjokes #programming #programminghumor #programmingmemes",
    song: "tarawarolin wants you to know this isnt my sound - Chaplain J Rob",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    profilePic: img,
    username: "wojciechtrefon",
    description:
      "#programming #softwareengineer #vscode #programmerhumor #programmingmemes",
    song: "help so many people are using my sound - Ezra",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
    profilePic: img,
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
];

export const config = {
  api: {
    baseURL: "https://0001.uz",
    sessionKEY: "tokens",
  },
};
