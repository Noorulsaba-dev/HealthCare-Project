
import {
  Star,
  ArrowRight,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    specialty: "Cardiologist",
    experience: "10+ Years Experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Dr. James Wilson",
    specialty: "General Physician",
    experience: "8+ Years Experience",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Dr. Emily Carter",
    specialty: "Pediatrician",
    experience: "7+ Years Experience",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ Years Experience",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=85",
  },
];

const Doctors = () => {
  return (
    <section
      id="doctors"
      className="bg-white px-5 py-16 sm:py-20 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <Stethoscope size={17} />
            Meet Our Specialists
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Expert Doctors
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Our dedicated medical professionals are committed to providing
            compassionate care and helping you achieve better health.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/60"
            >
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden bg-sky-50">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm">
                  <Star
                    size={15}
                    className="fill-amber-400 text-amber-400"
                  />
                  {doctor.rating}
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5">
                <p className="text-sm font-medium text-sky-600">
                  {doctor.specialty}
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {doctor.experience}
                </p>

                <div className="my-5 border-t border-slate-100" />

                <a
                  href="#appointment"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-600 hover:text-white"
                >
                  <CalendarDays size={17} />
                  Book Appointment
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Doctors */}
        <div className="mt-10 text-center">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-6 py-3 font-semibold text-sky-700 transition hover:bg-sky-600 hover:text-white"
          >
            View All Doctors
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Doctors;
