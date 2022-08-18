import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { Introduction } from '@/components/Introduction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'


export default function Login() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Praxio</title>
      </Head>
      <Header />
      <main>
        <section
          id="introduction"
          aria-label="Introduction"
          className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
        >
          <Container className="text-lg tracking-tight text-slate-700">
            <p className="text-4xl font-bold tracking-tight font-display text-slate-900">
              Privacy Policy
            </p>

            <p className="mt-4 prose">
              Praxio (Praxio Pty Ltd as trustee for Praxio
              Holding Trust, 6 Surrey Street, Ringwood, VIC, 3134) is committed
              to providing quality services to you and this policy outlines our
              ongoing obligations to you in respect of how we manage your
              Personal Information. We have adopted the Australian Privacy
              Principles (APPs) contained in the Privacy Act 1988 (Cth) (the
              Privacy Act). The NPPs govern the way in which we collect, use,
              disclose, store, secure and dispose of your Personal Information.
              A copy of the Australian Privacy Principles may be obtained from
              the website of The Office of the Australian Information
              Commissioner at www.aoic.gov.au </p><p className="mt-4 prose">What is  Personal Information
              and why do we collect it? </p><p className="mt-4 prose">Personal Information is information or
              an opinion that identifies an individual. Examples of Personal
              Information we collect include: names, addresses, email addresses,
              phone and facsimile numbers. This Personal Information is obtained
              in many ways including [interviews, correspondence, by telephone
              and facsimile, by email, via our website, from your website, from media and
              publications, from other publicly available sources, from cookies-
              delete all that aren’t applicable] and from third parties. We
              don’t guarantee website links or policy of authorised third
              parties. We collect your Personal Information for the primary
              purpose of providing our services to you, providing information to
              our clients and marketing. We may also use your Personal
              Information for secondary purposes closely related to the primary
              purpose, in circumstances where you would reasonably expect such
              use or disclosure. You may unsubscribe from our mailing/marketing
              lists at any time by contacting us in writing. When we collect
              Personal Information we will, where appropriate and where
              possible, explain to you why we are collecting the information and
              how we plan to use it. </p><p className="mt-4 prose">Sensitive Information </p><p className="mt-4 prose">Sensitive
              information is defined in the Privacy Act to include information
              or opinion about such things as an individuals racial or ethnic
              origin, political opinions, membership of a political association,
              religious or philosophical beliefs, membership of a trade union or
              other professional body, criminal record or health information.
              Sensitive information will be used by us only: <ul>For the primary
              purpose for which it was obtained </ul><ul>For a secondary purpose that
              is directly related to the primary purpose </ul><ul>With your consent; or
              where required or authorised by law.</ul> </p><p className="mt-4 prose">Third Parties </p><p className="mt-4 prose">Where
              reasonable and practicable to do so, we will collect your Personal
              Information only from you. However, in some circumstances we may
              be provided with information by third parties. In such a case we
              will take reasonable steps to ensure that you are made aware of
              the information provided to us by the third party. </p><p className="mt-4 prose">Disclosure
              of Personal Information </p><p className="mt-4 prose">Your Personal Information may be disclosed
              in a number of circumstances including the following: <ul>Third
              parties where you consent to the use or disclosure; and </ul>Where
              required or authorised by law. </p><p className="mt-4 prose"> Security of Personal Information
              </p><p className="mt-4 prose"> Your Personal Information is stored in a manner that reasonably
              protects it from misuse and loss and from unauthorized access,
              modification or disclosure. When your Personal Information is no
              longer needed for the purpose for which it was obtained, we will
              take reasonable steps to destroy or permanently de-identify your
              Personal Information. However, most of the Personal Information is
              or will be stored in client files which will be kept by us for a
              minimum of 7 years. </p><p className="mt-4 prose">Access to your Personal Information</p><p className="mt-4 prose"> You may
              access the Personal Information we hold about you and to update
              and/or correct it, subject to certain exceptions. If you wish to
              access your Personal Information, please contact us in writing.
              Praxio will not charge any fee for your access request, but may
              charge an administrative fee for providing a copy of your Personal
              Information. In order to protect your Personal Information we may
              require identification from you before releasing the requested
              information. </p><p className="mt-4 prose">Maintaining the Quality of your Personal Information</p><p className="mt-4 prose">
              It is an important to us that your Personal Information is up to
              date. We will take reasonable steps to make sure that your
              Personal Information is accurate, complete and up-to-date. If you
              find that the information we have is not up to date or is
              inaccurate, please advise us as soon as practicable so we can
              update our records and ensure we can continue to provide quality
              services to you. </p><p className="mt-4 prose">Policy Updates</p><p className="mt-4 prose"> This Policy may change from
              time to time and is available on our website.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
