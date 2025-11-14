import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AZ Media - Calgary Digital Agency',
  description: 'Privacy policy for AZ Media, a Calgary-based digital agency. Learn how we collect, use, and protect your personal information in compliance with Canadian privacy laws.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-brand-50 border-l-4 border-brand-600 p-6 mb-8 rounded-r-lg">
            <p className="text-slate-700 mb-0">
              AZ Media ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in compliance with Canadian privacy laws including the Personal Information Protection and Electronic Documents Act (PIPEDA).
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Personal Information</h3>
            <p className="text-slate-600 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Request a consultation or quote</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Fill out contact forms on our website</li>
              <li>Engage with our services</li>
              <li>Participate in surveys or promotional activities</li>
            </ul>
            <p className="text-slate-600 mb-6">
              This information may include: name, email address, phone number, company name, job title, mailing address, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Automatically Collected Information</h3>
            <p className="text-slate-600 mb-4">
              When you visit our website, we automatically collect certain information about your device and browsing activity, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Device information (type, operating system)</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Providing, maintaining, and improving our services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Sending you marketing communications and promotional materials (with your consent)</li>
              <li>Analyzing website usage and trends to enhance user experience</li>
              <li>Detecting, preventing, and addressing technical issues or fraudulent activity</li>
              <li>Complying with legal obligations and enforcing our terms</li>
              <li>Developing new products and services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">3. Disclosure of Your Information</h2>
            <p className="text-slate-600 mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Service Providers</h3>
            <p className="text-slate-600 mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Website hosting and maintenance</li>
              <li>Email delivery and marketing platforms</li>
              <li>Analytics providers</li>
              <li>Payment processors</li>
              <li>Customer relationship management (CRM) systems</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Legal Requirements</h3>
            <p className="text-slate-600 mb-6">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, or government regulations).
            </p>

            <h3 className="text-xl font-semibold mb-3 text-slate-800">Business Transfers</h3>
            <p className="text-slate-600 mb-6">
              If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">4. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-slate-600 mb-6">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">5. Your Privacy Rights</h2>
            <p className="text-slate-600 mb-4">
              Under Canadian privacy laws, including PIPEDA, you have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> You can request that we correct or update inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions</li>
              <li><strong>Withdrawal of Consent:</strong> You can withdraw your consent to our processing of your information at any time</li>
              <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us</li>
              <li><strong>Data Portability:</strong> You can request a copy of your personal information in a structured, commonly used format</li>
            </ul>
            <p className="text-slate-600 mb-6">
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">6. Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
            </p>
            <p className="text-slate-600 mb-6">
              Types of cookies we use include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-600 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">7. Data Retention</h2>
            <p className="text-slate-600 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">8. Third-Party Links</h2>
            <p className="text-slate-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">9. Children's Privacy</h2>
            <p className="text-slate-600 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">10. International Data Transfers</h2>
            <p className="text-slate-600 mb-6">
              Your information may be transferred to and processed in countries other than Canada. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable privacy laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">12. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>AZ Media</strong></p>
              <p className="text-slate-600 mb-2">Calgary, Alberta, Canada</p>
              <p className="text-slate-600 mb-2">Email: privacy@azmedia.ca</p>
              <p className="text-slate-600 mb-2">Phone: [Your Phone Number]</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">13. Complaints</h2>
            <p className="text-slate-600 mb-4">
              If you believe your privacy rights have been violated, you have the right to file a complaint with:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-2"><strong>Office of the Privacy Commissioner of Canada</strong></p>
              <p className="text-slate-600 mb-2">30 Victoria Street, Gatineau, Quebec K1A 1H3</p>
              <p className="text-slate-600 mb-2">Toll-free: 1-800-282-1376</p>
              <p className="text-slate-600 mb-2">Website: www.priv.gc.ca</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
