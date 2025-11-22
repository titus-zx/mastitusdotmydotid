'use client'

import AnimateOnScroll from './AnimateOnScroll'

export default function About() {
  const skills = [
    { name: 'UX Research and Testing', percentage: 95 },
    { name: 'Product Management', percentage: 84 },
    { name: 'UI & Visual Design', percentage: 90 },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Illustration */}
          <AnimateOnScroll animation="fade-right">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 shadow-2xl">
                  <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Work Progress</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Content */}
          <AnimateOnScroll animation="fade-left" delay={200}>
            <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">build everything</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Build amazing websites and landing pages with ease
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className="space-y-6 pt-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-block text-primary font-medium hover:underline"
              >
                our services →
              </a>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
