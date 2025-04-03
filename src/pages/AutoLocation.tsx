import React, { useState } from 'react';
import { Car, MapPin, Star, Shield, Clock } from 'lucide-react';
import DriverModal from '../components/DriverModal';

const AutoLocation = () => {
  const [selectedDriver, setSelectedDriver] = useState(null);

  const drivers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      image: 'https://www.shutterstock.com/image-photo/pondicherry-india-december-7-2016-260nw-1872259075.jpg',
      rating: 4.8,
      trips: 1200,
      experience: '5 years',
      vehicle: 'AUTO',
      location: 'Marina Beach',
      availability: 'Available Now',
      price: '₹250/hour',
      languages: ['Malayalam', 'Tamil'],
      verified: true,
      reviews: [
        {
          user: "Priya Sharma",
          rating: 5,
          comment: "Very professional and punctual. Great experience!",
          date: "2024-03-15"
        },
        {
          user: "Rahul Verma",
          rating: 4,
          comment: "Good knowledge of local areas and very helpful.",
          date: "2024-03-10"
        }
      ],
      achievements: [
        "5000+ Hours of Safe Driving",
        "Top Rated Driver 2023",
        "Customer Service Excellence"
      ]
    },
    {
      id: 2,
      name: 'Suresh Patel',
      image: 'https://www.shutterstock.com/image-photo/happy-confident-driver-crossed-arms-600nw-2114566928.jpg',
      rating: 4.9,
      trips: 980,
      experience: '4 years',
      vehicle: 'AUTO',
      location: 'EDEN Beach',
      availability: 'Available in 15 mins',
      price: '₹230/hour',
      languages: ['English', 'French', 'Hindi'],
      verified: true,
      reviews: [
        {
          user: "Amit Kumar",
          rating: 5,
          comment: "Best auto driver I've met. Very friendly and professional.",
          date: "2024-03-14"
        }
      ],
      achievements: [
        "4000+ Successful Trips",
        "Safety Champion 2023",
        "Local Area Expert"
      ]
    },
    {
      id: 3,
      name: 'Parthiban',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-1dEzKmioMjWjspZdhIbSWsOwvURH2bDpCsmUArTVjr1F8fXJT4ooyrs4yvf6HqEBLFO4RwSvGGmALtClihjex8xqXCqQcf0RLWmglhdP_5sCqPBrUTAHzWYYEpmKtABn9K-TZlztJsTN/s1600/annadurai-the-auto-driver.jpg',
      rating: 4.7,
      trips: 850,
      experience: '3 years',
      vehicle: 'AUTO',
      location: 'ROCK Beach',
      availability: 'Available Now',
      price: '₹240/hour',
      languages: ['English', 'Hindi'],
      verified: true,
      reviews: [
        {
          user: "Sneha Reddy",
          rating: 4,
          comment: "Very reliable and knows all the shortcuts.",
          date: "2024-03-12"
        }
      ],
      achievements: [
        "3500+ Happy Customers",
        "Punctuality Award 2023",
        "Beach Route Specialist"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Auto Location Services</h1>
        <p className="text-xl text-gray-600">Find and book reliable auto services for your beach trip</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {drivers.map((driver) => (
          <div key={driver.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Driver Image and Basic Info */}
              <div className="md:w-1/4">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">{driver.name}</h2>
                  <div className="flex items-center">
                    <Star className="text-yellow-400" size={20} />
                    <span className="ml-2 text-gray-600">{driver.rating} ({driver.trips} trips)</span>
                  </div>
                  {driver.verified && (
                    <div className="flex items-center text-green-600">
                      <Shield size={20} />
                      <span className="ml-2">Verified Driver</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Driver Details */}
              <div className="md:w-2/4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-gray-500">Vehicle</h3>
                    <p className="font-semibold">{driver.vehicle}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-500">Experience</h3>
                    <p className="font-semibold">{driver.experience}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-500">Location</h3>
                    <p className="font-semibold">{driver.location}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-500">Price</h3>
                    <p className="font-semibold">{driver.price}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-500">Languages</h3>
                  <div className="flex gap-2 mt-1">
                    {driver.languages.map((language) => (
                      <span
                        key={language}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-green-600">
                  <Clock size={20} />
                  <span className="ml-2">{driver.availability}</span>
                </div>
              </div>

              {/* Booking Section */}
              <div className="md:w-1/4 flex flex-col justify-center items-center space-y-4">
                <button
                  onClick={() => setSelectedDriver(driver)}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Profile
                </button>
                <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Driver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDriver && (
        <DriverModal
          driver={selectedDriver}
          onClose={() => setSelectedDriver(null)}
        />
      )}
    </div>
  );
};

export default AutoLocation;