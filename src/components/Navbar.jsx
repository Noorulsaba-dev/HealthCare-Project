
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeartPulse, Search, Menu, X } from "lucide-react";

const Navbar = ({ onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Doctors", href: "/#doctors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleSectionClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    const sectionId = href.split("#")[1];

    const scrollToSection = () => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    };

    if (window.location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToSection, 300);
    } else {
      scrollToSection();
    }
  };

  const handleLoginClick = () => {
    setMenuOpen(false);
    onLoginClick?.();
  };

  const renderNavLinks = (mobile = false) =>
    navLinks.map((link, index) => {
      const className = mobile
        ? `rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-sky-50 hover:text-sky-600 ${
            index === 0 ? "bg-sky-50 text-sky-600" : "text-slate-700"
          }`
        : `relative py-2 text-sm font-medium transition-colors duration-200 hover:text-sky-600 ${
            index === 0
              ? "text-sky-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-sky-600"
              : "text-slate-700"
          }`;

      if (link.name === "About") {
        return (
          <Link
            key={link.name}
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={className}
          >
            About
          </Link>
        );
      }

      return (
        <a
          key={link.name}
          href={link.href}
          onClick={(event) => handleSectionClick(event, link.href)}
          className={className}
        >
          {link.name}
        </a>
      );
    });

  const handleAppointmentClick = (event) => {
    handleSectionClick(event, "/#appointment");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500 to-cyan-600 text-white shadow-md shadow-sky-100">
            <HeartPulse size={29} strokeWidth={2.2} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              HealthCare<span className="text-sky-600">+</span>
            </h1>
            <p className="text-[10px] font-medium tracking-wide text-slate-500 sm:text-xs">
              Better Health. Brighter Tomorrow.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {renderNavLinks()}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-3 text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
          >
            <Search size={20} />
          </button>

          <button
            type="button"
            onClick={handleLoginClick}
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-600 hover:text-sky-600"
          >
            Login
          </button>

          <a
            href="/#appointment"
            onClick={handleAppointmentClick}
            className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-100 transition hover:bg-sky-700"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-800 transition hover:bg-sky-50 lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {renderNavLinks(true)}

            <button
              type="button"
              aria-label="Search"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600"
            >
              <Search size={18} />
              Search
            </button>

            <button
              type="button"
              onClick={handleLoginClick}
              className="mt-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600"
            >
              Login / Sign Up
            </button>

            <a
              href="/#appointment"
              onClick={handleAppointmentClick}
              className="mt-2 rounded-xl bg-sky-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-sky-700"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
