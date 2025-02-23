import type { Route } from "./+types/home";
import HeroSlider from "../components/HeroSlider"
import VisionMission from "../components/VisionMission"
import WelcomeText from "~/components/Welcometext";
import Subjects from "~/components/Subjects";
import Achievements from "~/components/Achievements";
import Levels from "~/components/Level";
import Teachers from "~/components/Teachers";
import Facilities from "~/components/Facilities";
import Galleries from "~/components/Galleries";
import Contacts from "~/components/Contacts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <HeroSlider />
    <VisionMission />
    <WelcomeText />
    <VisionMission />
    <Subjects />
    <Achievements />
    <Levels />
    <Teachers />
    <Facilities />
    <Galleries />
    <Contacts />
  </>;
}
