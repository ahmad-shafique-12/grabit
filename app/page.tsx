import Image from "next/image";
import Navbar from "./component/Navbar1";
import Navbar2 from "./component/Navbar2";
import Navbar3 from "./component/Navbar3";
import Slider1 from "./component/Slider";
import Slider2 from "./component/Slider2";
import Slider3 from "./component/Slider3";
import Banner from "./component/Banner";
import Item from "./component/Item/Item";
import Banner2 from "./component/Banner2";
import BoxDv from "./component/BoxDv";
import Blog from "./component/Blog";
import MultiplaSlider from "./component/MultipalSider";
import Footer from "./component/Footer";
import Navbar1 from "./component/Navbar1";
import ViewCard from "./component/Viewpage";



export default function Home() {
  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <Navbar3/>
    <Slider1/>
    <Slider2/>
    <Slider3/>
    <Banner/>
    <Item/>
 <Banner2/>
 <BoxDv/>
 <MultiplaSlider/>
 <Blog/>
 <Footer/>
{/* <ViewCard/> */}
      </>
  );
}
