
import {
  HeartPulse,
  ShieldCheck,
  Users,
  Target,
  Eye,
  Award,
  Clock,
  Stethoscope,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: HeartPulse,
      title: "Patient First",
      description:
        "We put patients first and focus on providing caring, respectful healthcare experiences.",
    },
    {
      icon: ShieldCheck,
      title: "Trust & Safety",
      description:
        "We believe healthcare should be safe, transparent, and built on trust.",
    },
    {
      icon: Users,
      title: "Care for Everyone",
      description:
        "Our goal is to make healthcare services easier to discover and access.",
    },
  ];

  const stats = [
    { number: "20+", label: "Expert Doctors" },
    { number: "10+", label: "Medical Services" },
    { number: "24/7", label: "Care Support" },
    { number: "100%", label: "Patient Focused" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-sky-50 via-white to-cyan-50 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              <HeartPulse size={17} />
              About HealthCare+
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Health, <span className="text-sky-600">Our Priority.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              HealthCare+ helps people discover healthcare services, learn
              about medical professionals, and take the next step toward
              better health with confidence.
            </p>

            <a
              href="/#appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-700"
            >
              <Stethoscope size={19} />
              Book an Appointment
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-4xl bg-sky-100/70 blur-2xl" />
            <div className="relative rounded-4xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60 sm:p-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-600 text-white">
                <HeartPulse size={44} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-slate-900 sm:text-3xl">
                Better Care. Better Life.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We are building a simpler healthcare experience where finding
                information and connecting with care services feels easier.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-sky-50 p-4">
                <ShieldCheck className="shrink-0 text-sky-600" size={30} />
                <div>
                  <p className="font-semibold text-slate-900">
                    Care You Can Trust
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Designed around your healthcare journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-3xl font-bold text-sky-600">
                {stat.number}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-slate-50 px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Making Healthcare Easier for Everyone
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Finding the right healthcare information can sometimes feel
              complicated. HealthCare+ aims to bring useful healthcare
              information and services together in one convenient place.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our platform is designed to help visitors explore available
              services, learn about doctors, and find ways to contact the
              healthcare team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                <Target size={29} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                To make healthcare information and services easier to access
                through a simple, helpful digital experience.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm sm:mt-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <Eye size={29} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                To help create a future where discovering and navigating
                healthcare is simpler for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              What Matters to Us
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The principles that guide the experience we want to provide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon size={29} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 pb-20 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-4xl bg-sky-600 p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Healthcare Starts with a Better Experience
            </h2>
            <p className="mt-4 leading-7 text-sky-50">
              Explore our services and discover how HealthCare+ can help you
              navigate your healthcare journey.
            </p>
          </div>

          <a
            href="/#services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-sky-700 transition hover:bg-sky-50"
          >
            Explore Services
            <Award size={19} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default About;
