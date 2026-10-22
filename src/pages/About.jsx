
import React from "react";
import {
  Leaf,
  Target,
  Eye,
  Lightbulb,
  Users,
  Handshake,
  ShieldCheck,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Think Creatively",
      description:
        "Challenge traditional approaches and discover better ways to solve problems.",
      color: "bg-amber-50 text-amber-700",
    },
    {
      icon: Users,
      title: "Work Together",
      description:
        "Bring different perspectives together to develop stronger ideas and solutions.",
      color: "bg-blue-50 text-blue-700",
    },
    {
      icon: ShieldCheck,
      title: "Take Ownership",
      description:
        "Take responsibility, learn from experience, and turn ideas into action.",
      color: "bg-green-50 text-green-800",
    },
    {
      icon: Handshake,
      title: "Create Impact",
      description:
        "Focus on practical improvements that bring value to the organization.",
      color: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10 pb-8">
      {/* Page Introduction */}
      <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="py-2">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green-800">
            <span className="h-1 w-8 rounded-full bg-green-700" />
            About Our Platform
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Where people become
            <span className="block text-green-800">
              change makers.
            </span>
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Intrapreneurship is about bringing an entrepreneurial mindset
            into the workplace. Our platform supports employees who want
            to question, create, collaborate, and make a positive difference.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            We provide a shared space to explore opportunities, develop
            proposals, and support promising ideas from concept to execution.
          </p>

          <Link
            to="/dashboard"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
          >
            Explore the workspace
            <ArrowRight size={17} />
          </Link>
        </div>

    
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl border border-green-100 bg-[#EDF5EC] p-8 sm:min-h-[340px]">
          <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-green-200" />
          <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-green-200/50" />

          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-white bg-white p-6 shadow-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-800 text-white">
              <Leaf size={30} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-green-800">
              Our approach
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-snug text-gray-900">
              Small ideas can create meaningful change.
            </h2>

            <div className="mt-6 space-y-3">
              <div className="h-2 w-full rounded-full bg-green-100">
                <div className="h-2 w-3/4 rounded-full bg-green-700" />
              </div>
              <div className="h-2 w-4/5 rounded-full bg-gray-100" />
              <div className="h-2 w-3/5 rounded-full bg-gray-100" />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-green-800">
              <Lightbulb size={18} />
              Think. Collaborate. Innovate.
            </div>
          </div>
        </div>
      </section>


      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-2xl bg-[#234D38] p-6 text-white sm:p-8">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-white/10 p-3">
              <Target size={26} />
            </div>
            <span className="text-sm font-semibold text-white/50">01</span>
          </div>

          <h2 className="mt-6 text-2xl font-bold">Our Mission</h2>

          <p className="mt-3 text-sm leading-7 text-green-50/85">
            To empower employees to share ideas, collaborate across teams,
            and develop practical solutions that improve business processes
            and create value.
          </p>
        </div>

        <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-green-100 p-3 text-green-800">
              <Eye size={26} />
            </div>
            <span className="text-sm font-semibold text-gray-300">02</span>
          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Our Vision
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            To encourage a culture where curiosity is welcomed, creativity
            is supported, and employees have the opportunity to turn
            promising ideas into meaningful improvements.
          </p>
        </div>
      </section>


      <section>
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-green-800">
            What Guides Us
          </span>

          <h2 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            The values behind every idea
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500">
            Innovation is more than a new idea. It takes curiosity,
            collaboration, responsibility, and a commitment to improvement.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-200/80 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-3 ${value.color}`}>
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-bold text-gray-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="rounded-2xl border border-gray-200 bg-[#F8FAF8] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-white p-3 text-green-800 shadow-sm">
            <Compass size={25} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              From opportunity to action
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600">
              Identify an opportunity, share your proposal, work with
              others, and develop a practical solution. Each step helps
              transform an initial thought into a valuable initiative.
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-5">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-sm font-bold text-green-800 transition hover:gap-3"
          >
            Return to Home
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
