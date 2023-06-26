import dynamic from "next/dynamic"

const HeroBlock = dynamic(() => import('./blocks/hero-block'))
const LatestPostsBlock = dynamic(() => import('./blocks/latest-posts-block'))

export default function Block({ block }) {

  const type = block._type

  switch (type) {
    case 'heroBlock':
      return <HeroBlock block={block} />
    case 'latestPostsBlock':
      return <LatestPostsBlock block={block} />
  }

}