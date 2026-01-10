'use client';

import React from 'react';
import Link from 'next/link';
import { LazyMotionDiv } from '../../utils/lazyMotion';

export default function PermacultureClient() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16">
        <div className="container mx-auto px-4">
          <LazyMotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
              Ground Covers for a Healthy and Floral Yard
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              From Lawn to Lush: Transform Your Traditional Grass into a Beautiful, Low-Maintenance Permaculture Landscape
            </p>
          </LazyMotionDiv>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazyMotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-teal-800 mb-6">A Brief History on Grass Lawns</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Let's first talk about what most residents grow in their yard: <strong>Grass</strong>. Grass can come in many different varieties whether we are looking for shade resilient varieties or full sun thrivers. While grass can come in a variety of colors, shade requirements, and textures, it can lack flowering abilities, you have to mow, dies in the winter, sometimes can get patchy, and is typically overtaken by what most people consider "weeds".
                </p>
                
                <p>
                  So why is it the standard to have grass on your property? Grass lawns originated from the baroque period of French gardens. Royal courts wanted to flaunt their money against the common folk who tended to have a garden plot on their land requiring them to grow their own food. The rich kings and queens wanted to show how much money they truly had by showing they could grow something they considered to be "useless". They grew this grass in formal and English side gardens which took massive amounts of upkeep and dominated the common folk.
                </p>
                
                <p>
                  These lawns travelled to the American countryside and Northeast from presidents such as George Washington and Thomas Jefferson who showcased their large estates to the American public.
                </p>
                
                <p>
                  A few hundred years later, the rise of traditional lawns in suburban landscapes took a massive upheaval after the second world war. What was sold as the "American Dream" by homemakers such as Sears, you could not only own a nicely designed home with your family, but also have the perfect manicured lawn. This is where the rise of traditional landscaping came into play, where a team would come and take care of your yard, shrubs, and leaves. Now, 80 years later, almost everyone has a grass lawn.
                </p>
              </div>
            </LazyMotionDiv>
          </div>
        </div>
      </section>

      {/* Ground Cover Questionability Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazyMotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Ground Cover Questionability?</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  However, humans have the greatest ability to evolve, use rational, creative and critical thinking. Many have questioned the use of traditional grass yards, not seeing their ecological importance with the new green movements, considerable decline in pollinators worldwide, and lack of beauty on the home fronts.
                </p>
                
                <p>
                  With creative and conscious thinking many have chose to transform their green havens into an abundant pollinator landscape. The beauty of ground covers are paving the way for new landscapes, <strong>no mow lawns, low maintenance lawns, pollinator friendly lawns, and flowering lawns that require no upkeep</strong>.
                </p>
              </div>
            </LazyMotionDiv>
          </div>
        </div>
      </section>

      {/* What is a Groundcover Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazyMotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-teal-800 mb-6">So What is a Groundcover?</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Groundcovers are <strong>low maintenance, spreading, trailing, and sometimes flowering plants</strong> that suppress weeds, add color to your existing landscape, add flowers to your lawn, require no mowing and are steppable. Many of these ground covers are evergreen, meaning they do not die back in the winter, are green year round, and look dense and plush. While some ground covers are semi-evergreen, meaning they slightly die back in the winter but not enough to have bare ground.
                </p>
                
                <p>
                  Other ground covers can be great for erosion control, drought resistance, animals, and seasonal interest. You can even choose a variety of native ground covers that will sprout, spread, flower, and die back seasonally, making way for the next groundcover.
                </p>
                
                <p>
                  However, because there are an array of different groundcovers, each one has different qualities, colors, flowering types, spread rates, and steppability requirements. Some ground covers work better in lawns than others, while some are great for garden beds as a mulch alternative, and others can even be medicinal and herbal in vegetable gardens.
                </p>
                
                <p className="font-semibold text-teal-800">
                  Gardening Thyme installs a variety of different ground covers based on your needs, location, and preference. We match you with the right ground cover for your no-mow lawn, garden bed, or vegetable garden.
                </p>
              </div>
            </LazyMotionDiv>
          </div>
        </div>
      </section>

      {/* Ground Cover Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <LazyMotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-teal-800 mb-4">Ground Cover Installation Options</h2>
              <p className="text-lg text-gray-700">
                These are just a few examples. We will do a full assessment and choose a selection of ground covers that will work for your yard.
              </p>
            </LazyMotionDiv>

            <div className="grid md:grid-cols-3 gap-8">
              {/* No-Mow Lawn */}
              <LazyMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-teal-800 mb-6">No-Mow Lawn</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Alpine Strawberry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Blue Moneywort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Blue Star Creeper</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Clover – Micro, Red, White, Crimson</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Creeping Jenny</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Mazus Reptans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Native Violet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Sunny Side Up Fleabane</span>
                  </li>
                </ul>
              </LazyMotionDiv>

              {/* Garden Beds */}
              <LazyMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-teal-800 mb-4">Garden Beds</h3>
                <p className="text-sm text-gray-600 mb-6">For Weed Suppression – Mulch Alternative</p>
                <p className="text-sm text-gray-600 italic mb-4">All of the above ground covers including:</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Ajuga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Creeping Phlox</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Creeping Thyme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Dianthus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Elfin Thyme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Moss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Pussytoes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Rockcress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Seathrift</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Sedums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Stonecrop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Veronica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Wooly Thyme</span>
                  </li>
                </ul>
              </LazyMotionDiv>

              {/* Vegetable Garden */}
              <LazyMotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-teal-800 mb-6">Vegetable Garden</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Creeping Raspberry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Creeping Thyme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Greek Oregano</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Lemon Balm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Lemon Thyme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Mint – in its own container</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Purslane</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Red Clover – Medicinal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>Strawberry</span>
                  </li>
                </ul>
              </LazyMotionDiv>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <LazyMotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-teal-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-teal-800 mb-4 text-center">
                Choose Gardening Thyme for Your Ground Cover Installation!
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto text-center">
                Transform your traditional lawn into a beautiful, low-maintenance permaculture landscape. Expert ground cover installation in Marietta, Alpharetta, and Metro Atlanta.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="btn-primary-teal hover:btn-primary-teal-hover text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </LazyMotionDiv>
        </div>
      </section>
    </div>
  );
}
