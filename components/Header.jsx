import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import Image from 'next/image'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="font-bold-4xl cursor-pointer text-white">
              <Image
                alt="CMS Blog"
                unoptimized
                height="72px"
                width="200px"
                className="align-left rounded-full"
                src="https://media.graphassets.com/d04YkUV6SnytE9GIO9D3"
              />
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents"></div>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
