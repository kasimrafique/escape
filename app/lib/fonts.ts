import localFont from "next/font/local";
import { Inter as Inter_Font, Open_Sans } from "next/font/google";

export const JejuHallasan = localFont({
  src: "./JejuHallasan-Regular.ttf",
});
export const OpenSans = Open_Sans({ subsets: ["latin"] });
export const Inter = Inter_Font({ subsets: ["latin"] });
