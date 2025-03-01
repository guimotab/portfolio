"use client"
import RollTopPage from "../../components/RollTopPage";
import { useEffect, useState } from "react";
import Theme from "@/classes/Theme";
import AboutMe from "./components/AboutMe";
import Apresentation from "./components/Apresentation";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  const [canRender, setCanRender] = useState(false)
  useEffect(() => {
    Theme.preferenceTheme()
    setCanRender(true) 
  }, []);
  return canRender && (

    <main className="flex min-h-screen flex-col items-center ">
      <Header />
      <div className="flex flex-col items-center gap-5 max-w-[86rem] z-10 px-4 sm:px-10">
        <RollTopPage />
        <Apresentation />
        <AboutMe />
        <Certificates />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
