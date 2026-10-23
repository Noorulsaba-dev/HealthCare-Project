
import { CalendarDays, Clock, UserRound } from "lucide-react";

const MyAppointments = () => {
  const appointments = [];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-sky-100 p-3 text-sky-600">
            <CalendarDays size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My Appointments
            </h1>
            <p className="mt-1 text-slate-600">
              Manage your upcoming doctor visits.
            </p>
          </div>
        </div>

        {appointments.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">
            <CalendarDays
              size={45}
              className="mx-auto text-sky-500"
            />
            <h2 className="mt-5 text-xl font-bold text-slate-900">
              No appointments yet
            </h2>
            <p className="mx-auto mt-2 max-w-md text-slate-600">
              Your booked appointments will appear here once booking is
              connected to the backend.
            </p>
            <a
              href="/#appointment"
              className="mt-6 inline-block rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700"
            >
              Book an Appointment
            </a>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h2 className="font-bold text-slate-900">
                  {appointment.doctor}
                </h2>
                <p className="mt-2 flex items-center gap-2 text-slate-600">
                  <UserRound size={17} />
                  {appointment.specialty}
                </p>
                <p className="mt-2 flex items-center gap-2 text-slate-600">
                  <CalendarDays size={17} />
                  {appointment.date}
                </p>
                <p className="mt-2 flex items-center gap-2 text-slate-600">
                  <Clock size={17} />
                  {appointment.time}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyAppointments;
