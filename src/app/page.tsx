"use client"
import AboutMe from "./components/AboutMe";
import Apresentation from "./components/Apresentation";
import Header from "./components/Header";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import RollTopPage from "../components/RollTopPage";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Header />
      <div className="flex flex-col items-center gap-5 max-w-[86rem] w-screen z-10 px-8 sm:px-24">
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
