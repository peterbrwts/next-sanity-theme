import Button from '@/components/shared/button'
import Link from 'next/link'
import Logo from '@/components/shared/logo'

export default function Navbar({ 
  logoText, 
  menuItems, 
  buttonText, 
  buttonLink 
}) {
  return (
    <header className='max-w-7xl mx-auto my-0 py-8 px-6 md:px-12 flex items-center justify-between border-b'>
      <Logo text={logoText} />
      <nav>
        <ul className='hidden md:flex gap-12 items-center list-none'>
          {menuItems.map(item => (
            <li>
              <Link 
                href={`${item.link}`}
                className='text-lg tracking-wider'
              >
                {item.title}
              </Link>
           </li>
          ))}
          <Button text={buttonText} destination={`${buttonLink}`} />
        </ul>
      </nav>
    </header>
  )
}