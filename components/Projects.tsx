'use client'

import AnimateOnScroll from './AnimateOnScroll'

export default function Projects() {
  const projects = [
    {
      title: 'Cozycasa',
      category: 'Designation',
      image: '🏠',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mars',
      category: 'Designation',
      image: '🚀',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Everyday Humans',
      category: 'Designation',
      image: '👥',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore my portfolio showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dive into a curated collection of my finest work, showcasing expertise across various industries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <AnimateOnScroll key={index} animation="zoom-in" delay={index * 100}>
              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
              >
                <div className={`bg-gradient-to-br ${project.color} aspect-[4/3] flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Portfolio {project.category}
                  </p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Testimonial */}
        <AnimateOnScroll animation="fade-up">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 italic">
                &ldquo;Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.&rdquo;
              </p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Jonathan Diesel</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Happy Customer, Apple inc</p>
              </div>
            </div>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
