import {
    MapPin,
    Phone,
    Mail,
    Clock,
    HeartPulse,
    Send,
} from "lucide-react";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        e.target.reset();
    };

    return (
        <section id="contact" className="bg-slate-50 px-5 py-20 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-14 text-center">
                    <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        Contact Us
                    </span>

                    <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
                        We're Here to Help You
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Have a question or need assistance? Get in touch with our
                        healthcare team. We are happy to help you.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="rounded-3xl bg-blue-700 p-8 text-white md:p-10">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="rounded-xl bg-white/15 p-3">
                                <HeartPulse size={30} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">HealthCare+</h3>
                                <p className="text-sm text-blue-100">
                                    Your health, our priority
                                </p>
                            </div>
                        </div>

                        <h3 className="mb-3 text-2xl font-bold">
                            Contact Information
                        </h3>

                        <p className="mb-8 leading-7 text-blue-100">
                            Reach out to us for appointments, general questions,
                            or information about our healthcare services.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="mt-1 shrink-0" size={22} />
                                <div>
                                    <h4 className="font-semibold">Our Location</h4>
                                    <p className="mt-1 text-sm text-blue-100">
                                        Hyderabad, Sindh, Pakistan
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="mt-1 shrink-0" size={22} />
                                <div>
                                    <h4 className="font-semibold">Phone Number</h4>
                                    <a
                                        href="tel:+923001234567"
                                        className="mt-1 block text-sm text-blue-100 hover:text-white"
                                    >
                                        +92 300 1234567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="mt-1 shrink-0" size={22} />
                                <div>
                                    <h4 className="font-semibold">Email Address</h4>
                                    <a
                                        href="mailto:info@healthcare.com"
                                        className="mt-1 block break-all text-sm text-blue-100 hover:text-white"
                                    >
                                        info@healthcare.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="mt-1 shrink-0" size={22} />
                                <div>
                                    <h4 className="font-semibold">Working Hours</h4>
                                    <p className="mt-1 text-sm text-blue-100">
                                        Monday – Saturday
                                        <br />
                                        9:00 AM – 8:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 border-t border-white/20 pt-6">
                            <p className="mb-4 font-semibold">Connect With Us</p>

                            <div className="mt-10 border-t border-white/20 pt-6">
                                <p className="mb-4 font-semibold">Connect With Us</p>

                                <div className="flex gap-4 text-sm">
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-100 hover:text-white"
                                    >
                                        Facebook
                                    </a>

                                    <a
                                        href="https://www.google.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-100 hover:text-white"
                                    >
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Send Us a Message
                        </h3>

                        <p className="mt-2 mb-8 text-sm leading-6 text-slate-500">
                            Fill out the form below and let us know how we can help.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Subject
                                </label>

                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    defaultValue=""
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                >
                                    <option value="" disabled>
                                        Select a subject
                                    </option>
                                    <option value="appointment">Appointment Inquiry</option>
                                    <option value="services">Healthcare Services</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message here..."
                                    required
                                    className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>

                        <p className="mt-4 text-center text-xs text-slate-500">
                            Please do not include sensitive medical information in this form.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
