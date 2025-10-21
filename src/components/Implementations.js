import React from 'react';
import { useNavigate } from 'react-router-dom';

const Implementations = () => {
  const navigate = useNavigate();

  const implementations = [
    {
      id: 1,
      title: 'Customer Success Implementation',
      href: '/implementations/customer-success-implementation',
      description:
        'Implemented comprehensive customer success strategies and processes that improved client retention rates by 35% and satisfaction scores across multiple enterprise accounts. Developed automated onboarding workflows and success metrics tracking.',
      imageUrl:
        'https://i.imgur.com/kNcC5Io.jpeg',
      date: 'Dec 2024',
      datetime: '2024-12-01',
      category: { title: 'Customer Success', href: '#' },
      author: {
        name: 'Spencer Mogil',
        role: 'Technical Implementation Manager',
        href: '#',
        imageUrl: 'https://i.imgur.com/wioFsZM.jpg',
      },
    },
    {
      id: 2,
      title: 'Process Optimization & Workflow Automation',
      href: '#',
      description:
        'Streamlined internal workflows and implemented new tools that increased team efficiency by 40% and reduced onboarding time for new clients by 60%. Introduced automation for repetitive tasks and created standardized processes.',
      imageUrl:
        'https://i.imgur.com/pUXYJtF.png',
      date: 'Nov 2024',
      datetime: '2024-11-15',
      category: { title: 'Operations', href: '#' },
      author: {
        name: 'Spencer Mogil',
        role: 'Technical Implementation Manager',
        href: '#',
        imageUrl: 'https://i.imgur.com/wioFsZM.jpg',
      },
    },
    {
      id: 3,
      title: 'Client Onboarding System Redesign',
      href: '#',
      description:
        'Designed and implemented a new client onboarding system that reduced time-to-value by 60% and improved client satisfaction scores by 25%. Created interactive training materials and automated progress tracking.',
      imageUrl:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      date: 'Oct 2024',
      datetime: '2024-10-01',
      category: { title: 'Onboarding', href: '#' },
      author: {
        name: 'Spencer Mogil',
        role: 'Technical Implementation Manager',
        href: '#',
        imageUrl: 'https://i.imgur.com/wioFsZM.jpg',
      },
    },
  ];

  const handleClick = (href) => {
    console.log('Button clicked! Navigating to:', href);
    if (href.startsWith('/')) {
      try {
        navigate(href);
        console.log('React Router navigation successful');
      } catch (error) {
        console.log('React Router navigation failed, using fallback:', error);
        window.location.href = href;
      }
    }
  };

  // Debug logging
  console.log('Implementations data:', implementations);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Implementations
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Showcasing key implementations and process improvements from my professional experience in customer success and operations.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20">
            {implementations.map((implementation) => {
              console.log(`Implementation ${implementation.id} href:`, implementation.href);
              return (
                <article key={implementation.id} className="relative isolate">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={implementation.datetime} className="text-gray-500">
                        {implementation.date}
                      </time>
                      <a
                        href={implementation.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {implementation.category.title}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        {implementation.href.startsWith('/') ? (
                          <button
                            onClick={() => handleClick(implementation.href)}
                            style={{
                              background: 'none',
                              border: 'none',
                              padding: 0,
                              margin: 0,
                              cursor: 'pointer',
                              fontSize: 'inherit',
                              fontWeight: 'inherit',
                              color: 'inherit',
                              position: 'relative',
                              zIndex: 9999
                            }}
                          >
                            {implementation.title}
                          </button>
                        ) : (
                          <span>{implementation.title}</span>
                        )}
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600">{implementation.description}</p>
                    </div>
                    <div className="mt-8 w-full">
                      {implementation.href.startsWith('/') ? (
                        <button
                          onClick={() => handleClick(implementation.href)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            margin: 0,
                            cursor: 'pointer',
                            width: '100%',
                            position: 'relative',
                            zIndex: 9999
                          }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
                            <img
                              alt=""
                              src={implementation.imageUrl}
                              className="w-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </button>
                      ) : (
                        <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
                          <img
                            alt=""
                            src={implementation.imageUrl}
                            className="w-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className="mt-6 flex items-center gap-x-4">
                      <img
                        alt=""
                        src={implementation.author.imageUrl}
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">
                          <a href={implementation.author.href}>
                            <span className="absolute inset-0" />
                            {implementation.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{implementation.author.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementations;
