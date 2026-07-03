"use client";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import MessageBubble from "../../components/MessageBubble";
import AnswerInput from "../../components/AnswerInput";
import FeedbackPanel from "../../components/FeedbackPanel";

interface Message {
sender: "coach" | "user";
text: string;
}

export default function ChatPage() {
const searchParams = useSearchParams();
const router = useRouter();

const scenario =
searchParams.get("scenario") || "HR Interview";

const [sessionId, setSessionId] = useState("");
const [messages, setMessages] = useState<Message[]>([]);
const [loading, setLoading] = useState(false);
const messagesEndRef = useRef<HTMLDivElement>(null);
const [analysis, setAnalysis] =
  useState({
    communication: 0,
    confidence: 0,
    clarity: 0,
    strength: "",
    improvement: "",
  });

const speakQuestion = (
  text: string,
  onFinish?: () => void
) => {
  window.speechSynthesis.cancel();

  const utterance =
    new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = 1;

  utterance.onend = () => {
    if (onFinish) {
      onFinish();
    }
  };

  window.speechSynthesis.speak(
    utterance
  );
};

useEffect(() => {
startSession();
}, []);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);
const startSession = async () => {
try {
const response = await fetch(
"http://localhost:8000/start-session",
{
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
  scenario,
  email: localStorage.getItem("email")
}),
}
);


  const data = await response.json();

  setSessionId(data.session_id);

  setMessages([
    {
      sender: "coach",
      text: data.question,
    },
  ]);

  speakQuestion(data.question);

} catch (error) {
  console.error(error);
}


};

const sendMessage = async (
message: string
) => {
if (!message.trim()) return;


const userMessage: Message = {
  sender: "user",
  text: message,
};

setMessages((prev) => [
  ...prev,
  userMessage,
]);

setLoading(true);

try {
  const response = await fetch(
    "http://localhost:8000/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id: sessionId,
        message,
      }),
    }
  );

  const data = await response.json();
  setAnalysis({
  communication: data.communication,
  confidence: data.confidence,
  clarity: data.clarity,
  strength: data.strength,
  improvement: data.improvement,
  });

  setMessages((prev) => [
    ...prev,
    {
      sender: "coach",
      text: data.reply,
    },
  ]);
  speakQuestion(data.reply);
} catch (error) {
  console.error(error);
}

setLoading(false);

};

return (
  <main className="min-h-screen bg-slate-950 pt-28 pb-10 px-6">
    <div className="max-w-6xl mx-auto">

      <div className="mb-10">
        <h1 className="text-5xl font-bold text-white">
          {scenario}
        </h1>

        <p className="text-slate-400 mt-2">
          Practice and receive instant coaching feedback.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">

          <div className="space-y-6 min-h-[400px]">

            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                sender={msg.sender}
                text={msg.text}
              />
            ))}

            {loading && (
  <div className="flex items-center gap-3 text-slate-400 animate-pulse">

    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>

    <div
      className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
      style={{ animationDelay: "0.2s" }}
    ></div>

    <div
      className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"
      style={{ animationDelay: "0.4s" }}
    ></div>

    <span className="ml-2">
      🤖 AI is thinking...
    </span>

  </div>
)}
<div ref={messagesEndRef}></div>

          </div>

          <div className="mt-8">

            <AnswerInput
  onSend={sendMessage}
  disabled={loading}
/>

            <button
              onClick={() =>
                router.push(
                  `/report?sessionId=${sessionId}`
                )
              }
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Finish Interview
            </button>

          </div>

        </div>

        <FeedbackPanel
          communication={analysis.communication}
          confidence={analysis.confidence}
          clarity={analysis.clarity}
          strength={analysis.strength}
          improvement={analysis.improvement}
        />
      </div>

    </div>
  </main>
);
}
