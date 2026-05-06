import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Disclosure & Bug Bounty — Gaokey",
  description: "Gaokey Security Disclosure and Bug Bounty Program. IronClaw Security Standard. Responsible disclosure policy.",
};

export default function SecurityDisclosure() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/gaokey-logo.svg" alt="Gaokey" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Security Disclosure</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">Security Disclosure &amp; Bug Bounty</h1>
        <p className="mb-4 text-sm text-[#5a5a70]">
          Toii Social LLC · <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a> — Subject: [SECURITY] · Last updated: March 31, 2026
        </p>

        {/* IronClaw badge */}
        <div className="mb-10 flex items-start gap-4 rounded-2xl border border-[#e8a020]/25 bg-[#e8a020]/5 p-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" className="mt-0.5 shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10" stroke="#e8a020"/></svg>
          <p className="text-sm leading-relaxed text-[#8e8ea0]">
            <span className="font-semibold text-[#e8a020]">Security is the foundation of Gaokey.</span>{" "}
            Gaokey is a non-custodial EOA mobile wallet. Recovery phrases and private keys are encrypted on-device, signing happens locally after explicit user approval, and Toii Social LLC does not collect, store, transmit, back up, or recover keys or recovery phrases. We build to the IronClaw Security Standard — an internal framework that enforces non-custodial architecture, on-device key management, and zero OTA updates. We take all security reports seriously and commit to responding quickly and transparently.
          </p>
        </div>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed [&_ol]:mt-2 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:text-sm">

          <div>
            <h2>Responsible Disclosure Policy</h2>
            <p>Toii Social LLC operates a responsible disclosure program. We ask that security researchers:</p>
            <ol className="list-decimal">
              <li><strong className="text-[#f0f0f5]">Report privately first.</strong> Do not publish or share vulnerability details publicly before we have had the opportunity to investigate and remediate.</li>
              <li><strong className="text-[#f0f0f5]">Give us reasonable time.</strong> We request a minimum of 90 days to investigate, remediate, and release a fix before public disclosure.</li>
              <li><strong className="text-[#f0f0f5]">Do not exploit vulnerabilities.</strong> Do not access, modify, or exfiltrate user data. Do not use vulnerabilities to perform transactions, access wallets, or disrupt service.</li>
              <li><strong className="text-[#f0f0f5]">Act in good faith.</strong> Comply with all applicable laws. We will not pursue legal action against researchers who follow this policy in good faith.</li>
            </ol>
            <p className="mt-4">In return, we commit to:</p>
            <ul>
              <li>Acknowledging your report within 72 hours</li>
              <li>Providing a status update within 7 business days</li>
              <li>Notifying you when the vulnerability is resolved</li>
              <li>Crediting you publicly (if you choose) upon fix release</li>
            </ul>
          </div>

          <div>
            <h2>How to Report</h2>
            <p>
              Email: <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a><br />
              Subject line: <code className="rounded bg-[#13132a] px-1.5 py-0.5 text-xs text-[#e8a020]">[SECURITY] Brief description</code>
            </p>
            <p className="mt-3">Include in your report:</p>
            <ul>
              <li>Description of the vulnerability</li>
              <li>Steps to reproduce</li>
              <li>Potential impact assessment</li>
              <li>Affected component (iOS / Android / backend / protocol)</li>
              <li>Any proof-of-concept (do not include live exploit code)</li>
            </ul>
          </div>

          <div>
            <h2>Scope</h2>
            <p className="!font-semibold !text-[#f0f0f5] !text-sm mb-2">In Scope</p>
            <div className="overflow-hidden rounded-xl border border-[#252545]">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#252545] bg-[#13132a]"><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Target</th><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Description</th></tr></thead>
                <tbody className="divide-y divide-[#252545] text-[#8e8ea0]">
                  <tr><td className="px-4 py-3 font-medium text-[#f0f0f5]">Gaokey iOS app</td><td className="px-4 py-3">io.gaokey.app — App Store distribution</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-[#f0f0f5]">Gaokey Android app</td><td className="px-4 py-3">io.gaokey.app — Google Play distribution</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-[#f0f0f5]">key.gao.global</td><td className="px-4 py-3">Landing page and legal documents</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-[#f0f0f5]">Recovery phrase &amp; vault</td><td className="px-4 py-3">BIP-39 generation/import, encrypted local vault, biometric/PIN unlock</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-[#f0f0f5]">Key generation &amp; storage</td><td className="px-4 py-3">Secure Enclave / Android Keystore usage</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-[#f0f0f5]">Local signing</td><td className="px-4 py-3">Transaction/message signing flow and approval UI</td></tr>
                </tbody>
              </table>
            </div>

            <p className="!font-semibold !text-[#f0f0f5] !text-sm mt-6 mb-2">Out of Scope</p>
            <ul>
              <li>Third-party services (Expo EAS, Apple, Google)</li>
              <li>Blockchain networks themselves (Ethereum, Base, etc.)</li>
              <li>Social engineering attacks</li>
              <li>Physical device attacks</li>
              <li>Denial of service (DoS/DDoS)</li>
              <li>Reports from automated scanners without proof of concept</li>
              <li>Issues in dependencies outside our control</li>
            </ul>
          </div>

          <div>
            <h2>Bug Bounty Program</h2>
            <div className="mb-4 rounded-xl border border-[#e8a020]/20 bg-[#e8a020]/5 px-4 py-3">
              <p className="text-sm font-semibold text-[#e8a020]">Status: Pre-Mainnet — Bounty program activates at mainnet launch.</p>
            </div>
            <p>Upon mainnet launch, Gaokey will operate a formal bug bounty program. Reward tiers:</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-[#252545]">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#252545] bg-[#13132a]"><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Severity</th><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Description</th><th className="px-4 py-3 text-left font-semibold text-[#f0f0f5]">Reward (USD)</th></tr></thead>
                <tbody className="divide-y divide-[#252545] text-[#8e8ea0]">
                  <tr>
                    <td className="px-4 py-3"><span className="rounded-full bg-red-500/15 px-2 py-0.5 text-xs font-bold text-red-400">Critical</span></td>
                    <td className="px-4 py-3">Remote key extraction, recovery phrase exposure, unauthorized transaction signing</td>
                    <td className="px-4 py-3 font-semibold text-[#f0f0f5]">$5,000 – $20,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="rounded-full bg-orange-500/15 px-2 py-0.5 text-xs font-bold text-orange-400">High</span></td>
                    <td className="px-4 py-3">Authentication bypass, privilege escalation, wallet takeover</td>
                    <td className="px-4 py-3 font-semibold text-[#f0f0f5]">$1,000 – $5,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="rounded-full bg-yellow-500/15 px-2 py-0.5 text-xs font-bold text-yellow-400">Medium</span></td>
                    <td className="px-4 py-3">Data leakage, insecure storage of non-key data, significant logic errors</td>
                    <td className="px-4 py-3 font-semibold text-[#f0f0f5]">$250 – $1,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3"><span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-bold text-blue-400">Low</span></td>
                    <td className="px-4 py-3">Minor information disclosure, UI deception, non-exploitable issues</td>
                    <td className="px-4 py-3 font-semibold text-[#f0f0f5]">$50 – $250</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">Reward amounts are determined by Toii Social LLC at our sole discretion based on severity and exploitability, quality and completeness of the report, and novelty of the finding.</p>
          </div>

          <div>
            <h2>Severity Definitions</h2>
            <div className="space-y-3">
              <div className="rounded-xl border border-[#252545] bg-[#13132a] p-4">
                <div className="mb-1 flex items-center gap-2"><span className="rounded-full bg-red-500/15 px-2.5 py-0.5 text-xs font-bold text-red-400">Critical</span></div>
                <p className="text-sm text-[#8e8ea0]">Vulnerabilities that allow an attacker to extract private keys, recovery phrases, or sign transactions without explicit user authorization. These represent an existential threat to user funds.</p>
              </div>
              <div className="rounded-xl border border-[#252545] bg-[#13132a] p-4">
                <div className="mb-1 flex items-center gap-2"><span className="rounded-full bg-orange-500/15 px-2.5 py-0.5 text-xs font-bold text-orange-400">High</span></div>
                <p className="text-sm text-[#8e8ea0]">Vulnerabilities that allow an attacker to gain unauthorized access to wallet functionality, bypass local vault unlock, or take over a wallet.</p>
              </div>
              <div className="rounded-xl border border-[#252545] bg-[#13132a] p-4">
                <div className="mb-1 flex items-center gap-2"><span className="rounded-full bg-yellow-500/15 px-2.5 py-0.5 text-xs font-bold text-yellow-400">Medium</span></div>
                <p className="text-sm text-[#8e8ea0]">Vulnerabilities that expose non-critical user data, allow information leakage that could facilitate further attacks, or cause significant incorrect application behavior.</p>
              </div>
              <div className="rounded-xl border border-[#252545] bg-[#13132a] p-4">
                <div className="mb-1 flex items-center gap-2"><span className="rounded-full bg-blue-500/15 px-2.5 py-0.5 text-xs font-bold text-blue-400">Low</span></div>
                <p className="text-sm text-[#8e8ea0]">Minor issues that do not directly threaten user security but represent deviations from best practice.</p>
              </div>
            </div>
          </div>

          <div>
            <h2>IronClaw Security Standard</h2>
            <p>Gaokey is built to the IronClaw Security Standard, which defines our minimum security baseline:</p>
            <ul>
              <li><strong className="text-[#f0f0f5]">No OTA updates.</strong> All code updates are delivered through App Store and Google Play only.</li>
              <li><strong className="text-[#f0f0f5]">On-device key storage.</strong> Recovery phrases and private keys are encrypted in a local vault and never leave the device&rsquo;s hardware-backed secure storage.</li>
              <li><strong className="text-[#f0f0f5]">Local signing only.</strong> All signing happens on-device after explicit user approval. Signing credentials are never stored on servers.</li>
              <li><strong className="text-[#f0f0f5]">Biometrics stay on device.</strong> Face ID, Touch ID, and PIN unlock the local vault only and never leave the device.</li>
              <li><strong className="text-[#f0f0f5]">Credential source: remote (EAS).</strong> Build signing credentials are stored encrypted on Expo servers, never committed to repositories.</li>
              <li><strong className="text-[#f0f0f5]">Zero secrets in code.</strong> Automated checks prevent secrets from being committed to any repository.</li>
            </ul>
            <p className="mt-3">IronClaw Security Standard is an internal framework and does not constitute a formal third-party certification.</p>
          </div>

          <div>
            <h2>Known Limitations (Pre-Mainnet)</h2>
            <ul>
              <li><strong className="text-[#f0f0f5]">No independent audit completed.</strong> An external third-party security audit is planned prior to mainnet launch. Audit results will be published publicly.</li>
              <li><strong className="text-[#f0f0f5]">Pre-mainnet software.</strong> Do not use with material funds until audit completion.</li>
            </ul>
          </div>

          <div>
            <h2>Hall of Fame</h2>
            <p>Researchers who responsibly disclose valid security issues will be recognized here upon fix release (with their permission).</p>
            <div className="mt-3 rounded-xl border border-[#252545] bg-[#13132a] px-5 py-4 text-sm text-[#5a5a70] italic">
              No entries yet — be the first.
            </div>
          </div>

          <div>
            <h2>Legal Safe Harbor</h2>
            <p>Toii Social LLC will not pursue civil or criminal action against security researchers who:</p>
            <ul>
              <li>Discover and report vulnerabilities in accordance with this policy</li>
              <li>Act in good faith and do not exploit vulnerabilities beyond proof-of-concept</li>
              <li>Comply with all applicable laws</li>
              <li>Do not access, modify, or retain user data beyond what is necessary to demonstrate the vulnerability</li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <p>
              Security: <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a> — Subject: [SECURITY]<br />
              Support: <a href="mailto:support@gao.global" className="text-[#e8a020] hover:underline">support@gao.global</a><br />
              Legal: <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a><br />
              Privacy: <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a>
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
