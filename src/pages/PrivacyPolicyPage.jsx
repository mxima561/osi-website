import { Section, Container } from '../components/Primitives';

export default function PrivacyPolicyPage() {
  return (
    <Section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-3">Privacy Policy</h1>
          <p className="text-sm text-[#6E6E6E] mb-12">Effective Date: June 1, 2026</p>

          <p className="text-[#4A4A4A] leading-relaxed mb-6">OSI Management LLC, doing business as Office Systems Installation ("OSI," "we," "our," or "us"), respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Information We Collect</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A4A4A] mb-6">
            <li><strong>Contact information</strong> — name, email address, phone number, and company name when you submit a quote request or contact form.</li>
            <li><strong>Project details</strong> — information you provide about your furniture project, timeline, or service needs.</li>
            <li><strong>Usage data</strong> — standard web analytics data such as pages visited, time on site, and referral source (via tools like Google Analytics).</li>
          </ul>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">How We Use Your Information</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A4A4A] mb-6">
            <li>Respond to quote requests and inquiries</li>
            <li>Communicate about projects, services, and scheduling</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Cookies and Tracking</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">Our website may use cookies and similar tracking technologies to understand how visitors use our site. You can disable cookies in your browser settings, though some features of the site may not function as intended.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Third-Party Services</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">We use Salesforce to manage quote requests and customer communications. When you submit a form on our site, your information is transmitted to Salesforce in accordance with their privacy practices. We may also use Google Analytics to understand site traffic patterns.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Data Security</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">We take reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or misuse. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Your Rights</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">You may contact us at any time to request access to, correction of, or deletion of personal information we hold about you. We will respond to reasonable requests in a timely manner.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Contact Us</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-2">If you have questions about this Privacy Policy, please contact us:</p>
          <p className="text-[#4A4A4A] leading-relaxed">
            OSI Management LLC<br/>
            135 E Watkins St, Phoenix, AZ 85004<br/>
            <a href="tel:+16022539392" className="text-[#4aa25a] hover:underline">(602) 253-9392</a><br/>
            <a href="mailto:requestaquote@osinstall.com" className="text-[#4aa25a] hover:underline">requestaquote@osinstall.com</a>
          </p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Changes to This Policy</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">We may update this Privacy Policy from time to time. The effective date at the top of this page reflects the most recent revision. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.</p>
        </div>
      </Container>
    </Section>
  );
}
