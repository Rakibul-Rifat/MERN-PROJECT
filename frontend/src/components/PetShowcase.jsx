import React from "react";

const pets = [
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdMZbUmATQe32DHwU-sRknWQ-Ivyw4IcEkGQ&s", // replace with actual URLs
  },
  {
    id: "MO502",
    name: "Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    image: "https://www.shutterstock.com/image-photo/dry-pet-food-natural-ingredients-260nw-2527826927.jpg",
  },
  {
    id: "MO102",
    name: "Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    image: "https://thumbs.dreamstime.com/b/pet-friendly-menu-happy-labrador-surrounded-healthy-dog-food-ingredients-including-salmon-carrots-broccoli-rice-treats-347972267.jpg",
  },
  {
    id: "MO512",
    name: "Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFtIUFiPZE7KAX5qeT2PTYjCisCXJyUSJmA&s",
  },
  {
    id: "MO231",
    name: "Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: "7.900.000 VND",
    image: "https://kahootsfeedandpet.com/cdn/shop/articles/transitioning-dog-food-pexels.jpg?v=1682539738&width=1100",
  },
  {
    id: "MO502",
    name: "Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: "9.000.000 VND",
    image: "https://pyxis.nymag.com/v1/imgs/f55/980/f57a2f1d6de4cbf768e5f97fb39f69caa7-dog-food-106-final.2x.rsocial.w600.jpg",
  },
  {
    id: "MO231",
    name: "Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: "6.500.000 VND",
    image: "https://kahootsfeedandpet.com/cdn/shop/articles/transitioning-dog-food-pexels.jpg?v=1682539738&width=1100",
  },
  {
    id: "MO512",
    name: "Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 months",
    price: "5.000.000 VND",
    image: "https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles-20/092121_Pet-food-trends_Lead---Copy.jpg?height=667&t=1631919411&width=1080",
  },
];

const PetShowcase = () => {
  return (
    <section className="py-10 lg:px-20 px-4 md:px-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500 text-left">What's new?</p>
          <h2 className="text-2xl font-bold text-blue-950">Take A Look At Some Of Our Pets</h2>
        </div>
         <a href="/about"><button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-full hover:bg-blue-100 transition">
          View more →
        </button></a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={pet.image} alt={pet.name} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{`${pet.id} – ${pet.name}`}</h3>
              <p className="text-sm text-gray-600">
                Gene: <span className="font-medium">{pet.gender}</span> &nbsp;•&nbsp; 
                Age: <span className="font-medium">{pet.age}</span>
              </p>
              <p className="mt-2 font-bold text-blue-900">{pet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetShowcase;
