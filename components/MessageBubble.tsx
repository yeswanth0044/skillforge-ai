type MessageBubbleProps = {
  sender: "coach" | "user";
  text: string;
};

export default function MessageBubble({
  sender,
  text,
}: MessageBubbleProps) {
  return (
    <div
      className={`max-w-[75%] p-4 rounded-2xl ${
        sender === "coach"
          ? "bg-slate-800 text-white"
          : "bg-indigo-600 text-white ml-auto"
      }`}
    >
      {text}
    </div>
  );
}