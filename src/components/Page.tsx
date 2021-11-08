import React, { ReactNode, useCallback } from 'react'

type Props = {
  head: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}

const Page: React.FC<Props> = ({children, head, header, footer}) => {
  return (
    <div className="h-screen w-screen text-gray-300">
      {head}
      <div className="min-h-full max-h-full flex flex-col bg-gray-800 relative">
        <header className="flex h-20 items-center space-x-3 container mx-auto ">
          {header}
        </header>
        <main className="container mx-auto flex flex-col flex-1">
          {children}
        </main>
        <footer className="m-t-auto h-20 flex items-center justify-center text-sm">
          {footer}
        </footer>
      </div>
    </div>
  )
}


export default Page;