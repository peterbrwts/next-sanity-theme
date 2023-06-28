import Image from 'next/image'
import Link from 'next/link'
import Tag from './tag'

export default function BlogCard({ post }) {
  return (
    <article>
      <Link 
        href={`blog/${post.slug}`} 
        className='flex flex-col items-start pb-8 border-b border-black cursor-pointer group'
      >
        <Image 
          src={post.image}
          width={1200}
          height={600}
          className='bg-black rounded-lg group-hover:scale-[1.01] transition'
        />
        <div className='mt-5 flex items-center'>
          <Tag text={post.category.title} />
          <div className='ml-3 text-gray-500 font-light tracking-wide'>
            {post.readTime} Minute Read
          </div>
        </div>
        <div className='mt-3 flex items-end justify-between'>
          <h4 className='text-[4.8vw] md:text-[2.8vw] lg:text-[2.8vw]  pr-12 font-normal '>
            {post.title}
          </h4>
          <Image
            src="/images/link-icon.png"
            width={30}
            height={30}
            className='invert-[100%] transition group-hover:rotate-90 w-6'
          />
        </div>
      </Link>
    </article>
  )
}
