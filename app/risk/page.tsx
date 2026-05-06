import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure — Gaokey",
  description: "Gaokey Risk Disclosure. Understand the risks of using a non-custodial EOA mobile wallet.",
};

export default function RiskDisclosure() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/gaokey-logo.svg" alt="Gaokey" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Risk Disclosure</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">Risk Disclosure</h1>
        <p className="mb-4 text-sm text-[#5a5a70]">Effective Date: March 31, 2026 · Toii Social LLC · <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a></p>

        <div className="mb-10 rounded-2xl border border-[#e8a020]/25 bg-[#e8a020]/5 p-5">
          <p className="text-sm leading-relaxed text-[#8e8ea0]">
            <span className="font-semibold text-[#e8a020]">Important: </span>
            This Risk Disclosure is an integral part of the Gaokey <Link href="/terms/" className="text-[#e8a020] hover:underline">Terms of Service</Link>. By using Gaokey, you acknowledge that you have read, understood, and accepted all risks described herein.
          </p>
        </div>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed">

          <div>
            <h2>1. General Risk Statement</h2>
            <p>Blockchain technology and cryptographic assets involve substantial risks. These risks can result in the permanent, total, and irreversible loss of your assets. You should not use Gaokey unless you fully understand and accept these risks.</p>
            <p className="mt-3">Toii Social LLC is a software company. We are not a financial institution, exchange, investment advisor, broker-dealer, or fiduciary. We do not provide fiat on/off ramps, wallet recovery, or investment, tax, or legal advice. Nothing in Gaokey or its documentation constitutes financial, investment, tax, or legal advice.</p>
          </div>

          <div>
            <h2>2. Non-Custodial Risk</h2>
            <p>Gaokey is a non-custodial EOA mobile wallet. This means:</p>
            <ul>
              <li><strong className="text-[#f0f0f5]">You are solely responsible for your recovery phrase and private keys.</strong> If you lose your recovery phrase, your wallet and all associated assets are permanently and irrecoverably lost. There is no account recovery, no password reset, and no customer support escalation that can restore access.</li>
              <li><strong className="text-[#f0f0f5]">Toii Social LLC cannot help you recover a lost wallet.</strong> Gaokey/Toii does not collect, store, transmit, back up, or recover private keys or recovery phrases. This is not a limitation of our support capacity — it is a fundamental property of non-custodial cryptographic systems.</li>
              <li><strong className="text-[#f0f0f5]">You are responsible for every transaction you approve.</strong> Gaokey signs locally on your device only after your explicit approval. Toii Social LLC cannot reverse, cancel, or modify any signed or broadcast transaction.</li>
              <li><strong className="text-[#f0f0f5]">Backup is your responsibility.</strong> You must securely back up your 12 or 24-word BIP-39 recovery phrase offline and in a location only you can access. Failure to do so creates a single point of failure.</li>
            </ul>
          </div>

          <div>
            <h2>3. Transaction Risk</h2>
            <ul>
              <li><strong className="text-[#f0f0f5]">Transactions may be irreversible.</strong> Once a transaction is broadcast to a blockchain network, it generally cannot be reversed, cancelled, or modified by any party, including Toii Social LLC.</li>
              <li><strong className="text-[#f0f0f5]">Sending to the wrong address is permanent.</strong> Cryptocurrency sent to an incorrect address is unrecoverable. Always verify recipient addresses before confirming any transaction.</li>
              <li><strong className="text-[#f0f0f5]">Network fees are non-refundable.</strong> Gas fees are paid to the network, not to Toii Social LLC, and are non-refundable regardless of transaction outcome.</li>
              <li><strong className="text-[#f0f0f5]">Smart contract risk.</strong> Interactions with smart contracts carry additional risk including contract bugs, exploits, and unexpected behavior. Toii Social LLC does not audit or endorse any smart contract.</li>
            </ul>
          </div>

          <div>
            <h2>4. Pre-Mainnet Software Risk</h2>
            <p>Gaokey is currently pre-mainnet software:</p>
            <ul>
              <li>The application has not been independently audited by a third-party security firm at the time of this disclosure.</li>
              <li>Software bugs, logic errors, or cryptographic vulnerabilities may exist and may not yet be known.</li>
              <li>Do not use Gaokey with material funds or assets of material value until an independent security audit has been completed and results published.</li>
              <li>Use on testnets and with test assets only.</li>
            </ul>
            <p className="mt-3">An external security audit is planned prior to mainnet release. Audit completion and results will be announced publicly.</p>
          </div>

          <div>
            <h2>5. Key Management Risk</h2>
            <ul>
              <li><strong className="text-[#f0f0f5]">Device loss.</strong> If you lose your device without a backup of your recovery phrase, your wallet is permanently lost.</li>
              <li><strong className="text-[#f0f0f5]">Device compromise.</strong> If your device is compromised by malware, a bad actor with physical access, or a zero-day exploit, your keys may be at risk. Gaokey stores your recovery phrase and keys in an encrypted local vault protected by device-native secure storage (Secure Enclave on iOS, Android Keystore on Android), which provides strong but not unconditional protection.</li>
              <li><strong className="text-[#f0f0f5]">Biometrics are not the key.</strong> Face ID, Touch ID, and device PIN unlock the local encrypted vault on your device only. They do not back up your recovery phrase, do not sync between devices, and do not give Toii Social LLC any ability to recover your wallet.</li>
              <li><strong className="text-[#f0f0f5]">Recovery phrase risk.</strong> Anyone who obtains your 12 or 24-word BIP-39 recovery phrase can take full control of your wallet. Never share, photograph, type into a website, or store your recovery phrase in cloud storage.</li>
            </ul>
          </div>

          <div>
            <h2>6. Blockchain Network Risk</h2>
            <ul>
              <li><strong className="text-[#f0f0f5]">Network outages.</strong> Blockchain networks may experience downtime, forks, or congestion that delays or prevents transactions.</li>
              <li><strong className="text-[#f0f0f5]">Protocol changes.</strong> Blockchain protocols are subject to change (hard forks, upgrades). These changes may affect the functionality of Gaokey or the assets held in your wallet.</li>
              <li>The Company does not own, control, or operate any blockchain network. We are not responsible for the availability, performance, or continuity of any blockchain network.</li>
            </ul>
          </div>

          <div>
            <h2>7. Regulatory Risk</h2>
            <ul>
              <li>Cryptocurrency regulation is rapidly evolving. Laws governing the use, ownership, and transfer of cryptographic assets vary significantly by jurisdiction and are subject to change.</li>
              <li>Regulatory changes may affect your ability to use Gaokey or access your assets in certain jurisdictions.</li>
              <li>It is your responsibility to understand and comply with all applicable laws and regulations in your jurisdiction.</li>
              <li>Gaokey is not available to users located in jurisdictions subject to comprehensive U.S. government sanctions.</li>
            </ul>
          </div>

          <div>
            <h2>8. Market and Volatility Risk</h2>
            <ul>
              <li>The value of cryptographic assets is highly volatile and may decrease substantially or go to zero.</li>
              <li>Past performance of any cryptographic asset is not indicative of future results.</li>
              <li>Toii Social LLC makes no representations regarding the value, stability, or future performance of any asset.</li>
            </ul>
          </div>

          <div>
            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Toii Social LLC shall not be liable for any loss, damage, or claim arising from any risk described in this disclosure. Your use of Gaokey constitutes your unconditional acceptance of all risks described herein.</p>
          </div>

          <div>
            <h2>10. Updates to This Disclosure</h2>
            <p>This Risk Disclosure may be updated as the product evolves. Material updates will be communicated via in-app notification or an update to this page with a revised Effective Date.</p>
          </div>

          <div>
            <h2>Contact</h2>
            <p>
              Toii Social LLC — A Delaware Limited Liability Company<br />
              Support: <a href="mailto:support@gao.global" className="text-[#e8a020] hover:underline">support@gao.global</a><br />
              Legal: <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a><br />
              Privacy: <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a><br />
              Security: <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a>
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
