import Contact from "../Contact";
import Header from "../Header";
import MainSwiper from "../MainSwiper";
import OurServices from "../OurServices";
import Testimonials from "../Testimonials";
import WhyUs from "../WhyUs";

export default function Main() {
  return (
    <div className="h-full w-full overflow-hidden">
      <Header />

      <MainSwiper />

      <OurServices />

      <WhyUs />

      <Testimonials />

      <Contact />
    </div>
  );
}
