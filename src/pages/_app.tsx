import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="fixed top-0 left-0 flex w-full h-full text-slate-700 dark:bg-slate-700 dark:text-slate-300">
      <TopBar />
      <SideBar />
      <div className="fixed top-8 left-16 flex w-[calc(100%-64px)] h-[calc(100%-64px)]">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
