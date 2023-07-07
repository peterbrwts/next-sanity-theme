import { getPageBySlug } from '@/sanity/utils'

// components
import Block from '@/components/page-builder/block'
import Layout from '@/components/global/layout'

export default function Page({ page }) {

  const { 
    pageBuilder, 
    metaTitle, 
    metaDescription, 
    metaKeywords 
  } = page

  return (
    <Layout
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    >
      {pageBuilder ?
        <>
          {pageBuilder?.map(block => (
            <Block key={block._key} block={block} />
          ))} 
        </>
      :
        <>
          <p className='mt-4 mb-12 p-10 rounded-lg bg-white'>
            Nothing to see here. Start adding some blocks to this page in your Sanity Studio!
          </p>
        </>
      }
    </Layout>
  )
}

export async function getServerSideProps(context) {

  const { slug } = context.params
  const page = await getPageBySlug(slug)

  return {
    props: {
      page: page
    }
  }

}