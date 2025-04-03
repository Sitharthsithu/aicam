import React, { useState, useEffect } from 'react';
import { Search, MapPin, Phone, Star, Shield, Car, Hotel } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setMousePosition({ x, y });
  };

  const featuredDestinations = [
    {
      name: 'Pondy Marina Beach',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      location: 'Pondicherry, India',
    },
    {
      name: 'EDEN Beach',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
      location: 'Chinnaveerampatinam ,Pondicherry, India',
    },
    {
      name: 'Paradise Beach',
      image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a',
      location: 'Nonankuppam ,Pondicherry, India',
    },
  ];

  const featuredDrivers = [
    {
      name: 'Rajesh Kumar',
      image: 'https://www.shutterstock.com/image-photo/pondicherry-india-december-7-2016-260nw-1872259075.jpg',
      rating: 4.8,
      trips: 1200,
      experience: '5 years',
    },
    {
      name: 'Suresh Patel',
      image: 'https://www.shutterstock.com/image-photo/happy-confident-driver-crossed-arms-600nw-2114566928.jpg',
      rating: 4.9,
      trips: 980,
      experience: '4 years',
    },
    {
      name: 'Parthiban',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-1dEzKmioMjWjspZdhIbSWsOwvURH2bDpCsmUArTVjr1F8fXJT4ooyrs4yvf6HqEBLFO4RwSvGGmALtClihjex8xqXCqQcf0RLWmglhdP_5sCqPBrUTAHzWYYEpmKtABn9K-TZlztJsTN/s1600/annadurai-the-auto-driver.jpg',
      rating: 4.7,
      trips: 850,
      experience: '3 years',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section with Parallax */}
      <div
        className="text-center space-y-6 p-12 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 transform-gpu"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Your Perfect Beach Trip Starts Here
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Book autos, hotels, and access emergency services for a worry-free beach vacation.
        </p>

        {/* Search Bar with Parallax */}
        <div
          className="max-w-2xl mx-auto relative"
          style={{
            transform: `translateZ(50px) translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)`,
          }}
        >
          <Search className="absolute left-4 top-3 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search for beaches, hotels, or services..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>

      {/* Featured Destinations with Parallax */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Beach Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div
              key={destination.name}
              className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  style={{
                    transform: `translateZ(20px) scale(${1 + Math.abs(mousePosition.x) * 0.1})`,
                  }}
                />
              </div>
              <div
                className="p-6 bg-white"
                style={{
                  transform: `translateZ(30px)`,
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  <span>{destination.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links with Parallax */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Book an Auto', description: 'Find and book reliable auto services for your beach trip.', icon: Car },
          { title: 'Find Hotels', description: 'Discover comfortable stays near your favorite beaches.', icon: Hotel },
          { title: 'Emergency Services', description: 'Quick access to medical and emergency support.', icon: Phone }
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <service.icon className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Featured Drivers Section with Parallax */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Top Rated Drivers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDrivers.map((driver) => (
            <div
              key={driver.name}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                src={driver.image}
                alt={driver.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
                style={{
                  transform: `translateZ(20px)`,
                }}
              />
              <h3 className="text-xl font-semibold text-gray-800">{driver.name}</h3>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400" size={18} />
                <span className="ml-1 text-gray-600">{driver.rating}</span>
              </div>
              <div className="mt-4 space-y-2 text-center">
                <p className="text-gray-600">
                  <span className="font-semibold">{driver.trips}</span> trips completed
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">{driver.experience}</span> experience
                </p>
              </div>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                style={{
                  transform: `translateZ(30px)`,
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;