
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
                H+
              </div>

              <span className="text-2xl font-bold text-white">
                HealthCare<span className="text-blue-400">+</span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Your health, our priority. We are committed to helping
              you find healthcare services and information with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="transition hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-blue-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="transition hover:text-blue-400">
                  Our Doctors
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>General Consultation</li>
              <li>Cardiology</li>
              <li>Dental Care</li>
              <li>Laboratory Testing</li>
              <li>Emergency Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <p className="mb-1 font-medium text-white">Address</p>
                <p className="leading-6 text-slate-400">
                  Hyderabad, Sindh, Pakistan
                </p>
              </li>

              <li>
                <p className="mb-1 font-medium text-white">Phone</p>
                <a
                  href="tel:+923001234567"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  +92 300 1234567
                </a>
              </li>

              <li>
                <p className="mb-1 font-medium text-white">Email</p>
                <a
                  href="mailto:info@healthcare.com"
                  className="break-all text-slate-400 transition hover:text-blue-400"
                >
                  info@healthcare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter-style CTA */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Take Care of Your Health
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Explore our services or contact our team for assistance.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 md:mt-0"
          >
            Contact Us
            <span className="ml-2" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {currentYear} HealthCare+. All rights reserved.
          </p>

          <div className="flex justify-center gap-5">
            <a href="#contact" className="transition hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#contact" className="transition hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
