import React from 'react';
import { X, Star, Shield, Clock, MapPin, Phone, Car, Award, ThumbsUp } from 'lucide-react';

interface Driver {
  id: number;
  name: string;
  image: string;
  rating: number;
  trips: number;
  experience: string;
  vehicle: string;
  location: string;
  availability: string;
  price: string;
  languages: string[];
  verified: boolean;
  reviews?: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  achievements?: string[];
}

interface DriverModalProps {
  driver: Driver;
  onClose: () => void;
}

const DriverModal: React.FC<DriverModalProps> = ({ driver, onClose }) => {
  const reviews = driver.reviews || [
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
  ];

  const achievements = driver.achievements || [
    "5000+ Hours of Safe Driving",
    "Top Rated Driver 2023",
    "Customer Service Excellence"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-800">Driver Profile</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Basic Info */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={driver.image}
                alt={driver.name}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800">{driver.name}</h3>
                {driver.verified && (
                  <div className="flex items-center text-green-600">
                    <Shield size={20} />
                    <span className="ml-2">Verified Driver</span>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-2" size={20} />
                  <span>{driver.rating} ({driver.trips} trips)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-2" size={20} />
                  <span>{driver.experience} experience</span>
                </div>
                <div className="flex items-center">
                  <Car className="text-gray-600 mr-2" size={20} />
                  <span>{driver.vehicle}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-red-600 mr-2" size={20} />
                  <span>{driver.location}</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {driver.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-white rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now - {driver.price}
                </button>
                <button className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <Phone size={20} className="inline mr-2" />
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 text-blue-600" size={24} />
              Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                  <ThumbsUp className="text-green-600 mr-2" size={20} />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Recent Reviews</h4>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.user}</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400" size={16} />
                      <span className="ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverModal;