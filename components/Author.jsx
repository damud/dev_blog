import React from 'react'
import Image from 'next/image'

const Author = ({ post }) => (
  <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        alt={post.author.name}
        unoptimized
        height="100px"
        width="100px"
        className="rounded-full align-middle"
        src={post.author.photo.url}
      />
    </div>
    <h3 className="my-4 text-xl font-bold text-white">{post.author.name}</h3>
    <p className="text-lg text-white">{post.author.bio}</p>
  </div>
)

export default Author
