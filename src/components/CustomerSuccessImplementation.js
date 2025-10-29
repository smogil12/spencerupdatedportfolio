import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CustomerSuccessImplementation = () => {

  return (
    <div className="bg-white pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Back to Implementations Link */}
          <div className="mb-8">
            <Link
              to="/implementations"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Implementations
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-x-4 text-sm text-gray-500 mb-4">
              <time dateTime="2024-12-01">Dec 2024</time>
              <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                Technical Implementations
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              At Home Implementation
            </h1>
            <p className="text-lg text-gray-600">
              At Home recently launched our R&R product on their website. They are using our API for the display and submission of reviews and visual reviews.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
              <img
                src="https://i.imgur.com/kNcC5Io.jpeg"
                alt="Customer Success Implementation - Team collaboration meeting"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Overview</h2>
            
            <p className="text-gray-700 mb-6">
              At Home successfully integrated our comprehensive review and rating solution, creating a seamless customer experience across their digital platform.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features Implemented</h3>
            <div className="text-gray-700 mb-8 space-y-3">
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Gallery Row Element:</strong> Visual review display showcasing customer photos and feedback</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Review Summary Element:</strong> Aggregated rating display with key metrics</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Review List Element:</strong> Comprehensive list of customer reviews with filtering options</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>SKU to Average Rating Feed:</strong> Dynamic population of PLP/category pages with review data</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Syndication Network:</strong> Leveraging our retailer network for broader reach</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>SSO Integration:</strong> Seamless authentication via the Emplfi suite</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Live Example</h4>
              <p className="text-gray-700 mb-4">
                See this implementation in action on At Home's product detail page:
              </p>
              <a
                href="https://www.athome.com/honeybloom-framed-dandelions-barn-canvas-wall-art-40x30/124303832.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-xl transition-all duration-200"
                style={{ color: 'white' }}
              >
                View Live Example
              </a>
            </div>
          </div>

          {/* Author Section */}
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

export default CustomerSuccessImplementation;
