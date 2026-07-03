import {
  FaMicrophone,
  FaStar,
  FaBriefcase,
  FaRobot,
} from "react-icons/fa";
export default function Stats() {

  const stats = [
    {
      number: "10K+",
      label: "Practice Sessions",
      icon: <FaMicrophone size={40} />,
    },
    {
      number: "95%",
      label: "Positive Feedback",
      icon: <FaStar size={40} />,
    },
    {
      number: "4+",
      label: "Interview Types",
      icon: <FaBriefcase size={40} />,
    },
    {
      number: "24/7",
      label: "AI Coach",
      icon: <FaRobot size={40} />,
    },
  ];

  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
                transition-all
                duration-300
              "
            >

              <div className="text-indigo-400 flex justify-center mb-5">
  {stat.icon}
</div>

              <h2 className="text-5xl font-extrabold text-indigo-400">
                {stat.number}
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}