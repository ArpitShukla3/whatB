import { Divider } from "@mui/material";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/SideBar";
import Hero1 from "./_components/Hero1";
import Hero2 from "./_components/Hero2";
import Graph from "./_components/Graph";
import Hero3 from "./_components/Hero3";
import Hero4 from "./_components/Hero4";

export default function Home() {
  return (
    <>
      <Navbar />
      <Divider orientation="horizontal" />
      <div className="flex flex-col md:flex-col lg:flex-row gap-2">
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <Divider orientation="vertical" className="hidden lg:block" />
        </div>
        <div className="text-[#2596be] p-6 lg:w-1/2 w-full">
          <h1 className="py-4">Skill Set</h1>
          <Hero1 />
          <Hero2 />
          <Graph />
        </div>
        <div className="lg:w-1/3 w-full flex flex-col">
          <Hero3 />
          <Hero4 />
        </div>
      </div>
    </>
  );
}
