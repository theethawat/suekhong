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

        <main>
          <div className="max-w-7xl mx-12 py-6 md:mx-12  container sm:ml-10 lg:px-8 ">
            <h1 className="text-xl  font-display font-semibold text-gray-900 mt-20">{title}</h1>
            <div className="my-2">{children}</div>
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
