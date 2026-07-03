"use client";

import { useState } from "react";

interface AnswerInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function AnswerInput({
  onSend,
  disabled = false,
}: AnswerInputProps) {
  const [message, setMessage] = useState("");

  const [isListening, setIsListening] =
  useState(false);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported in your browser."
      );
      return;
      }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    setIsListening(true);

    recognition.start();

    recognition.onresult = (
      event: any
      ) => {
    const transcript =
      event.results[0][0].transcript;

      setMessage(transcript);

      onSend(transcript);

      setMessage("");

      setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
      };

  const handleSubmit = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="space-y-6">

      {/* Voice Controls */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4">
        <h3 className="text-white font-semibold mb-4">
          🎤 Voice Practice
        </h3>

        <div className="flex flex-wrap gap-4">
          <button
  onClick={startListening}
  disabled={disabled}
  className="
    bg-red-600
    hover:bg-red-700
    disabled:bg-slate-700
    disabled:cursor-not-allowed
    text-white
    px-5
    py-3
    rounded-xl
    transition
  "
>
            {isListening
              ? "🎤 Listening..."
              : "🎙 Start Speaking"}
          </button>

          
        </div>

        <p className="text-slate-400 text-sm mt-3">
          Real-time voice communication will be connected in the next version.
        </p>
      </div>

      {/* Text Input */}
      <div>
        <textarea
  rows={5}
  value={message}
  disabled={disabled}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }}
  placeholder={
    disabled
      ? "🤖 AI is thinking..."
      : "Type your answer..."
  }
  className="
    w-full
    bg-slate-900
    border
    border-slate-700
    rounded-2xl
    p-4
    text-white
    resize-none
    disabled:opacity-60
  "
/>

        <button
  onClick={handleSubmit}
  disabled={disabled}
  className="
    mt-4
    bg-indigo-600
    hover:bg-indigo-700
    disabled:bg-slate-700
    disabled:cursor-not-allowed
    text-white
    px-6
    py-3
    rounded-xl
    transition-all
  "
>
  {disabled ? "🤖 AI is Replying..." : "Submit Answer"}
</button>
      </div>

    </div>
  );
}