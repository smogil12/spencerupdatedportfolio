import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const EvoImplementation = () => {
  return (
    <div className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <Link
              to="/implementations"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Implementations
            </Link>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-x-4 text-sm text-gray-500 mb-4">
              <time dateTime="2026-05-01">May 2026</time>
              <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                Technical Implementations
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Evo.com R&R Implementation
            </h1>
            <p className="text-lg text-gray-600">
              Evo.com recently launched our R&R JS widgets on their production site. Read below on how we helped them out
            </p>
          </div>

          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
              <img
                src="/evo.png"
                alt="Evo.com R&R Implementation"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Overview</h2>

            <p className="text-gray-700 mb-6">
              Evo.com switched to Emplifi R&R from Power Reviews so that they could make use of our fast JS widgets made with ADA compliance in mind, vast Syndication Network, and new AI features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features Implemented</h3>
            <div className="text-gray-700 mb-8 space-y-3">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                <div className="flex-grow">
                  Import ~270K reviews from Power Reviews, and import additional data points such as sub-dimensions, shopper
                  profile attributes, and images
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                <div className="flex-grow">
                  Set up their inbound syndication network to their prod instance, before launch, which contains 74 sources,
                  so that when they launched they already had about ~550K syndicated reviews
                </div>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3 mt-2"></span>
                <div className="flex-grow">
                  Enable our new AI topics feature within our JS widgets, and they are excited to test out the AI summary
                  feature soon
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center gap-x-4">
              <img
                src="https://i.imgur.com/wioFsZM.jpg"
                alt="Spencer Mogil"
                className="h-12 w-12 rounded-full bg-gray-50"
              />
              <div>
                <p className="font-semibold text-gray-900">Spencer Mogil</p>
                <p className="text-gray-600">Technical Implementation Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvoImplementation;
