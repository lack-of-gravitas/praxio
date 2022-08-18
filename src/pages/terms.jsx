import Head from 'next/head'
import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export default function Login() {
  return (
    <>
      <Head>
        <title>Terms - Praxio</title>
      </Head>
      <Header />
      <main>
        <section
          id="introduction"
          aria-label="Introduction"
          className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
        >
          <Container className="text-lg tracking-tight text-slate-700">
            <p className="pb-10 text-4xl font-bold tracking-tight font-display text-slate-900">
              Terms & Conditions
            </p>

            <p className="mt-4 prose">1 Terms & Definitions</p>
            <p className="mt-4 prose">
              <li>
               {` "Customer" means any person or entity, and any associated person
                or entity, who purchases the supply of Services from the
                Supplier as indicated on the cover page for this Proposal;`}
              </li>
              <li>
                {`"Supplier" means Praxio (Praxio Pty Ltd as trustee for Praxio
                Holding Trust, 6 Surrey Street, Ringwood, VIC, 3134);`}
              </li>
              <li>
                {`"Terms and Conditions" means the Terms and Conditions of supply
                set out in this document and any additional Terms and Conditions
                agreed in writing by the Supplier.`}
              </li>
              <li>
               {` "Services" means work performed by the Supplier as agreed in
                contract with the Customer involving: the purchase,
                installation, and configuration of software, the supply of
                consulting Services to the Customer, supplying other Services
                including but not limited to graphic design, web design,
                application development, data conversion, data migration,
                documentation and training.`}
              </li>
              <li>
                {`"Proposal" means this document and accompanying terms and
                conditions outlining the Supplier’s understanding of the
                Customer’s requirements, high level cost estimates for Services,
                and any options, recommendations and assumptions made by the
                Supplier.`}
              </li>
              <li>
               {` "Estimate" means specific fixed price or time & materials cost
                and schedule estimates provided by the Supplier to the Customer
                based on clarified, confirmed & agreed business requirements.`}
              </li>
              <li>
               {` "Agreement" or "Contract" means a legally binding contract
                entered into between the Customer and the Supplier in which the
                Supplier agrees to provide specified Services to the Customer
                and includes:`}
              </li>
              <li>
                Acceptance of this Proposal provided by the Supplier based on
                discussions with the Customer about their requirements.
              </li>
              <li>
                Approval by the Customer to commence work and supply the
                Services.
              </li>
              <li>
                Request for payment for Services in accordance with the Terms
                and Conditions outlined in the Agreement.
              </li>
              <li>
                For the purposes of accepting the Agreement, email confirmation
                will constitute acceptance.
              </li>
            </p>
            <p className="mt-4 prose">2 Preamble</p>
            <p className="mt-4 prose">
              <li>
                These Terms and Conditions shall apply to all Proposals for the
                supply of Services by the Supplier and shall prevail over any
                other documentation or communication from the Customer.
              </li>
              <li>
                Any variation to these Terms and Conditions shall not be
                applicable unless agreed in writing by the Supplier.
              </li>
              <li>
                Acceptance of this Proposal shall convert this Proposal
                including terms & conditions into an Agreement with the
                Customer.
              </li>
            </p>
            <p className="mt-4 prose">3 Proposal Validity Period</p>
            <p className="mt-4 prose">
              This proposal and its contents are valid for a period of 15 days
              from the date of issue. The Customer will be issued with an
              invoice by the Supplier upon acceptance of the Proposal based on
              the invoicing schedule defined in the Proposal.
            </p>
            <p className="mt-4 prose">4 Supplier’s Obligations</p>
            <p className="mt-4 prose">
              <li>
                The Supplier will use commercially reasonable efforts to provide
                Services with reasonable skill and care and to a reasonable
                standard in accordance with recognised industry standards and
                codes of practice.
              </li>
              <li>
                The Supplier shall comply with all statutory requirements –
                particularly in regards to data protection and confidentiality
                of Customer data.
              </li>
              <li>
                The Supplier will provide regular updates via email to the
                Customer once the project or supply of Services has commenced.
              </li>
              <li>
                The Supplier and its representatives shall be contactable via
                email / phone call during standard business hours 9am to 5pm
                AEST / ADST and additionally as agreed with the Customer out of
                business hours.
              </li>
              <li>
                The Supplier will be responsible for the recommendation and
                selection of applications, software, hardware, tools and
                equipment used in providing Services based on Customer provided
                requirements.
              </li>
              <li>
                The Supplier is not responsible for the condition nor fitness of
                purpose for the applications, software, hardware, tools and
                equipment obtained from third-party providers. These come with
                their own terms, conditions and licensing agreements that should
                be reviewed by the Customer.
              </li>
              <li>
                The Supplier will not be responsible for the performance,
                reliability, availability or security of the Internet or any
                third party system.
              </li>
              <li>
                Upon execution of a contract or agreement for supply of Services
                to the Customer, the Supplier will provide an estimated project
                schedule along with details of key milestones, if applicable.
              </li>
              <li>
                While the Supplier will make every endeavour to have the supply
                of Services completed in the estimated timeframe, this cannot be
                guaranteed as the project may be affected by changing Customer
                requirements, technical issues with implementation, and
                circumstances outside the Supplier&apos;s control including force
                majeure scenarios.
              </li>
              <li>
                At the end of a client engagement and at the request of the
                Customer, all sensitive login and access data held by the
                Supplier will be securely destroyed.
              </li>
              <li>
                Where the Supplier ceases to trade, or automatically should no
                Supplier representative be available for a period of at least
                one week, the Supplier shall be liable to provide, at the
                Customer&apos;s request, any and all access and configuration details
                in a reasonable state to the Customer to ensure business
                continuity. In this context being available means responding to
                phone or email requests.
              </li>
              <li>
                Where the Supplier ceases to trade, the Supplier shall be liable
                to securely destroy all Customer sensitive login and access data
                held by the Supplier pertaining to the supply of Services.
              </li>
              <li>
                Where the supplier ceases to trade, all access, applicable
                licences to software developed by the Supplier will be provided
                to the Customer to continue operations & ongoing maintenance of
                supplied software.
              </li>
            </p>
            <p className="mt-4 prose">5 Customer’s Obligations</p>
            <p className="mt-4 prose">
              <li>
                The Customer shall provide the Supplier with any information
                reasonably required by the Supplier to provide Services
                including any content or copy required to be incorporated into
                Services provided.
              </li>
              <li>
                This includes existing logins, server, application details,
                reasonable access to customer controlled systems, usernames,
                passwords, test and production data.
              </li>
              <li>
                The Customer will be responsible for ensuring that they have
                adequate backup copies of data, sites and programs in case of
                issues or problems during implementation.
              </li>
              <li>
                The Customer will test the configuration promptly and either
                report problems to the Supplier in writing, where the
                configuration fails to function as per the specification, or
                communicate their acceptance of the software to the Supplier in
                writing.
              </li>
            </p>
            <p className="mt-4 prose">6 Shared Obligations</p>
            <p className="mt-4 prose">
              <li>
                The Customer and Supplier may, by prior agreement or during the
                course of implementation, choose to vary the selected
                application, software, tools and equipment used in the
                performance of the Services.
              </li>
              <li>
                Any change in the specified scope of Services as agreed in
                contract with the Customer must be mutually agreed upon by all
                parties in writing.
              </li>
              <li>
                The Customer and Supplier will mutually define a process for
                resolution of project issues for the duration of the project.
              </li>
              <li>
                The Customer and Supplier will make timely decisions and provide
                information throughout the execution of this engagement. Delays
                in decisions may impact resources, deliverables, timelines and
                fees associated with the engagement.
              </li>
            </p>
            <p className="mt-4 prose">7 Rights in Work Product</p>
            <p className="mt-4 prose">
              <li>
                Anything resulting from or arising in the course of delivering
                agreed Services shall be deemed Work Product.
              </li>
              <li>
                The Customer shall own all customer data and business specific
                intellectual property and business logic in connection with the
                Services under this SOW.
              </li>
              <li>
                The Supplier will own all rights, title, interest and
                intellectual property rights with respect to the core Work
                Product and all derivatives, enhancements and modifications of
                the Supplier’s or third-party products, all of which are hereby
                retained by it or assigned to it by Customer.
              </li>
              <li>
                All third party applications used to provide Services or host a
                solution for the Customer remain the intellectual property of
                their respective owners.
              </li>
              <li>
                Notwithstanding anything to the contrary in a contract between
                the Supplier and Customer, the Supplier shall not be prohibited
                or enjoined at any time by Customer from utilising any skills
                or knowledge of a general nature acquired during the course of
                performing the Services specified under this contract.
              </li>
              <li>
                Skills or knowledge of a general nature shall include, without
                limitation, information publicly known or that could reasonably
                have been acquired in the conduct of similar work performed for
                another Customer.
              </li>
            </p>
            <p className="mt-4 prose">8 Fee for Service Structure</p>
            <p className="mt-4 prose">
              <li>
                The estimates in this proposal are covered under a fixed fee
                structure for the installation, configuration and deployment of
                the solution and supply of additional nominated services for the
                Customer.
              </li>
              <li>
                Any estimated costs for Services provided in this Proposal is
                based on assumptions and is indicative for further discussion
                with the Customer. It is subject to finalisation of scope,
                requirements, detailed estimate and execution of an Agreement.
                The content and terms of an Agreement supersede information
                provided in this Proposal or Estimate provided to the Customer
                prior to the date of the Agreement.
              </li>
              <li>
                The Customer shall bear the ongoing hosting, software licensing
                and support costs once the implementation is completed.
              </li>
            </p>
            <p className="mt-4 prose">9 Invoicing and Payment</p>
            <p className="mt-4 prose">
              <li>
                The following are general payment terms included in any
                Agreement in contract executed with a Customer. These terms will
                prevail unless explicitly varied by agreement in contract
                between the Supplier and the Customer.
              </li>
              <li>
                All third party costs such as hosting costs and software
                licences are passed through to the Customer in the initial
                invoice. No Supplier margins will be added on these Services.
              </li>
              <li>
                Where the Customer requires the completion of work on a priority
                basis, the Supplier reserves the right to invoice the Customer
                at priority rates the Supplier deems appropriate. Any priority
                rates will be discussed and agreed with the Customer before the
                commencement of any work.
              </li>
              <li>
                The Supplier reserves the right to customise the pricing for
                available Services for each Customer depending on their
                requirements.
              </li>
              <li>
                The Supplier will issue Tax Invoices requesting payment to the
                Customer in accordance with the Invoice Schedule set forth in
                this Proposal.
              </li>
            </p>
            <p className="mt-4 prose">10 Terminations</p>
            <p className="mt-4 prose">
              <li>
                The Customer can request a cancellation of Services and end the
                agreement by giving written notice to the Supplier at any point
                during implementation.
              </li>
              <li>
                If the Customer requests a cancellation before the supply of
                Services has commenced and if the Customer has paid any amounts
                up front, the Supplier shall, at their discretion, offer the
                Customer a 100% refund of any amounts paid to the Supplier minus
                any time and expenses already incurred by the Supplier.
              </li>
              <li>
                Where the Customer requests a cancellation and the supply of
                Services has commenced but not completed and the Customer has
                partly or fully paid for the supply of Services, the Supplier
                shall, at their discretion, offer the Customer a refund of any
                amounts paid on a pro-rata basis minus any time and expenses
                already incurred by the Supplier.
              </li>
              <li>
                Where the Customer requests a cancellation and the supply of
                Services has been completed but not accepted by the Customer and
                the Customer has partly or fully paid for the supply of
                Services, no refund shall be applicable. Any termination costs
                will be as defined in the Agreement between the Customer and
                Supplier.
              </li>
            </p>
            <p className="mt-4 prose">11 Warranty & Support</p>
            <p className="mt-4 prose">
              <li>
                From Customer Acceptance Date, the Supplier will provide
                technical support to correct any defects in the supply of
                Services for a period of one calendar month at no cost to the
                Customer. The following exclusions apply:
              </li>
              <li>
                Changes or additions to functionality outside the agreed
                specifications
              </li>
              <li>problems caused by network or server failures</li>
              <li>
                problems resulting from moving to new technology infrastructure
                (servers, network, hosting providers or software)
              </li>
              <li>
                problems with data, except where the configuration by the
                Supplier is determined to be the root cause
              </li>
              <li>problems outside the Supplier&apos;s control</li>
              <li>training issues with Users</li>
              <li>
                Given the technical nature of issues & problems, the Supplier
                cannot make any guarantees regarding the time to investigate and
                resolve issues, or the timeliness or quality of support. The
                Supplier will endeavour to resolve any problems within a
                reasonable amount of time as determined during the initial
                triage of a specific issue or problem.
              </li>
              <li>
                Where additional scope of Services have been agreed to in the
                Agreement, such amendments or additions will be covered under
                warranty by the clause above. The new warranty period will only
                apply to the amendments or additions, not the whole system.
              </li>
              <li>
                The Supplier shall provide a new proposal for ongoing support
                and maintenance Services to the Customer after the warranty
                period expires. This proposal shall include fees and Services
                details for support, maintenance, fixes and recommended
                enhancements to the solution.
              </li>
              <li>
                The Supplier reserves the right to assess the Customer’s request
                and exclude any work that is deemed as new / enhancements that
                require a new proposal.
              </li>
            </p>
            <p className="mt-4 prose">12 Limitation of Liability</p>
            <p className="mt-4 prose">
              <li>
                The Supplier will not accept any liability for losses incurred
                by the Customer resulting from use of the technical
                infrastructure (servers, applications, software) after the
                configuration has been made.
              </li>
              <li>
                The Supplier shall not be liable for any damages in connection
                with or arising out of the use or misconfiguration of the
                software by any person whatsoever, including incidental,
                indirect, special or consequential damages, or any damages
                related to loss of use, loss of revenue or loss of profits, even
                if the Supplier has been advised of the possibility of such
                damages. The Customer expressly agrees to such a waiver.
              </li>
              <li>
                Any software and associated configuration is provided as is
                without warranties as to performance or merchantability or any
                other warranties whether expressed or implied. Because of the
                various hardware and software environments into which the
                software and configuration may be put, no warranty of fitness
                for a particular purpose is offered.
              </li>
              <li>
                Supplier&apos;s liability will be limited exclusively to replacement
                or refund of the service charge related to providing
                configuration Services.
              </li>
            </p>
            <p className="mt-4 prose">13 Force Majeure</p>
            <p className="mt-4 prose">
              <li>
                Neither party shall be liable for any delay or failure to
                perform any of its obligations if the delay or failure results
                from events or circumstances outside their reasonable control,
                including but not limited to acts of God, strikes, lock outs,
                accidents, war, fire, breakdown of technology, plant or
                machinery.
              </li>
              <li>
                Either party shall be entitled to a reasonable extension of its
                obligations or a negotiated cancellation of any Agreement for
                supply of Services.
              </li>
            </p>
            <p className="mt-4 prose">14 Governing Law</p>
            <p className="mt-4 prose">
              <li>
                These Terms and Conditions shall be governed and interpreted by
                the laws of the State of Victoria, Australia.
              </li>
              <li>
                The Customer expressly agrees that the venue for resolution of
                disputes, if any, arising out of these Terms and Conditions
                shall be in Victoria, Australia.
              </li>
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
