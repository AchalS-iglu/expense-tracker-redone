import Image from "next/image";
import { Inter } from "@next/font/google";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <div className="flex">
      <SideBar />
    </div>
  );
}
