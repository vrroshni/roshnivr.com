import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar/Navbar'
import LeftSide from './components/sides/LeftSide'
import RisghtSide from './components/sides/RisghtSide'




export const metadata: Metadata = {
  title: 'Roshni V R',
  description: 'Python full stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className='w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll' >
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <LeftSide />
          <div className="h-[88vh]  mx-auto p-4">
            {children}
          </div>
          <RisghtSide />
        </div>
      </body>
    </html>
  )
}
