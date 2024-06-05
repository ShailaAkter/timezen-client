import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/images/home-page/hero-section/hero-1.png"
import YellowButton from "../../components/buttons/YellowButton";
import SlateButton from "../../components/buttons/SlateButton";

const Hero = () => 
{

    const slideSettings = 
    {
        dots: false, 
        arrows: false,
        infinite: true, 
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true, // Add this line
        autoplaySpeed: 5000,
        cssEase: 'ease-in-out',
        pauseOnHover: true, 
        pauseOnFocus: true
    };

  return ( 
    <div className="py-10">
    <div className="w-full">
        <Slider {...slideSettings}>

            <div className="w-full h-screen bg-cover bg-center bg-slide-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="flex flex-col justify-center p-10">
                        <h4 className="text-white">Official distributor of</h4>
                        <h1 className="text-white text-4xl font-bold">ROLEX, FOSSIL $ SEIKO</h1>
                        <div className="mt-4">
                        <div className="mt-4">
                            <SlateButton to="/shop">Shop Now</SlateButton>
                            <button className="bg-blue-500 text-white  rounded"></button>
                        </div> 
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            <div className="w-full h-screen bg-cover bg-center bg-slide-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="flex flex-col justify-center p-10">
                        <h4 className="text-yellow-700">timezen watch</h4>
                        <h1 className="text-yellow-700 text-4xl font-bold">MENS BEST ATTIRE</h1>
                        <div className="text-yellow-700 font-bold text-2xl">
                            <p>Up to 10% OFF </p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </Slider>
    </div>
</div>
  )
}

export default Hero