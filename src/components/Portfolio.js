import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Pet Project",
      description: "Group project that utilizes HTML, CSS Javascript, jQuery, Bulma, Axios, and PetFinder's API to match adoptable dogs to people based on a user input form",
      image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
      link: "https://smogil12.github.io/Pet-Project/",
      teamMembers: ["Spencer Mogil", "Columbia Team Members"],
      teamAvatars: [
        "https://i.imgur.com/wioFsZM.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqPpJK3kidX0ShG4nV2OSnW7WmO0C3pCdcIMsFEdku8gRU-TG5&usqp=CAU"
      ]
    },
    {
      id: 2,
      title: "Giftastic",
      description: "Project that uses HTML, CSS Javascript, jQuery, Ajax, and Gifphy's API. Pre-made buttons are appended with a for loop through JS and added user input functionality",
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F08%2Fgiphy-film-festival-announcement-00.jpg?q=75&w=800&cbr=1&fit=max",
      link: "https://smogil12.github.io/giftastic/",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 3,
      title: "Friend Finder",
      description: "Full Stack Web Application that uses Node.js, jQuery, AJAX, Express and Bootstrap. Through completing survey, user is matched with a character from The Sopranos with logic from JS",
      image: "https://www.pedestrian.tv/content/uploads/2019/03/sopranos-movie-release-date.jpg",
      link: "https://expressfriendfinderspencer.herokuapp.com",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 4,
      title: "BAmazon",
      description: "Command line application which is a mock Amazon warehouse. Orders are placed using Node.js, and NPM packages mysql and inquirer. To run, Git Clone and NPM install",
      image: "https://media.npr.org/assets/img/2013/11/26/amazon_wide-27f5802cec7710e52f61620c0d6d9373f4cb55e6-s800-c85.jpg",
      link: "https://github.com/smogil12/bamazon",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 5,
      title: "LIRI-Bot",
      description: "Language Interpretation and Recognition Interface that uses Node.js and Javascript to search Spotify, Bands in Town, and OMDB based on user input.",
      image: "https://www.scdn.co/i/_global/open-graph-default.png",
      link: "https://github.com/smogil12/LIRI-Bot",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 6,
      title: "OnTilt",
      description: "Group project full-stack application that uses mySQL, express, express-handlebars, Javascript, and Sequelize that lets user bet on upcoming basketball games",
      image: "https://cdn.hipwallpaper.com/m/60/35/aRMWbg.jpg",
      link: "https://ontiltsports.herokuapp.com/",
      teamMembers: ["Spencer Mogil", "Columbia Team Members"],
      teamAvatars: [
        "https://i.imgur.com/wioFsZM.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqPpJK3kidX0ShG4nV2OSnW7WmO0C3pCdcIMsFEdku8gRU-TG5&usqp=CAU"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Spencer's Portfolio
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Check out some of my projects completed at Columbia
              University's Web Development Boot Camp
            </p>
          </div>
          
          {/* First row of projects */}
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={project.image}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {project.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    {project.teamAvatars.map((avatar, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img
                          className={`h-10 w-10 rounded-full ${index > 0 ? 'ml-3' : ''}`}
                          src={avatar}
                          alt=""
                        />
                      </div>
                    ))}
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-gray-900">
                        {project.teamMembers.join(' & ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row of projects */}
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {projects.slice(3, 6).map((project) => (
              <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={project.image}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {project.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    {project.teamAvatars.map((avatar, index) => (
                      <div key={index} className="flex-shrink-0">
                        <img
                          className={`h-10 w-10 rounded-full ${index > 0 ? 'ml-3' : ''}`}
                          src={avatar}
                          alt=""
                        />
                      </div>
                    ))}
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-gray-900">
                        {project.teamMembers.join(' & ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
