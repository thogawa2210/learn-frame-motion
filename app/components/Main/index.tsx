import Contact from "../Contact";
import Header from "../Header";
import MainSwiper from "../MainSwiper";
import OurServices from "../OurServices";
import WhyUs from "../WhyUs";

export default function Main() {
  return (
    <div className="h-full w-full">
      <Header />

      <MainSwiper />

      <OurServices />

      <WhyUs />

      <Contact />
    </div>
  );
}
