import { Header } from "../../components/Header/";
import Image from "../../assets/images/background.png";

export function Home() {
  return (
    <div
      className="flex flex-col w-full h-screen py-6 px-4 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <Header />
    </div>
  );
}