import { Section, Container } from '../components/Primitives';

export default function TermsOfUsePage() {
  return (
    <Section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-3">Terms of Use</h1>
          <p className="text-sm text-[#6E6E6E] mb-12">Effective Date: June 1, 2026</p>

          <p className="text-[#4A4A4A] leading-relaxed mb-6">By accessing and using the OSI website at osinstall.com (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Use of the Site</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-4">You may use this Site for lawful purposes only. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#4A4A4A] mb-6">
            <li>Use the Site in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
            <li>Transmit any harmful, offensive, or disruptive content through the Site</li>
            <li>Use automated tools to scrape or harvest data from the Site without permission</li>
          </ul>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Intellectual Property</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">All content on this Site — including text, graphics, logos, images, and design — is the property of OSI Management LLC and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Disclaimer of Warranties</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">This Site is provided "as is" without warranties of any kind, express or implied. OSI does not warrant that the Site will be uninterrupted, error-free, or free of harmful components. We reserve the right to modify, suspend, or discontinue any aspect of the Site at any time without notice.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">To the fullest extent permitted by law, OSI Management LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of or inability to use this Site, even if we have been advised of the possibility of such damages.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Links to Third-Party Sites</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">Our Site may contain links to third-party websites. These links are provided for your convenience only. OSI does not endorse, control, or assume responsibility for the content or practices of any linked sites.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Governing Law</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">These Terms of Use shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions. Any disputes arising from your use of the Site shall be subject to the exclusive jurisdiction of the courts located in Maricopa County, Arizona.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Changes to These Terms</h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">We may revise these Terms of Use at any time by updating this page. Your continued use of the Site after any changes constitutes your acceptance of the revised terms.</p>

          <h2 className="font-display font-bold text-2xl tracking-tight text-[#1A1A1A] mt-10 mb-4">Contact</h2>
          <p className="text-[#4A4A4A] leading-relaxed">
            OSI Management LLC<br/>
            135 E Watkins St, Phoenix, AZ 85004<br/>
            <a href="tel:+16022539392" className="text-[#4aa25a] hover:underline">(602) 253-9392</a><br/>
            <a href="mailto:requestaquote@osinstall.com" className="text-[#4aa25a] hover:underline">requestaquote@osinstall.com</a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
