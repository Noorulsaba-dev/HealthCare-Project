
import { ArrowRight, HeartPulse, ShieldCheck, Star, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-24">

        {/* Left Content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-100/70 px-4 py-2 text-sm font-medium text-sky-800">
            <HeartPulse size={18} className="text-sky-600" />
            Your Health, Our Priority
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Quality Healthcare
            <br />
            for a{" "}
            <span className="text-sky-600">
              Healthier You
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            We provide trusted medical care, experienced doctors
            and modern facilities to keep you and your family
            healthy — always.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Book Appointment
              <ArrowRight size={19} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-sky-500 bg-white px-7 py-4 font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              Explore Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck size={21} className="text-sky-700" />
              <span>Trusted Medical Care</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={21} className="text-sky-700" />
              <span>Expert Doctors</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={21} className="text-sky-700" />
              <span>24/7 Emergency Care</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-cyan-200/50 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-sky-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-4xl border-4 border-white shadow-2xl shadow-sky-100">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85"
              alt="Doctor providing professional healthcare"
              className="h-87.5 w-full object-cover sm:h-112.5 lg:h-130"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-xl sm:bottom-8 sm:-left-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <HeartPulse size={27} />
            </div>

            <div>
              <p className="font-bold text-slate-900">
                Compassionate Care
              </p>
              <p className="mt-1 text-xs text-slate-500">
                For every stage of life
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
