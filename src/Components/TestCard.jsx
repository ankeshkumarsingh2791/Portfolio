// TestCard.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Adam Gilchrist',
    role: 'Entrepreneur',
    date: '31 July 2023',
    image: 'images.jpg',
    content:
      'Working with Ankesh was a game-changer. His dedication, clean code practices, and modern UI approach brought life to our vision in record time. Highly recommend him!'
  },
  {
    name: 'Alexandra Daddario',
    role: 'CEO at Accenture',
    date: '10 Oct 2024',
    image: 'test1.jpg',
    content:
      'Ankesh delivered exceptional results for our internal dashboard system. His MERN stack expertise and deployment strategy truly streamlined our product launch.'
  }
];

const TestCard = () => {
  return (
    <div className='w-full gap-8 px-4 flex flex-col sm:flex-row justify-center'>
      {testimonials.map((item, index) => (
        <div key={index} className='sm:w-1/2'>
          <article className="flex bg-white transition shadow-md hover:shadow-2xl rounded-xl overflow-hidden">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-gray-100">
              <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                <span>{item.date.split(' ')[1]}</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>{item.date}</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
              <img src={item.image} alt={item.name} className="aspect-square h-full w-full object-cover" />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <h3 className="font-bold text-lg text-gray-900">
                  {item.name}
                  <br />
                  <span className="text-sm font-normal text-gray-600">{item.role}</span>
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </p>
              </div>
              <div className="sm:flex sm:items-end sm:justify-end p-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 text-xs font-bold uppercase text-gray-900 rounded transition">
                  Read More
                </button>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default TestCard;