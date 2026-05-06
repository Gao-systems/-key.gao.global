import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Gaokey",
  description: "Gaokey Terms of Service. Non-custodial EOA mobile wallet by Toii Social LLC.",
};

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/gaokey-logo.svg" alt="Gaokey" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Terms of Service</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">Terms of Service</h1>
        <p className="mb-10 text-sm text-[#5a5a70]">Effective Date: March 31, 2026 · Toii Social LLC · <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a></p>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed">

          <div>
            <h2>1. Agreement to Terms</h2>
            <p>By downloading, installing, or using Gaokey (&ldquo;App&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the App.</p>
            <p className="mt-3">These Terms constitute a legally binding agreement between you (&ldquo;User&rdquo;) and Toii Social LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), a Delaware limited liability company. These Terms incorporate by reference our <Link href="/privacy/" className="text-[#e8a020] hover:underline">Privacy Policy</Link>, <Link href="/risk/" className="text-[#e8a020] hover:underline">Risk Disclosure</Link>, and <Link href="/security/" className="text-[#e8a020] hover:underline">Security Disclosure</Link>.</p>
          </div>

          <div>
            <h2>2. Description of Service</h2>
            <p>Gaokey is a non-custodial EOA (externally owned account) mobile wallet that enables users to:</p>
            <ul>
              <li>Create or import a 12 or 24-word BIP-39 recovery phrase locally on their device</li>
              <li>Store the recovery phrase and derived private keys in an encrypted local vault on the device</li>
              <li>Unlock the local vault using Face ID, Touch ID, or a device PIN (biometrics are not the key — they only authorize local access to the encrypted vault, and biometric data never leaves the device)</li>
              <li>Sign transactions and messages locally on-device after explicit user approval</li>
              <li>Interact with compatible EVM-compatible blockchain networks</li>
              <li>Optionally connect to Gao Internet apps via GaoConnect</li>
            </ul>
            <p className="mt-3">Gaokey is software. It is not a bank, financial institution, broker-dealer, money transmitter, exchange, investment advisor, or custodian. The Company does not hold, custody, manage, or have access to your assets, recovery phrase, or keys at any time. The Company does not provide fiat on-ramp or off-ramp services, investment, tax, or legal advice, or wallet recovery services.</p>
          </div>

          <div>
            <h2>3. No Fiduciary Relationship</h2>
            <p>The Company does not act as a fiduciary, trustee, advisor, or custodian for any user. No fiduciary relationship is created by your use of the App. The Company owes no duty of care with respect to the management, protection, or preservation of your assets, keys, or identity credentials.</p>
          </div>

          <div>
            <h2>4. No Control Over Blockchain Networks</h2>
            <p>The Company does not own, control, operate, or maintain any blockchain network. Transactions broadcast through Gaokey are executed on decentralized networks beyond the Company&rsquo;s control. The Company is not responsible for the availability, performance, security, or continuity of any blockchain network.</p>
          </div>

          <div>
            <h2>5. Eligibility</h2>
            <p>You must be at least 18 years of age to use Gaokey. By using the App, you represent and warrant that:</p>
            <ul>
              <li>You are at least 18 years old</li>
              <li>You have the legal capacity to enter into a binding agreement</li>
              <li>Your use of the App does not violate any applicable law or regulation in your jurisdiction</li>
              <li>You are not located in, incorporated in, or a resident of any jurisdiction subject to comprehensive U.S. government sanctions, including Cuba, Iran, North Korea, Syria, and the Crimea, Donetsk, and Luhansk regions</li>
              <li>You are not listed on any U.S. government sanctions list, including the OFAC SDN list</li>
            </ul>
          </div>

          <div>
            <h2>6. Export Controls and Sanctions Compliance</h2>
            <p>You agree to comply with all applicable U.S. export control laws and regulations, including those administered by the U.S. Department of Commerce (Bureau of Industry and Security) and the U.S. Department of Treasury (Office of Foreign Assets Control). You may not use the App in violation of any export embargo, prohibition, or restriction.</p>
          </div>

          <div>
            <h2>7. Non-Custodial Architecture — Critical Disclosures</h2>
            <p className="!text-[#e8a020] font-semibold">Read this section carefully.</p>
            <h2 className="!text-base !mt-4 !text-[#e8a020]">7.1 You Control Your Keys</h2>
            <p>Gaokey is non-custodial. Your recovery phrase and private keys are generated or imported on your device, encrypted, and stored in a local vault. They are never transmitted to the Company or any third party. This means:</p>
            <ul>
              <li><strong className="text-[#f0f0f5]">We cannot access your wallet.</strong> Gaokey and Toii Social LLC do not collect, store, transmit, back up, or recover your private keys or recovery phrase. The Company has zero access to your keys or funds.</li>
              <li><strong className="text-[#f0f0f5]">We cannot recover your wallet.</strong> If you lose your recovery phrase and access to your device, your wallet is permanently inaccessible. There is no account recovery, no password reset, and no support escalation that can restore access.</li>
              <li><strong className="text-[#f0f0f5]">We cannot reverse transactions.</strong> Blockchain transactions may be irreversible. The Company has no technical ability to reverse, cancel, or modify any transaction once broadcast. You are solely responsible for every transaction you approve.</li>
              <li><strong className="text-[#f0f0f5]">Biometrics are not the key.</strong> Face ID, Touch ID, and device PIN unlock only the local encrypted vault on your device. Biometric data stays on your device and is never sent to the Company.</li>
            </ul>
            <h2 className="!text-base !mt-6 !text-[#e8a020]">7.2 Termination Does Not Affect Keys</h2>
            <p>Termination or suspension of your access to the App does not affect your ability to access blockchain networks using your private keys outside of the App. Your private keys and on-chain assets remain solely under your control.</p>
            <h2 className="!text-base !mt-6 !text-[#e8a020]">7.3 Pre-Mainnet Software</h2>
            <p>Gaokey is currently pre-mainnet software. An independent external security audit is planned prior to mainnet release. Until that audit is completed and results published:</p>
            <ul>
              <li>Do not use Gaokey with material funds</li>
              <li>Do not transfer assets of material value through the App</li>
              <li>Use on testnets only</li>
            </ul>
            <p className="mt-3">By using Gaokey prior to audit completion, you explicitly acknowledge and accept this risk.</p>
          </div>

          <div>
            <h2>8. Third-Party Services and Smart Contracts</h2>
            <p>You may interact with third-party applications, smart contracts, or decentralized protocols through or alongside the App. The Company has no control over and is not responsible for the functionality, security, accuracy, availability, or legality of such third-party services. Any interaction with third-party services is entirely at your own risk. The Company does not audit, endorse, or make any representation regarding any smart contract, decentralized application, or third-party protocol.</p>
          </div>

          <div>
            <h2>9. Regulatory Uncertainty</h2>
            <p>Regulatory frameworks applicable to blockchain technology, cryptographic assets, and decentralized identity systems are evolving and subject to change. The Company makes no representations regarding the legality of your use of the App in any jurisdiction. It is your sole responsibility to determine whether your use of Gaokey complies with all applicable laws and regulations.</p>
          </div>

          <div>
            <h2>10. Prohibited Uses</h2>
            <p>You agree not to use Gaokey to:</p>
            <ul>
              <li>Violate any applicable federal, state, local, or international law or regulation</li>
              <li>Engage in money laundering, terrorist financing, or any activity that violates the Bank Secrecy Act or applicable AML regulations</li>
              <li>Circumvent sanctions administered by OFAC or any applicable sanctions authority</li>
              <li>Transmit any malware, viruses, or malicious code</li>
              <li>Attempt to reverse engineer, decompile, or disassemble any portion of the App</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Use the App in any way that could damage, disable, or impair the Company&rsquo;s infrastructure or reputation</li>
            </ul>
          </div>

          <div>
            <h2>11. Intellectual Property</h2>
            <p>Gaokey, including its source code, design, trademarks, logos, and all associated intellectual property, is owned by Toii Social LLC or its licensors. You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal use in accordance with these Terms.</p>
          </div>

          <div>
            <h2>12. Fees and Transactions</h2>
            <p>Gaokey itself does not charge transaction fees. However, blockchain networks charge gas fees determined by the network and not by the Company. Gas fees are non-refundable, even if a transaction fails. The Company is not responsible for fluctuations in gas fees or network congestion.</p>
          </div>

          <div>
            <h2>13. Disclaimers</h2>
            <p>THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
            <p className="mt-3">BLOCKCHAIN TECHNOLOGY AND CRYPTOGRAPHIC ASSETS ARE INHERENTLY RISKY. PRICES ARE VOLATILE. SMART CONTRACTS MAY CONTAIN BUGS. BY USING GAOKEY, YOU EXPLICITLY ASSUME ALL RISKS ASSOCIATED WITH CRYPTOGRAPHIC ASSET MANAGEMENT, INCLUDING THE TOTAL AND PERMANENT LOSS OF ALL ASSETS.</p>
          </div>

          <div>
            <h2>14. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF FUNDS, LOSS OF PRIVATE KEYS, LOSS OF DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.</p>
            <p className="mt-3">IN NO EVENT SHALL THE COMPANY&rsquo;S TOTAL AGGREGATE LIABILITY TO YOU EXCEED ONE HUNDRED U.S. DOLLARS ($100.00).</p>
          </div>

          <div>
            <h2>15. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, agents, and successors from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys&rsquo; fees, arising out of or in any way connected with: (a) your use of the App; (b) your violation of these Terms; (c) your violation of any applicable law or regulation; or (d) your interaction with any third-party service or smart contract.</p>
          </div>

          <div>
            <h2>16. Force Majeure</h2>
            <p>The Company shall not be liable for any failure or delay in performance resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemic, power outages, blockchain network failures, cyberattacks, government actions, or changes in applicable law.</p>
          </div>

          <div>
            <h2>17. Assignment</h2>
            <p>You may not assign, transfer, or sublicense any of your rights or obligations under these Terms without the prior written consent of the Company. The Company may assign its rights and obligations without restriction, including in connection with a merger, acquisition, or sale of assets.</p>
          </div>

          <div>
            <h2>18. Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.</p>
            <p className="mt-3"><strong className="text-[#f0f0f5]">Jury Trial Waiver:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AND THE COMPANY EACH WAIVE ANY RIGHT TO A TRIAL BY JURY.</p>
            <p className="mt-3"><strong className="text-[#f0f0f5]">Arbitration:</strong> Any dispute shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules. The arbitration shall take place in the State of Delaware.</p>
            <p className="mt-3"><strong className="text-[#f0f0f5]">Class Action Waiver:</strong> YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION AGAINST THE COMPANY.</p>
          </div>

          <div>
            <h2>19. Termination</h2>
            <p>The Company reserves the right to suspend or terminate your access to the App at any time, with or without cause and without notice, without liability to you. Termination does not affect your access to your private keys or on-chain assets (see Section 7.2).</p>
          </div>

          <div>
            <h2>20. Changes to These Terms</h2>
            <p>We will provide at least 30 days&rsquo; notice before any material changes, delivered via in-app notification or an update to this page with a revised Effective Date. Your continued use of the App after the effective date constitutes your acceptance of the revised Terms.</p>
          </div>

          <div>
            <h2>21. Severability</h2>
            <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>
          </div>

          <div>
            <h2>22. Entire Agreement</h2>
            <p>These Terms, together with our <Link href="/privacy/" className="text-[#e8a020] hover:underline">Privacy Policy</Link>, <Link href="/risk/" className="text-[#e8a020] hover:underline">Risk Disclosure</Link>, and <Link href="/security/" className="text-[#e8a020] hover:underline">Security Disclosure</Link>, constitute the entire agreement between you and the Company with respect to Gaokey.</p>
          </div>

          <div>
            <h2>23. Contact</h2>
            <p>
              Toii Social LLC — A Delaware Limited Liability Company<br />
              Support: <a href="mailto:support@gao.global" className="text-[#e8a020] hover:underline">support@gao.global</a><br />
              Legal inquiries: <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a><br />
              Privacy inquiries: <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a><br />
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
