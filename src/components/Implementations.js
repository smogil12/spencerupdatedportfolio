import React from 'react';

const Implementations = () => {
  const implementations = [
    {
      id: 1,
      title: "Customer Success Implementation",
      description: "Implemented comprehensive customer success strategies and processes that improved client retention rates and satisfaction scores across multiple enterprise accounts.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 2,
      title: "Process Optimization",
      description: "Streamlined internal workflows and implemented new tools that increased team efficiency by 40% and reduced onboarding time for new clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      link: "#",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 3,
      title: "Client Onboarding System",
      description: "Designed and implemented a new client onboarding system that reduced time-to-value by 60% and improved client satisfaction scores.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Built comprehensive analytics dashboards that provided insights into customer behavior, leading to data-driven decision making and improved outcomes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 5,
      title: "Team Training Program",
      description: "Developed and implemented comprehensive training programs for customer success teams, resulting in improved performance and reduced escalations.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      link: "#",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
    },
    {
      id: 6,
      title: "Customer Feedback System",
      description: "Implemented automated customer feedback collection and analysis systems that provided real-time insights and improved product development decisions.",
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "#",
      teamMembers: ["Spencer Mogil"],
      teamAvatars: ["https://i.imgur.com/wioFsZM.jpg"]
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
              Professional Implementations
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
              Showcasing key implementations and process improvements from my professional experience
            </p>
          </div>
          
          {/* First row of implementations */}
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {implementations.slice(0, 3).map((implementation) => (
              <div key={implementation.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={implementation.image}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a
                      href={implementation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {implementation.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {implementation.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    {implementation.teamAvatars.map((avatar, index) => (
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
                        {implementation.teamMembers.join(' & ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row of implementations */}
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {implementations.slice(3, 6).map((implementation) => (
              <div key={implementation.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={implementation.image}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a
                      href={implementation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                        {implementation.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {implementation.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    {implementation.teamAvatars.map((avatar, index) => (
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
                        {implementation.teamMembers.join(' & ')}
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

export default Implementations;
