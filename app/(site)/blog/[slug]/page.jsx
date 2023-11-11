import { getPostBySlug } from '@/sanity/utils'

// components
import PostHeader from '@/components/pages/blog/post-header';
import PostAuthor from '@/components/pages/blog/post-author';
import Block from '@/components/post-builder/block';

export const dynamic = 'force-dynamic'

export default async function PostPage({ params }) {

  const post = await getPostBySlug(params.slug)

  const { 
    image, 
    category, 
    readTime, 
    title,
    author,
    postBuilder
  } = post

  return (
    <>
      <PostHeader 
        image={image}
        category={category}
        readTime={readTime}
        title={title}
      />
      
      {postBuilder ?
        <>
          {postBuilder?.map(block => (
            <Block key={block._key} block={block} />
          ))} 
        </>
      :
        <>
          <p className='mt-4 mb-12 p-10 rounded-lg bg-white'>
            Nothing to see here. Start adding some blocks in your Sanity Studio!
          </p>
        </>
      }

      <PostAuthor 
        name={author.name}
        description={author.description}
        image={author.image}
      />
    </>
  )
}