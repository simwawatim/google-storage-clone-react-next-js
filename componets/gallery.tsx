'use client';

import Slider from "react-slick";

const cardData = [
  {
    imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    title: "Shoe",
    badgeCount: 5,
  },
  {
    imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    title: "Box",
    badgeCount: 3,
  },
  {
    imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    title: "Certiface",
    badgeCount: 8,
  },
  {
    imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    title: "driving ;liceinec",
    badgeCount: 2,
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Number of cards visible
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // md breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {cardData.map((card, idx) => (
        <div key={idx} className="p-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="rounded-md mb-4 object-cover w-full h-48"
            />
            <ul className="my-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-orange-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.41l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-1.42 0l-4-4a1 1 0 111.42-1.42L11 12.41V7a1 1 0 112 0v5.41z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">{card.title}</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded-sm dark:bg-gray-700 dark:text-gray-400">
                    {card.badgeCount}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
