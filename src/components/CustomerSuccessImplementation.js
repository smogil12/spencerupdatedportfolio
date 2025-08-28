import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CustomerSuccessImplementation = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
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
                Customer Success
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Customer Success Implementation
            </h1>
            <p className="text-lg text-gray-600">
              At Home recently launched our R&R product on their website. They are using our API for the display and submission of reviews and visual reviews.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="https://i.imgur.com/kNcC5Io.jpeg"
              alt="Customer Success Implementation - Team collaboration meeting"
              className="w-full rounded-2xl bg-gray-50 object-cover"
            />
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Overview</h2>
            
            <p className="text-gray-700 mb-6">
              At Home successfully integrated our comprehensive review and rating solution, creating a seamless customer experience across their digital platform.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features Implemented</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li><strong>Gallery Row Element:</strong> Visual review display showcasing customer photos and feedback</li>
              <li><strong>Review Summary Element:</strong> Aggregated rating display with key metrics</li>
              <li><strong>Review List Element:</strong> Comprehensive list of customer reviews with filtering options</li>
              <li><strong>SKU to Average Rating Feed:</strong> Dynamic population of PLP/category pages with review data</li>
              <li><strong>Syndication Network:</strong> Leveraging our retailer network for broader reach</li>
              <li><strong>SSO Integration:</strong> Seamless authentication via the Emplfi suite</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Implementation</h3>
            <p className="text-gray-700 mb-6">
              The implementation leverages our robust API infrastructure for both display and submission of reviews and visual content. This ensures scalability, reliability, and consistent performance across all touchpoints.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
            <p className="text-gray-700 mb-8">
              This implementation enables At Home to build trust with customers through authentic reviews, improve product discovery through enhanced category pages, and create a more engaging shopping experience that drives conversion.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Live Example</h4>
              <p className="text-gray-700 mb-4">
                See this implementation in action on At Home's product detail page:
              </p>
              <a
                href="https://lnkd.in/esp4SZiG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                <p className="text-gray-600">Team Lead, Customer Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccessImplementation;
