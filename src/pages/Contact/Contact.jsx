import ContainerBox from "../../components/containers/ContainerBox"

const Contact = () => 
{
  return (
    <ContainerBox title="Contact | TIMEZEN">
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-8 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Store</h3>
            <p className="text-gray-600 mb-4">123 Watch Street</p>
            <p className="text-gray-600 mb-4">City, Country, ZIP Code</p>
            <p className="text-gray-600 mb-4">Opening Hours: Mon - Fri: 9am - 6pm</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-8 transform transition-transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">Phone: +1 234 567 890</p>
            <p className="text-gray-600 mb-4">Email: info@example.com</p>
            <p className="text-gray-600 mb-4">Fax: +1 234 567 891</p>
          </div>
        </div>
      </div>
    </div>
    </ContainerBox>
  )
}

export default Contact