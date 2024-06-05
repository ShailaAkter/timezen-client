import img1 from "../../assets/images/home-page/about-section/about.jpg"
import { FaEnvelope, FaFacebook, FaInstagram,FaTwitter } from 'react-icons/fa';


const About = () => 
{
    return (
        <div>
<div className="flex lg:flex-row justify-center md:flew-row  flex-col-reverse lg:items-center md:items-center py-28">

<img className="h-[400px] w-[300px] rounded-xl shadow-xl shadow-amber-900 mx-auto" src={img1} alt="" />

<div className="lg:w-1/2 md:w-1/2 w-full mx-auto pb-4">
    <h1 className="lg:text-5xl md:text-3xl lg:text-left md:text-left text-2xl text-center  font-bold text-gray-600 ">About Us</h1>
    <p className="py-2 text-slate-900 lg:text-left md:text-left text-center lg:px-0 md:px-0 px-4">Welcome to <span className="text-slate-800 font-semibold">TimeZen Watch Store</span>, where timepieces meet sophistication and style. We're committed to curating a collection of watches that not only tell time but also tell stories. Our passion for watches drives us to offer a diverse range of meticulously crafted timepieces that cater to every taste and occasion. Whether you're seeking a timeless classic, a modern marvel, or a statement piece, we have something for everyone. Embark on a journey through time with us and discover the perfect watch to complement your unique style.</p>
    <div>
        <h2 className="text-2xl text-amber-600 font-semibold lg:text-left md:text-left text-center">Contact With Us</h2>
        <div className='flex gap-2 text-amber-600 text-3xl pt-5  justify-center lg:justify-normal'>
            <FaEnvelope></FaEnvelope>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
        </div>
    </div>
</div>
</div>

        </div>
    );
};

export default About;