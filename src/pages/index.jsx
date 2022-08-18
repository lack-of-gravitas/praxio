import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Praxio - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Web consulting for small to medium enterprises and startups."
        />
      </Head>
      {/* <Header /> */}
      <main>
        <Hero />
        
      </main>
      {/* <Footer /> */}
    </>
  )
}
