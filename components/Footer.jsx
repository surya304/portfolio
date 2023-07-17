const navigation = [

 
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/surya304/',
    icon: (props) => (
      // <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-5'><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>

    ),
  },
]
export function Footer() {
  return (
    <footer className="bg-white">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-base text-gray-400">&copy; 2023 Sai Surya Kalagani. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
