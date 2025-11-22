'use client'

import AnimateOnScroll from './AnimateOnScroll'

export default function Blog() {
  const blogs = [
    {
      title: 'Business from the brink of ruin by optimizing our website....',
      date: '08 Nov 2024',
      category: 'Pricing',
      image: '📊',
    },
    {
      title: 'The work is top-notch and I consistently outrank all my...',
      date: '08 Nov 2024',
      category: 'Pricing',
      image: '🎯',
    },
    {
      title: 'Grow my business through organic search and marketing...',
      date: '08 Nov 2024',
      category: 'Pricing',
      image: '📈',
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-primary font-medium mb-2">build everything</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Latest blog & news
              </h2>
            </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center text-primary font-medium hover:gap-2 transition-all duration-200"
          >
            View More
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          </div>
        </AnimateOnScroll>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 aspect-video flex items-center justify-center text-6xl">
                {blog.image}
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {blog.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </p>
              </div>
            </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all duration-200"
          >
            View More
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
