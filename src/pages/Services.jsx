
import {
  Stethoscope,
  HeartPulse,
  Smile,
  Baby,
  FlaskConical,
  Brain,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "General Medicine",
    description:
      "Comprehensive checkups, preventive care, and treatment for common health concerns.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
    icon: Stethoscope,
  },
  {
    title: "Cardiology",
    description:
      "Professional heart health assessments and personalized cardiac care.",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=700&q=80",
    icon: HeartPulse,
  },
  {
    title: "Dental Care",
    description:
      "Keep your smile healthy with dental checkups, cleaning, and oral care.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80",
    icon: Smile,
  },
  {
    title: "Pediatrics",
    description:
      "Thoughtful healthcare and wellness support for infants and children.",
    image:
      "https://plus.unsplash.com/premium_photo-1661694067416-3327f4899f0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: Baby,
  },
  {
    title: "Laboratory Tests",
    description:
      "Diagnostic testing to help healthcare professionals assess your health.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80",
    icon: FlaskConical,
  },
  {
    title: "Mental Wellness",
    description:
      "Supportive consultations focused on emotional well-being and mental health.",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80",
    icon: Brain,
  },
];

const Services = () => {
  return (
    <section
      id="all-services"
      className="bg-slate-50 px-5 py-16 sm:py-20 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              What We Offer
            </span>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Specialized Care for a
              <span className="text-sky-600"> Healthier Life</span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Explore our healthcare services, delivered with compassion,
              modern facilities, and a focus on your well-being.
            </p>
          </div>

          <a
            href="#appointment"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            Book a Visit
            <ArrowUpRight size={19} />
          </a>
        </div>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/70"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-md">
                    <Icon size={25} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-sky-600">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="#appointment"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700"
                  >
                    Learn More
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
