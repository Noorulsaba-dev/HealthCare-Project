
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Bot,
  ArrowRight,
  LogOut,
  HeartPulse,
} from "lucide-react";

const Dashboard = ({ onLogout }) => {
  const items = [
    {
      title: "My Appointments",
      description: "View your appointments and booking details.",
      link: "/my-appointments",
      icon: CalendarDays,
    },
    {
      title: "AI Health Assistant",
      description: "Ask general health-related questions.",
      link: "/ai-assistant",
      icon: Bot,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sky-600">
              <HeartPulse size={25} />
              <span className="font-semibold">HealthCare+</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Patient Dashboard
            </h1>
            <p className="mt-3 text-slate-600">
              Welcome! Manage your healthcare activities in one place.
            </p>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 hover:bg-slate-100"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.link}
                key={item.title}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={29} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-600">
                  Open page
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
