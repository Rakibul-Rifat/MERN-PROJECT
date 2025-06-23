import React from 'react';

const articles = [
  {
    title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
    description:
      'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/056/501/866/small/adorable-fluffy-brown-puppy-resting-on-a-soft-blanket-photo.jpg',
  },
  {
    title: 'Dog Diet You Need To Know',
    description:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...",
    imageUrl: 'https://www.sheknows.com/wp-content/uploads/2023/06/cute-small-dog-breeds.jpg',
  },
  {
    title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
    description:
      'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
    imageUrl: 'https://cdn.cheapism.com/images/iStock-182187846.max-825x550.jpg',
  },
];

export default function PetKnowledge() {
  return (
    <div className=" lg:mx-20 bg-white">
      <p className="text-sm text-gray-500">You already know ?</p>
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Useful Pet Knowledge</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-4">
        {articles.map((article, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded mb-2">
                Pet knowledge
              </span>
              <h3 className="font-semibold text-md text-gray-800 mb-1">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
         <a href="/about"><button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
          View more
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button></a>
      </div>
    </div>
  );
}
