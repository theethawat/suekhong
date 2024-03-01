/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { NavHeader } from '../navbar'

export default function MainLayout({ title, currentPage, rightContainer, children }) {
  const me = useSelector((state) => state.me)
  return (
    <div>
      <div className="min-h-full">
        <NavHeader userData={me} currentPage={currentPage} />

        <main>
          <div className="w-full  mx-12 py-6 md:mx-12  container sm:ml-10 lg:px-8 ">
            <div className="flex  mt-20">
              <div className="w-3/5 lg:w-4/5">
                <h1 className="text-xl  font-display font-semibold text-gray-900">{title}</h1>
              </div>
              <div className="w-1/5">{rightContainer}</div>
            </div>
            <div className="my-2">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  title: PropTypes.string,
  currentPage: PropTypes.string,
  rightContainer: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

MainLayout.defaultProps = {
  title: '',
  currentPage: '',
  rightContainer: <div />,
}
