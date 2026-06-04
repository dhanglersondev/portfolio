import logo from '../../assets/images/logo.png'

const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Sobre', href: '#' },
  { name: 'Projetos', href: '#' },
  { name: 'Contato', href: '#' },
]

export function Header() {
  return (
    <header className="fixed flex items-center justify-center top-0 left-0 w-full ">

      <div className="max-w-3xl w-full mx-auto px-6 py-3 flex flex-col md:flex-row md:h-16 md:items-center md:justify-between gap-3 z-50 bg-transparent border-b border-zinc-800">

        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-8 md:h-10 mx-auto md:mx-0 object-contain cursor-pointer"
        />

        {/* Menu */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md lg:text-xl hover:text-blue-400 transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}