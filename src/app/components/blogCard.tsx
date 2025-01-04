
import Image from 'next/image'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

type Posts = {
  title: string,
  image: string,
  slug: string
  description: string
}

const BlogCard = ({ posts }: { posts: Posts }) => {
  return (
    <div className='flex flex-col justify-between h-[480px] rounded bg-blend-lighten/90 dark:bg-blend-darken/40 shadow-md shadow-gray-300 ease-out duration-500 w-[500px]'>

      {/* for images */}
      <div className='relative max-h-76 flex-1'>
        <Image src={urlFor(posts.image).url()} alt={posts.title || "Blog Image"} fill/>
      </div>

      {/* Title and description */}
      <div className='flex flex-col justify-between p-4'>
        <h2 className='text-lg font-semibold'>{posts.title}</h2>
        <p>{posts.description}</p>

        <Link href={`/blog/${posts.slug}`}>
        Read More</Link>
      </div>
      
    </div>
  )
}

export default BlogCard