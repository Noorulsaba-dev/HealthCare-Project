
import { useState } from "react";
import { Bot, Send, UserRound } from "lucide-react";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! I am your HealthCare+ assistant. What general health information would you like to learn about?",
    },
  ]);

  const sendMessage = (e) => {
    e.preventDefault();

    const text = message.trim();
    if (!text) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text },
      {
        role: "assistant",
        text: "This chat is currently a frontend demo. Connect an AI API through your backend to receive AI-generated answers.",
      },
    ]);

    setMessage("");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 bg-sky-600 p-5 text-white">
          <div className="rounded-xl bg-white/15 p-3">
            <Bot size={28} />
          </div>
          <div>
            <h1 className="text-xl font-bold">AI Health Assistant</h1>
            <p className="mt-1 text-sm text-sky-100">
              General health information
            </p>
          </div>
        </div>

        <div className="flex min-h-80 flex-col gap-4 p-5 sm:p-7">
          {messages.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                item.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0 rounded-xl bg-sky-100 p-2 text-sky-700">
                {item.role === "user" ? (
                  <UserRound size={20} />
                ) : (
                  <Bot size={20} />
                )}
              </div>

              <p
                className={`max-w-[85%] rounded-2xl p-4 text-sm leading-6 ${
                  item.role === "user"
                    ? "bg-sky-600 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          className="flex gap-3 border-t border-slate-100 p-4 sm:p-5"
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a general health question..."
            className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500"
          />

          <button
            type="submit"
            aria-label="Send message"
            className="rounded-xl bg-sky-600 px-4 text-white transition hover:bg-sky-700"
          >
            <Send size={20} />
          </button>
        </form>

        <p className="px-5 pb-5 text-xs leading-5 text-slate-500">
          This assistant is for general information only, not diagnosis or
          emergency care. Consult a qualified healthcare professional for
          medical concerns.
        </p>
      </div>
    </main>
  );
};

export default AIAssistant;
