import React from "react";

const pets = [
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    img: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/10-15/Labradoodle+FAQs+_+Health%2C+Grooming%2C+and+More+_++ASPCA+Pet+Health+Insurance+_+smiling+chocolate+Labradoodle+on+an+orange+background-min.jpg",
  },
  {
    id: "MO502",
    name: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqHduoeTYhs35h9FIvP3wCVznfgGGKyqWIg&s",
  },
  {
    id: "MO102",
    name: "Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yVd49Rh1VwAWdVWRBPKfADm-0zlwmVHfog&",
  },
  {
    id: "MO512",
    name: "Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    img: "https://www.vmcdn.ca/f/files/sudbury/images/LocalImages/200723_pets-animals-pet-care.jpg;w=960",
  },
  {
    id: "MO231",
    name: "Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: "7.900.000 VND",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PQeTcTMmxduANCVV1R-uYjdwu1fGFIa4RBwRo6rWniXumHUupoYH6PmxOwWxyZq3aEI&usqp=CAU",
  },
  {
    id: "MO502",
    name: "Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: "9.000.000 VND",
    img: "https://spotpet.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5ehn3s5t7ec%2F7DMYoPWnvyH8Nx0smdbmvn%2F3cba452e92b88588c76bd75825b1dd47%2FKansas_City_-_2.jpeg&w=3840&q=75",
  },
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.500.000 VND",
    img: "https://petsydna.com/wp-content/uploads/2024/04/dog-leg-injury.jpeg",
  },
  {
    id: "MO512",
    name: "Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 months",
    price: "5.000.000 VND",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFABDztyFzGbKqtiH2Q_PiWdoLHNIRXZMeaw&s",
  },
];
const PetGallery = () => {
  return (
    <div className="lg:px-20 px-5 bg-white py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-sm text-gray-500 text-left">What's new?</p>
          <h2 className="text-2xl font-bold text-blue-900">Take A Look At Some Of Our Pets</h2>
        </div>
        <a href="/Petknowledge"> <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition">
          View more →
        </button> </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg duration-300"
          >
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-md text-gray-900">
                {pet.id} – {pet.name}
              </h3>
              <p className="text-sm text-gray-500">
                Gene: {pet.gender} &nbsp; • &nbsp; Age: {pet.age}
              </p>
              <p className="mt-2 font-bold text-blue-900">{pet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PetGallery;