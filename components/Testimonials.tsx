import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "The interview simulations significantly improved my confidence before placements. I felt much more prepared during real interviews.",
    name: "Final Year Student",
    role: "Computer Science",
  },
  {
    quote:
      "The AI feedback helped me organize my answers better and communicate more professionally during HR interviews.",
    name: "Software Engineering Intern",
    role: "Frontend Developer",
  },
  {
    quote:
      "Practicing difficult workplace conversations felt realistic. The feedback was detailed and easy to apply.",
    name: "Graduate Trainee",
    role: "IT Services",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            What Our Learners Say
          </h2>

          <p className="text-slate-400 text-xl mt-4">
            Trusted by students preparing for placements.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
                transition-all
                duration-300
              "
            >

              <FaQuoteLeft
                size={28}
                className="text-indigo-400 mb-6"
              />

              <p className="text-slate-300 leading-7">
                {item.quote}
              </p>

              <div className="flex items-center gap-4 mt-8">

                <FaUserCircle
                  size={50}
                  className="text-indigo-400"
                />

                <div>

                  <h4 className="text-white font-bold">
                    {item.name}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}