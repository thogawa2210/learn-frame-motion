import Header from "./components/Header";
import MainSwiper from "./components/MainSwiper";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />

      <MainSwiper />

      <OurServices />
    </div>
  );
}
