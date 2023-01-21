import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    <div className="fixed top-0 left-0 flex w-full h-full text-slate-700 dark:bg-slate-700 dark:text-violet-200">
      <TopBar />
      <SideBar />
    </div>
  );
}