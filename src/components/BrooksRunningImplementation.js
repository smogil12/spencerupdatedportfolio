import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const BrooksRunningImplementation = () => {

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
              <time dateTime="2025-10-01">Oct 2025</time>
              <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                Technical Implementations
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Brooks Running Email Landing Page Project
            </h1>
            <p className="text-lg text-gray-600">
              Designed and implemented a new client onboarding system that reduced time-to-value by 60% and improved client satisfaction scores by 25%. Created interactive training materials and automated progress tracking.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
              <img
                src="https://i.imgur.com/4bDryxR.png"
                alt="Brooks Running Email Landing Page Project"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Overview</h2>
            
            <p className="text-gray-700 mb-6">
              Designed and implemented a new client onboarding system that reduced time-to-value by 60% and improved client satisfaction scores by 25%. Created interactive training materials and automated progress tracking.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features Implemented</h3>
            <div className="text-gray-700 mb-8 space-y-3">
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Email Template Design:</strong> Custom-designed responsive email templates for various campaigns.</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Dynamic Content Integration:</strong> Personalized content delivery based on user preferences and behavior.</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>A/B Testing Framework:</strong> Setup for continuous optimization of email performance.</div>
              </div>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-2 h-2 bg-black rounded-full mr-3"></span>
                <div className="flex-grow"><strong>Analytics & Reporting:</strong> Integration with analytics tools to track engagement and conversions.</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Live Example</h4>
              <p className="text-gray-700 mb-4">
                See this implementation in action on Brooks Running's email landing page:
              </p>
              <a
                href="https://www.brooksrunning.com"
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

export default BrooksRunningImplementation;
