import Button from '@/components/shared/button'
import Image from 'next/image'

export default function HomeHero({ 
  heading,
  paragraph,
  btnText,
  btnDestination
}) {
  return (
    <section className='mt-20 flex flex-col-reverse md:flex-row justify-between'>
      <div className='flex items-start flex-col'>
        <h1 className='-ml-1 md:-ml-2 text-[12vw] font-light leading-none'>
          {heading}
        </h1>
        <p className='max-w-[30rem] mt-10 md:mt-20 mb-12 text-[1.2rem] md:text-2xl font-light'>
          {paragraph}
        </p>
        <Button 
          text={btnText} 
          destination={`${btnDestination}`} 
          variant="dark"
        />
      </div>
      <Image 
        src="/images/headshot-rounded.png"
        width={250}
        height={350}
        alt='Image of Brooke'
        className='w-[10rem] md:w-[14rem] mb-10 md:mb-0 mt-20 md:mt-0 object-contain'
      />
    </section>
  )
}