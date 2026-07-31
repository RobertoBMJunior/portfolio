import { AboutMe } from '@/components/AboutMe'
import { CTA } from '@/components/CTA'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'
import { Technologies } from '@/components/Technologies'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Services />
      {/* <Technologies /> */}
      <CTA />
    </div>
  )
}
