import { Header } from "../../components/Header/";
import Image from "../../assets/images/background.png";
import { Hero } from "../../components/Hero";
import { About } from "../../components/About";

const sectionStyle = {
  backgroundImage: `url(${Image})`,
};

export function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div
        className="w-full bg-cover bg-center"
        style={sectionStyle}
      >
        <Hero />
      </div>
      <About />
    </div>
  );
}
