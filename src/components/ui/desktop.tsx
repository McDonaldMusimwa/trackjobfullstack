import { Link } from '@tanstack/react-router'
import { navlinks } from '@/data/navlinks'

export function DesktopHeader() {
  return (
    <header className='w-40 p-2 h-full fixed inset-y-0 left-0'>
<nav className='flex flex-col justify-center mt-2 ml-2'>
    <h1 className='m-2 text-black text-2xl font-bold'>Trekjob</h1>
        {navlinks.map((link) => {
          return (
            <Link
              to={link.link}
              key={link.id}
              className="w-32 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors mb-2"
              activeProps={{
                className:
                  'flex items-center gap-1 p-1 rounded-lg bg-cyan-400 hover:bg-cyan-200 transition-colors mb-2',
              }}
            >
          <link.icon />
              <span className="font-medium">{link.name}</span>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
