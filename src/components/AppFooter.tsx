import React from 'react'

export default function AppFooter() {
  return (
    <div className='bg-black  w-full flex items-center justify-center'>
    <div className="pb-40 pt-24 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 px-4 sm:static sm:px-6 lg:px-8  flex flex-col items-start sm:items-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
            dolore.
          </p>
          <form className="mt-6 flex flex-wrap gap-y-5 md:justify-center  max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-11 sm:min-w-80 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-2 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </form>
        </div>


        
  </div>
  )
}
