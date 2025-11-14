import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AZ Media - Calgary Digital Agency',
  description: 'Terms of service for AZ Media, a Calgary-based digital agency. Review our service terms, conditions, and guidelines for using our digital marketing and web development services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-8 rounded-r-lg">
            <p className="text-slate-700 mb-0">
              Welcome to AZ Media. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-6">
              By accessing or using AZ Media's website (the "Site") and services (the "Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and AZ Media, operating in Calgary, Alberta, Canada.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">2. Services Description</h2>
            <p className="text-slate-600 mb-4">
              AZ Media provides digital marketing, web development, branding, and related services to businesses. Our Services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Website design and development</li>
              <li>Digital marketing and advertising campaigns</li>
              <li>Brand identity and graphic design</li>
              <li>Social media management and marketing</li>
              <li>Search engine optimization (SEO)</li>
              <li>Content creation and strategy</li>
              <li>E-commerce solutions</li>
              <li>Consulting and strategy services</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Specific service details, deliverables, timelines, and pricing will be outlined in individual service agreements or proposals.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">3. User Eligibility</h2>
            <p className="text-slate-600 mb-6">
              You must be at least 18 years of age or the age of majority in your jurisdiction to use our Services. By using our Services, you represent and warrant that you meet this eligibility requirement and have the authority to enter into these Terms on behalf of yourself or your organization.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Service Agreements and Proposals</h2>
            <p className="text-slate-600 mb-4">
              When you engage our Services, we will provide you with a detailed proposal or service agreement that includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Scope of work and deliverables</li>
              <li>Project timelines and milestones</li>
              <li>Pricing and payment terms</li>
              <li>Responsibilities of both parties</li>
              <li>Specific terms related to the project</li>
            </ul>
            <p className="text-slate-600 mb-6">
              In the event of any conflict between these Terms and a specific service agreement, the service agreement will take precedence.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Payment Terms</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Fees and Pricing</h3>
            <p className="text-slate-600 mb-4">
              All fees are quoted in Canadian Dollars (CAD) unless otherwise specified. Pricing is subject to change with prior notice, but will not affect projects with signed agreements.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Payment Schedule</h3>
            <p className="text-slate-600 mb-4">
              Payment terms will be specified in your service agreement. Common payment structures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Initial deposit upon project commencement (typically 30-50%)</li>
              <li>Milestone payments at specified project stages</li>
              <li>Final payment upon project completion</li>
              <li>Monthly retainer fees for ongoing services</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Late Payments</h3>
            <p className="text-slate-600 mb-4">
              Invoices are due within the timeframe specified in your agreement (typically 15-30 days). Late payments may incur:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Interest charges at a rate of 1.5% per month (18% per annum) or the maximum rate permitted by law</li>
              <li>Suspension of services until payment is received</li>
              <li>Collection costs and legal fees</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Taxes</h3>
            <p className="text-slate-600 mb-6">
              All fees are exclusive of applicable federal and provincial taxes (GST/HST/PST). Taxes will be added to invoices as required by Canadian tax law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">6. Client Responsibilities</h2>
            <p className="text-slate-600 mb-4">
              To ensure successful project completion, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Provide timely feedback, approvals, and necessary information</li>
              <li>Supply required content, images, and materials in appropriate formats</li>
              <li>Grant necessary access to accounts, platforms, and systems</li>
              <li>Respond to communications within reasonable timeframes</li>
              <li>Ensure all provided materials do not infringe on third-party rights</li>
              <li>Maintain appropriate licenses for any software or tools we implement</li>
            </ul>
            <p className="text-slate-600 mb-6">
              Delays caused by client non-responsiveness or failure to provide required materials may result in timeline extensions and potential additional fees.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Client-Owned Materials</h3>
            <p className="text-slate-600 mb-4">
              You retain ownership of all materials, content, and information you provide to us.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Work Product</h3>
            <p className="text-slate-600 mb-4">
              Upon full payment, you will own the final deliverables specifically created for you as part of our services. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Custom website designs and code</li>
              <li>Original logos and brand assets</li>
              <li>Custom graphics and creative materials</li>
              <li>Content written specifically for your project</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">AZ Media Property</h3>
            <p className="text-slate-600 mb-4">
              AZ Media retains ownership of:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Pre-existing intellectual property, tools, and methodologies</li>
              <li>Templates, frameworks, and code libraries</li>
              <li>Design concepts not selected or implemented</li>
              <li>Draft work and preliminary materials</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Third-Party Materials</h3>
            <p className="text-slate-600 mb-6">
              Any third-party materials (stock photos, fonts, plugins, etc.) used in your project are subject to their respective licenses, which you must maintain.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Portfolio Rights</h3>
            <p className="text-slate-600 mb-6">
              We reserve the right to display completed projects in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">8. Confidentiality</h2>
            <p className="text-slate-600 mb-6">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information disclosed during the course of our engagement. This obligation continues for a period of two (2) years following the termination of services, unless otherwise specified in a separate non-disclosure agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">9. Warranties and Disclaimers</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Our Warranties</h3>
            <p className="text-slate-600 mb-4">
              AZ Media warrants that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Services will be performed in a professional and workmanlike manner</li>
              <li>We have the right to provide the services</li>
              <li>Our work will not infringe on third-party intellectual property rights</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Disclaimers</h3>
            <p className="text-slate-600 mb-4">
              Except as expressly stated in these Terms or a service agreement:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Services are provided "as is" without warranties of any kind</li>
              <li>We do not guarantee specific results, rankings, traffic, or revenue</li>
              <li>We are not responsible for third-party platform changes or policies</li>
              <li>Website performance may vary based on hosting, traffic, and other factors beyond our control</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">10. Limitation of Liability</h2>
            <p className="text-slate-600 mb-6">
              To the maximum extent permitted by applicable law, AZ Media's total liability for any claims arising from or related to our services shall not exceed the total amount paid by you for the specific services giving rise to the claim. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, or lost data, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">11. Indemnification</h2>
            <p className="text-slate-600 mb-6">
              You agree to indemnify and hold harmless AZ Media, its employees, contractors, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from: (a) your use of our services; (b) materials or content you provide; (c) your violation of these Terms; or (d) your violation of any third-party rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">12. Project Changes and Scope Creep</h2>
            <p className="text-slate-600 mb-6">
              Changes to the agreed scope of work may be requested through a formal change request process. Additional work outside the original scope will be subject to additional fees and timeline adjustments, which will be communicated and agreed upon before implementation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">13. Termination</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Termination by Client</h3>
            <p className="text-slate-600 mb-4">
              You may terminate services with written notice. In the event of termination:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>You are responsible for payment of all work completed to date</li>
              <li>You may be charged a cancellation fee as specified in your agreement</li>
              <li>Deposits are generally non-refundable</li>
              <li>You will receive deliverables completed up to the termination date upon full payment</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Termination by AZ Media</h3>
            <p className="text-slate-600 mb-4">
              We reserve the right to terminate services if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Payment is not received according to agreed terms</li>
              <li>You breach these Terms or your service agreement</li>
              <li>You engage in abusive, threatening, or inappropriate behavior</li>
              <li>Continued collaboration is not feasible</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">14. Support and Maintenance</h2>
            <p className="text-slate-600 mb-6">
              Unless otherwise specified in your service agreement, our services do not include ongoing support or maintenance after project completion. Post-launch support, website maintenance, hosting, and updates can be arranged through separate agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">15. Force Majeure</h2>
            <p className="text-slate-600 mb-6">
              Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">16. Governing Law and Dispute Resolution</h2>
            <p className="text-slate-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law principles.
            </p>
            <p className="text-slate-600 mb-6">
              Any disputes arising from these Terms or our services shall be resolved through good faith negotiation. If negotiation fails, disputes shall be subject to the exclusive jurisdiction of the courts of Alberta, Canada.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">17. Entire Agreement</h2>
            <p className="text-slate-600 mb-6">
              These Terms, together with any service agreements, proposals, or other documents referenced herein, constitute the entire agreement between you and AZ Media regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">18. Severability</h2>
            <p className="text-slate-600 mb-6">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">19. Modifications to Terms</h2>
            <p className="text-slate-600 mb-6">
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting an updated version on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">20. Contact Information</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions or concerns regarding these Terms, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>AZ Media</strong></p>
              <p className="text-slate-600 mb-2">Calgary, Alberta, Canada</p>
              <p className="text-slate-600 mb-2">Email: info@azmedia.ca</p>
              <p className="text-slate-600 mb-2">Phone: [Your Phone Number]</p>
            </div>
          </section>

          <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mt-10 rounded-r-lg">
            <p className="text-slate-700 font-semibold mb-2">
              Acknowledgment
            </p>
            <p className="text-slate-600 mb-0">
              By using AZ Media's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you have any questions or require clarification on any of these terms, please contact us before engaging our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
