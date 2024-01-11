import Container from '@/components/global/container'
import CaseStudyCard from '@/components/shared/case-study-card'
import { CaseStudy } from '@/types'

interface CaseStudyArchiveProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudyArchive({ caseStudies }: CaseStudyArchiveProps) {
  return (
    <section className='mt-[40px] md:mt-[60px] mb-6 md:mb-16'>
      <Container classNames="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map(caseStudy => (
          <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
        ))}
      </Container>
    </section>
  )
}
