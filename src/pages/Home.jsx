
import React from "react";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Users,
  FolderKanban,
  CircleCheck,
  ArrowRight,
  ArrowUpRight,
  Target,
  Rocket,
  Handshake,
} from "lucide-react";

const Home = () => {
  const stats = [
    {
      title: "Employee Network",
      value: "248",
      note: "People in the workspace",
      icon: Users,
    },
    {
      title: "Active Initiatives",
      value: "32",
      note: "Ideas moving forward",
      icon: FolderKanban,
    },
    {
      title: "Ideas Shared",
      value: "156",
      note: "Ideas submitted",
      icon: Lightbulb,
    },
    {
      title: "Projects Delivered",
      value: "84",
      note: "Completed projects",
      icon: CircleCheck,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Share an idea",
      description:
        "Identify an opportunity and share your idea for improving the way we work.",
      icon: Lightbulb,
    },
    {
      number: "02",
      title: "Build together",
      description:
        "Connect with colleagues, exchange feedback, and shape your idea into a plan.",
      icon: Handshake,
    },
    {
      number: "03",
      title: "Make an impact",
      description:
        "Turn promising ideas into projects and track progress towards your goals.",
      icon: Rocket,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8 pb-8">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-[#F0F7F0] via-white to-[#E1EFE3] p-6 sm:p-10 lg:p-12">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-green-900/[0.04]" />
        <div className="absolute bottom-0 right-20 h-32 w-32 rounded-full bg-green-200/30 blur-2xl" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-800">
            <Lightbulb size={15} />
            Intrapreneurship Portal
          </span>

          <h1 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Great ideas start with{" "}
            <span className="text-green-800">you.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            A space to think differently, collaborate with talented people,
            and turn innovative ideas into meaningful business solutions.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-green-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-900"
            >
              Discover our mission
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-green-400 hover:bg-green-50"
            >
              Explore workspace
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
              At a glance
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
              Workspace Overview
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              A snapshot of ideas, people, and project progress.
            </p>
          </div>

          <span className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500">
            Sample statistics
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-[#E8F2E8] p-3 text-green-800">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <ArrowUpRight
                  size={19}
                  className="text-gray-300 transition group-hover:text-green-700"
                />
              </div>

              <p className="mt-5 text-sm font-medium text-gray-500">
                {stat.title}
              </p>
              <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-gray-500">{stat.note}</p>
            </div>
          );
        })}
      </section>

    
      <section className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
            From thought to action
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            How innovation happens
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Every improvement begins with a question, grows through
            collaboration, and succeeds through action.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-xl border border-gray-100 bg-[#FAFCFA] p-5 transition hover:border-green-200 hover:bg-green-50/50"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-green-100 p-3 text-green-800">
                    <Icon size={23} />
                  </div>
                  <span className="text-2xl font-bold text-green-800/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    
      <section className="flex flex-col gap-5 rounded-2xl bg-[#234D38] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-start gap-4">
          <div className="hidden rounded-xl bg-white/10 p-3 sm:block">
            <Target size={26} />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              Have an idea worth exploring?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-green-50/80">
              Take the first step. Learn about our mission and discover
              how collaboration can help turn ideas into impact.
            </p>
          </div>
        </div>

        <Link
          to="/about"
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-sm font-bold text-green-900 transition hover:bg-green-50 sm:self-center"
        >
          About our platform
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
