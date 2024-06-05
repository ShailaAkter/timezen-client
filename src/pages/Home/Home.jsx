import ContainerBox from "../../components/containers/ContainerBox"
import { motion, useScroll} from "framer-motion"
import { useAuth } from "../../hooks/auth";
import Hero from "./Hero";
import SomeBrands from "./SomeBrands";
import LatestCollection from "./LatestCollection";
import ServiceSection from "./ServiceSection";
import PremiumCollection from "./PremiumCollection";
import WatchReviews from "./WatchReviews";
import About from "./About";


const Home = () => 
{
  const {scrollYProgress} = useScroll();
  const [auth, setAuth] = useAuth();

  return (
    <ContainerBox title= "TIMEZEN - A Reliable Watch Store">
      <Hero/>
      <About/>
      <LatestCollection/>
      <ServiceSection/>
      <PremiumCollection/>
      <WatchReviews/>
    </ContainerBox>
  )
}

export default Home