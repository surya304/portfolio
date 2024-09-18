import { Container } from './Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">
          {title}
        </h1>
        <p className="mt-6 text-base text-white ">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}