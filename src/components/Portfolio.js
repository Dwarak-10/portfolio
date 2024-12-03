import React from "react";
import PortfolioImg from "../asset/portfolio/portfolio.png";
// import youtube from "../asset/portfolio/my-youtube.png";
// import restaurant from "../asset/portfolio/restaurant.png";
import devtinder from "../asset/portfolio/dev-tinder.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: devtinder,
      code: "https://github.com/Dwarak-10/devTinder-web",
      demo: "https://devtinder-1.netlify.app/",
    },
    // {
    //   id: 1,
    //   src: restaurant,
    //   code: "https://github.com/Dwarak-10/namaste-react/tree/master",
    //   demo: "https://dwarakrestaurants.netlify.app/",
    // },
    // {
    //   id: 2,
    //   src: youtube,
    //   code: "https://github.com/Dwarak-10/my-youtube",
    //   demo: "",
    // },
    {
      id: 2,
      src: PortfolioImg,
      code: "https://github.com/Dwarak-10/portfolio",
      demo: "https://peppy-kelpie-c1d483.netlify.app",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
