import ContainerBox from "../../components/containers/ContainerBox";

const Showrooms = () => 
{
  const showrooms = [
    {
      city: "New York",
      address: "123 Watch Street, New York, NY 10001",
      hours: "Mon - Fri: 9am - 6pm",
      phone: "+1 234 567 890",
      email: "nyc@example.com",
    },
    {
      city: "Los Angeles",
      address: "456 Time Avenue, Los Angeles, CA 90001",
      hours: "Mon - Fri: 9am - 6pm",
      phone: "+1 234 567 891",
      email: "la@example.com",
    },
    {
      city: "Chicago",
      address: "789 Clock Blvd, Chicago, IL 60007",
      hours: "Mon - Fri: 9am - 6pm",
      phone: "+1 234 567 892",
      email: "chicago@example.com",
    },
  ];

  return (
    <ContainerBox title= "TIMEZEN - Showrooms">
    <div className="bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Our Showrooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showrooms.map((showroom, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg p-8 transform transition-transform hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{showroom.city} Showroom</h3>
              <p className="text-gray-600 mb-4">{showroom.address}</p>
              <p className="text-gray-600 mb-4">{showroom.hours}</p>
              <p className="text-gray-600 mb-4">Phone: {showroom.phone}</p>
              <p className="text-gray-600 mb-4">Email: {showroom.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </ContainerBox>
  )
}

export default Showrooms