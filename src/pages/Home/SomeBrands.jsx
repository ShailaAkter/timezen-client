import img1 from "../../assets/images/home-page/hero-section/cassio3.jpg"

const SomeBrands = () => 
{
  return (
    <div className="">
        <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-rose-600 h-[350px] rounded-lg flex items-end p-4 relative shadow-lg hover:scale-105 transform transition duration-300">
                    <div>
                        <div className="mb-4 text-white">
                            <p className="text-xl font-bold">Rolex</p>
                            <p className="text-sm">Desired Brand</p>
                            <p className="text-lg mt-2">Buy Now</p>
                            <button className="mt-2 py-1 px-4 bg-white text-rose-600 font-semibold rounded hover:bg-gray-200">Shop Now</button>
                        </div>
                    </div>
                    <img src={img1} alt="Rolex" className="w-[150px] absolute bottom-0 right-4" />
                </div>

                <div className="bg-rose-600 h-[350px] rounded-lg flex items-end p-4 relative shadow-lg hover:scale-105 transform transition duration-300">
                    <div>
                        <div className="mb-4 text-white">
                            <p className="text-xl font-bold">Rolex</p>
                            <p className="text-sm">Desired Brand</p>
                            <p className="text-lg mt-2">Buy Now</p>
                            <button className="mt-2 py-1 px-4 bg-white text-rose-600 font-semibold rounded hover:bg-gray-200">Shop Now</button>
                        </div>
                    </div>
                    <img src={img1} alt="Rolex" className="w-[150px] absolute bottom-0 right-4" />
                </div>

                <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-rose-600 h-[350px] rounded-lg flex items-end p-4 relative shadow-lg hover:scale-105 transform transition duration-300">
                    <div>
                        <div className="mb-4 text-white">
                            <p className="text-xl font-bold">Rolex</p>
                            <p className="text-sm">Desired Brand</p>
                            <p className="text-lg mt-2">Buy Now</p>
                            <button className="mt-2 py-1 px-4 bg-white text-rose-600 font-semibold rounded hover:bg-gray-200">Shop Now</button>
                        </div>
                    </div>
                    <img src={img1} alt="Rolex" className="w-[150px] absolute bottom-0 right-4" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SomeBrands