import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Gaokey",
  description: "Gaokey Privacy Policy. Non-custodial EOA mobile wallet by Toii Social LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/gaokey-logo.svg" alt="Gaokey" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Privacy Policy</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">Privacy Policy</h1>
        <p className="mb-10 text-sm text-[#5a5a70]">Effective Date: March 31, 2026 · Toii Social LLC · <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a></p>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed">

          <div>
            <h2>1. Overview</h2>
            <p>Gaokey is a non-custodial EOA (externally owned account) mobile wallet. Toii Social LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;Company&rdquo;) does not collect, store, transmit, back up, or recover your private keys or recovery phrase at any time. Users create or import a 12 or 24-word BIP-39 recovery phrase, which is encrypted and stored exclusively on the user&rsquo;s device. Face ID, Touch ID, or PIN unlocks the local vault on that device only — biometrics are not the key, and biometric data never leaves the device.</p>
            <p className="mt-3">This is not a policy choice — it is an architectural one. Gaokey is designed so that recovery phrases and signing keys never leave your device. Every signature is performed locally after explicit user approval.</p>
            <p className="mt-3">The Company does not act as a fiduciary, custodian, exchange, broker-dealer, or financial advisor to any user. The Company does not provide fiat on/off ramps, investment advice, or wallet recovery services. The Company does not own, control, or operate any blockchain network. Users interact with blockchain networks directly and independently.</p>
          </div>

          <div>
            <h2>2. Legal Classification</h2>
            <p>Gaokey is a non-custodial software application. The Company does not:</p>
            <ul>
              <li>Act as a financial institution, bank, depository, or exchange</li>
              <li>Provide custodial wallet or asset management services</li>
              <li>Operate as a money transmitter or money services business (MSB) under FinCEN regulations</li>
              <li>Hold, control, or intermediate user funds at any time</li>
              <li>Execute transactions on behalf of users</li>
              <li>Provide fiat on-ramp or off-ramp services</li>
              <li>Recover wallets, recovery phrases, or private keys</li>
            </ul>
            <p className="mt-3">Users interact directly with blockchain networks. Nothing in this Policy constitutes financial, investment, tax, or legal advice.</p>
          </div>

          <div>
            <h2>3. Information We Collect</h2>
            <h2 className="!text-base !mt-4 !text-[#e8a020]">3.1 Information We DO Collect</h2>
            <p>We collect only the minimum data necessary to maintain app stability:</p>
            <ul>
              <li><strong className="text-[#f0f0f5]">Anonymized crash logs</strong> — generated when the app encounters an unexpected error. These logs do not contain personal identifiers, wallet data, or transaction information.</li>
              <li><strong className="text-[#f0f0f5]">App performance metrics</strong> — response times, screen load performance, and error rates, collected in aggregate and anonymized.</li>
              <li><strong className="text-[#f0f0f5]">Device environment data</strong> — operating system version and device type, used solely to reproduce and fix bugs.</li>
            </ul>
            <h2 className="!text-base !mt-6 !text-[#e8a020]">3.2 Information We DO NOT Collect</h2>
            <p>Gaokey and Toii Social LLC do not collect, store, transmit, back up, or recover:</p>
            <ul>
              <li>Private keys, recovery phrases, seed phrases, or mnemonic phrases</li>
              <li>Wallet addresses or balances</li>
              <li>Transaction history or on-chain activity</li>
              <li>Biometric data (Face ID / Touch ID / fingerprint templates) — biometric data stays on your device</li>
              <li>Device PIN or local vault unlock secrets</li>
              <li>Real name, email address, or phone number</li>
              <li>Government-issued identification</li>
              <li>Location data</li>
            </ul>
            <p className="mt-3">We do not collect or store IP addresses in a manner that can identify individual users.</p>
          </div>

          <div>
            <h2>4. How We Use Information</h2>
            <p>Anonymized crash and performance data is used exclusively to identify and fix software defects, improve application stability, and prioritize engineering resources. We do not use any collected data for advertising, user profiling, behavioral tracking, or monetization. We do not sell, license, rent, or share your data with third parties for commercial purposes.</p>
            <p className="mt-3">Do Not Track: Gaokey does not respond to Do Not Track (DNT) signals because we do not track users.</p>
          </div>

          <div>
            <h2>5. Blockchain Disclosures</h2>
            <ul>
              <li><strong className="text-[#f0f0f5]">Transactions may be irreversible.</strong> Once broadcast to a blockchain network, transactions cannot generally be reversed, cancelled, or modified by the Company or any party.</li>
              <li><strong className="text-[#f0f0f5]">Transactions are publicly visible.</strong> Blockchain transactions are recorded on public ledgers and may be viewed by anyone.</li>
              <li><strong className="text-[#f0f0f5]">We have no recovery capability.</strong> Toii Social LLC cannot recover lost private keys, restore deleted wallets, recover recovery phrases, or reverse unauthorized or mistaken transactions. Users are solely responsible for safeguarding their recovery phrase and for every transaction they approve.</li>
              <li><strong className="text-[#f0f0f5]">Local signing only.</strong> Every signature is performed locally on your device after your explicit approval.</li>
              <li><strong className="text-[#f0f0f5]">Pre-mainnet software.</strong> An independent external security audit is planned prior to mainnet release. Do not use with material funds until audit completion.</li>
            </ul>
          </div>

          <div>
            <h2>6. Data Storage and Security</h2>
            <p>Your recovery phrase and private keys are encrypted and stored in a local vault on your device, protected by your device&rsquo;s hardware-backed secure storage:</p>
            <ul>
              <li><strong className="text-[#f0f0f5]">iOS:</strong> Secure Enclave and Keychain</li>
              <li><strong className="text-[#f0f0f5]">Android:</strong> Android Keystore System</li>
            </ul>
            <p className="mt-3">Face ID, Touch ID, or your device PIN unlocks the local vault on this device only. Biometric templates remain on your device and are never transmitted to the Company. Biometrics are not the key — they only authorize the local app to read the encrypted vault.</p>
            <p className="mt-3"><strong className="text-[#e8a020]">IronClaw Security Standard:</strong> Gaokey is built to the IronClaw Security Standard. OTA updates are disabled — all app updates are delivered exclusively through the Apple App Store and Google Play Store. No credentials are stored on external servers. All cryptographic signing occurs locally on-device after explicit user approval.</p>
          </div>

          <div>
            <h2>7. Third-Party Services</h2>
            <p>Gaokey uses a limited number of third-party services for build infrastructure and distribution. These services do not receive wallet data, private keys, seed phrases, or any cryptographic material.</p>
            <div className="mt-3 overflow-hidden rounded-xl border border-[#252545]">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#252545] bg-[#13132a]"><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Service</th><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Purpose</th></tr></thead>
                <tbody className="divide-y divide-[#252545]">
                  <tr><td className="px-4 py-3">Expo (EAS)</td><td className="px-4 py-3">Build and distribution infrastructure</td></tr>
                  <tr><td className="px-4 py-3">Apple App Store</td><td className="px-4 py-3">iOS distribution</td></tr>
                  <tr><td className="px-4 py-3">Google Play</td><td className="px-4 py-3">Android distribution</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">We do not integrate advertising SDKs, social media trackers, or analytics platforms that collect personally identifiable information.</p>
          </div>

          <div>
            <h2>8. International Users</h2>
            <p>Gaokey is operated by Toii Social LLC, headquartered in the United States. If you access Gaokey from outside the United States, you acknowledge that any limited data we collect may be processed in the United States.</p>
          </div>

          <div>
            <h2>9. Children&rsquo;s Privacy</h2>
            <p>Gaokey is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, contact us at <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a> and we will promptly delete such information. This policy is consistent with COPPA.</p>
          </div>

          <div>
            <h2>10. California Privacy Rights (CCPA / CPRA)</h2>
            <p>If you are a California resident, you have the following rights:</p>
            <ul>
              <li><strong className="text-[#f0f0f5]">Right to Know</strong> — Request information about personal information we have collected about you.</li>
              <li><strong className="text-[#f0f0f5]">Right to Delete</strong> — Request deletion of personal information we have collected.</li>
              <li><strong className="text-[#f0f0f5]">Right to Correct</strong> — Request correction of inaccurate personal information.</li>
              <li><strong className="text-[#f0f0f5]">Right to Opt-Out</strong> — We do not sell or share personal information. There is nothing to opt out of.</li>
              <li><strong className="text-[#f0f0f5]">Right to Non-Discrimination</strong> — We will not discriminate against you for exercising any privacy rights.</li>
            </ul>
            <p className="mt-3">To exercise your rights, contact <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a>. We will respond within 45 days as required by law.</p>
          </div>

          <div>
            <h2>11. No Warranty</h2>
            <p>Gaokey is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. The Company disclaims all liability for loss of funds, loss of access to wallets, unauthorized transactions, software defects, or network downtime. Use of the application is at your own risk.</p>
          </div>

          <div>
            <h2>12. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, TOII SOCIAL LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APP. IN NO EVENT SHALL THE COMPANY&rsquo;S TOTAL LIABILITY EXCEED ONE HUNDRED U.S. DOLLARS ($100.00).</p>
          </div>

          <div>
            <h2>13. Governing Law</h2>
            <p>This Privacy Policy shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
          </div>

          <div>
            <h2>14. Data Retention</h2>
            <p>Anonymized crash logs and performance metrics are retained for a maximum of 90 days, after which they are permanently deleted. Because this data is anonymized, it cannot be attributed to or retrieved on behalf of any specific user.</p>
          </div>

          <div>
            <h2>15. Changes to This Policy</h2>
            <p>We will provide at least 30 days&rsquo; notice before any material changes, delivered via in-app notification or an update to this page with a revised Effective Date. Your continued use of Gaokey after the effective date constitutes acceptance of the changes.</p>
          </div>

          <div>
            <h2>16. Contact</h2>
            <p>
              Toii Social LLC — A Delaware Limited Liability Company<br />
              Support: <a href="mailto:support@gao.global" className="text-[#e8a020] hover:underline">support@gao.global</a><br />
              Privacy inquiries: <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a><br />
              Legal inquiries: <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a><br />
              Security disclosures: <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a> — Subject: [SECURITY]
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#252545] px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 text-sm text-[#5a5a70] sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/gaokey-logo.svg" alt="Gaokey" width={20} height={20} className="rounded" />
          <span>© 2026 Toii Social LLC. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/privacy/" className="hover:text-[#f0f0f5]">Privacy Policy</Link>
          <Link href="/terms/" className="hover:text-[#f0f0f5]">Terms of Service</Link>
          <Link href="/risk/" className="hover:text-[#f0f0f5]">Risk Disclosure</Link>
          <Link href="/security/" className="hover:text-[#f0f0f5]">Security</Link>
          <Link href="/support/" className="hover:text-[#f0f0f5]">Support</Link>
        </div>
      </div>
    </footer>
  );
}
