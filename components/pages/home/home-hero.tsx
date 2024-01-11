import Image from 'next/image'
import Button from '@/components/shared/button'
import Container from '@/components/global/container'

interface HomeHeroProps {
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
}

export default function HomeHero(props: HomeHeroProps) {

  const { heading, paragraph, image, btnText, btnDestination } = props

  return (
    <section className='mt:0 md:mt-20'>
      <Container classNames="flex flex-col-reverse md:flex-row justify-between">
        <div className='flex items-start flex-col'>
          <h1 className='-ml-1 md:-ml-2 text-[12vw] font-light leading-none'>
            {heading}
          </h1>
          <p className='max-w-[30rem] mt-6 md:mt-8 mb-8 md:mb-12 text-[1.2rem] md:text-2xl font-light'>
            {paragraph}
          </p>
          <Button 
            text={btnText} 
            destination={`${btnDestination}`} 
            variant="dark"
          />
        </div>
        <Image 
          src={image}
          width={250}
          height={350}
          sizes="(max-width: 640px) 100px"
          alt='Image of Brooke'
          className='w-[94px] md:w-[160px] lg:w-[190px] mb-10 md:mb-0 mt-10 md:mt-20 object-contain'
        />
      </Container>
    </section>
  )
}
