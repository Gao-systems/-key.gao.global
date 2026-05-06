import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Gaokey",
  description: "Gaokey support. Non-custodial EOA mobile wallet. We cannot recover wallets, recovery phrases, or reverse transactions.",
};

export default function Support() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[#252545] bg-[#0d0d1a]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/gaokey-logo.svg" alt="Gaokey" width={28} height={28} className="rounded-lg" />
            <span className="text-sm font-semibold text-[#f0f0f5]">Gaokey</span>
          </Link>
          <span className="text-xs text-[#5a5a70]">Support</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#f0f0f5]">Support</h1>
        <p className="mb-10 text-sm text-[#5a5a70]">
          Toii Social LLC · <a href="mailto:support@gao.global" className="text-[#e8a020] hover:underline">support@gao.global</a>
        </p>

        <div className="mb-10 rounded-2xl border border-[#e8a020]/25 bg-[#e8a020]/5 p-5">
          <p className="text-sm leading-relaxed text-[#8e8ea0]">
            <span className="font-semibold text-[#e8a020]">Read this first. </span>
            Gaokey is a non-custodial EOA mobile wallet. Toii Social LLC does not collect, store, transmit, back up, or recover your private keys or recovery phrase. We cannot recover wallets, recover lost recovery phrases, or reverse blockchain transactions. Biometric data (Face ID / Touch ID) stays on your device — biometrics are not the key.
          </p>
        </div>

        <div className="space-y-10 text-[#8e8ea0] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-[#f0f0f5] [&_p]:text-sm [&_p]:leading-relaxed [&_ul]:mt-2 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:text-sm [&_li]:list-disc [&_li]:leading-relaxed">

          <div>
            <h2>Contact channels</h2>
            <ul>
              <li><strong className="text-[#f0f0f5]">General support:</strong> <a href="mailto:support@gao.global" className="text-[#e8a020] hover:underline">support@gao.global</a></li>
              <li><strong className="text-[#f0f0f5]">Privacy:</strong> <a href="mailto:privacy@gao.global" className="text-[#e8a020] hover:underline">privacy@gao.global</a></li>
              <li><strong className="text-[#f0f0f5]">Legal:</strong> <a href="mailto:legal@gao.global" className="text-[#e8a020] hover:underline">legal@gao.global</a></li>
              <li><strong className="text-[#f0f0f5]">Security:</strong> <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a> — Subject: [SECURITY]</li>
            </ul>
            <p className="mt-3">We aim to respond to support requests within 5 business days. We are a small team.</p>
          </div>

          <div>
            <h2>What we cannot do</h2>
            <p>Because Gaokey is non-custodial, certain things are impossible — not as a policy choice, but as a property of the system:</p>
            <ul>
              <li>We cannot recover a lost or forgotten recovery phrase.</li>
              <li>We cannot recover a wallet from a lost or wiped device without your recovery phrase.</li>
              <li>We cannot reset, change, or share your local vault password or PIN.</li>
              <li>We cannot reverse, cancel, or modify a blockchain transaction once you have approved and broadcast it.</li>
              <li>We cannot send or receive funds on your behalf, and we do not provide fiat on/off ramps.</li>
              <li>We do not provide investment, tax, or legal advice.</li>
            </ul>
            <p className="mt-3">If anyone — including someone claiming to represent Gaokey or Toii Social LLC — asks for your recovery phrase, it is a scam. We will <strong className="text-[#f0f0f5]">never</strong> ask for your 12 or 24-word recovery phrase.</p>
          </div>

          <div>
            <h2>What we can help with</h2>
            <ul>
              <li>Bug reports and crash reports in the Gaokey app.</li>
              <li>Questions about how Gaokey works (recovery phrase, encrypted local vault, biometric/PIN unlock, local signing, GaoConnect).</li>
              <li>Account-free general questions about non-custodial EOA wallets and Gao Internet.</li>
              <li>Privacy, legal, or security inquiries (use the dedicated address above).</li>
            </ul>
          </div>

          <div>
            <h2>Common questions</h2>
            <p className="!font-semibold !text-[#f0f0f5]">I lost my recovery phrase. Can you help?</p>
            <p>No. Gaokey/Toii does not collect, store, back up, or recover recovery phrases. Without your recovery phrase, the wallet cannot be restored.</p>

            <p className="!font-semibold !text-[#f0f0f5] mt-4">I sent funds to the wrong address. Can you reverse it?</p>
            <p>No. Blockchain transactions may be irreversible once broadcast. Always verify the recipient address before approving a transaction.</p>

            <p className="!font-semibold !text-[#f0f0f5] mt-4">Does Face ID / Touch ID back up my wallet?</p>
            <p>No. Biometrics and your device PIN unlock the local encrypted vault on this device only. They never leave your device, they do not sync between devices, and they do not back up your recovery phrase. Your recovery phrase is the only backup.</p>

            <p className="!font-semibold !text-[#f0f0f5] mt-4">Should I use Gaokey with material funds today?</p>
            <p>No. Gaokey is pre-mainnet software. An independent external security audit is planned. Do not use with material funds until audit completion.</p>
          </div>

          <div>
            <h2>Reporting a security issue</h2>
            <p>If you believe you have found a security vulnerability, please follow our <Link href="/security/" className="text-[#e8a020] hover:underline">Security Disclosure</Link> policy and email <a href="mailto:security@gao.global" className="text-[#e8a020] hover:underline">security@gao.global</a> with the subject line <code className="rounded bg-[#13132a] px-1.5 py-0.5 text-xs text-[#e8a020]">[SECURITY]</code>.</p>
          </div>

          <div>
            <h2>Legal</h2>
            <p>By using Gaokey you agree to our <Link href="/terms/" className="text-[#e8a020] hover:underline">Terms of Service</Link>, <Link href="/privacy/" className="text-[#e8a020] hover:underline">Privacy Policy</Link>, and <Link href="/risk/" className="text-[#e8a020] hover:underline">Risk Disclosure</Link>.</p>
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
