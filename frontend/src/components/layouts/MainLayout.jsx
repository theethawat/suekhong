/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { NavHeader } from '../navbar'

export default function MainLayout({ title, currentPage, children }) {
  const me = useSelector((state) => state.me)
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <NavHeader userData={me} currentPage={currentPage} />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-display font-bold text-gray-900">{title}</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-2 border-gray-200 rounded-lg h-96 p-4 min-h-screen">{children}</div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}

MainLayout.propTypes = {
  title: PropTypes.string,
  currentPage: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

MainLayout.defaultProps = {
  title: '',
  currentPage: '',
}
