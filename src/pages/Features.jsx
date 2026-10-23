
import {
  Stethoscope,
  HeartPulse,
  Smile,
  Baby,
  FlaskConical,
  Brain,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "General Medicine",
    description: "Routine checkups and personalized care for your everyday health.",
    icon: Stethoscope,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Cardiology",
    description: "Expert heart care to help you maintain a healthy heart.",
    icon: HeartPulse,
    color: "bg-rose-100 text-rose-500",
  },
  {
    title: "Dental Care",
    description: "Complete dental services for a healthy and confident smile.",
    icon: Smile,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Pediatrics",
    description: "Gentle, specialized healthcare for babies and children.",
    icon: Baby,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Lab Tests",
    description: "Reliable diagnostic testing with accurate, timely results.",
    icon: FlaskConical,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Mental Health",
    description: "Supportive care focused on emotional and mental well-being.",
    icon: Brain,
    color: "bg-cyan-100 text-cyan-600",
  },
];

const Features = () => {
  return (
    <section
      id="services"
      className="bg-white px-5 py-16 sm:py-20 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Our Medical Services
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Healthcare for Every Need
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            From routine checkups to specialized treatments, we are
            committed to helping you and your family live healthier lives.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-linear-to-br from-slate-50 to-white p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} transition duration-300 group-hover:scale-110`}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>

                <a
                  href="#appointment"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
