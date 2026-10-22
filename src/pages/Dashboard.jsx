
import React from "react";

const Dashboard = () => {
  const activities = [
    {
      title: "New project created",
      description: "Website Redesign project was created.",
      time: "10 minutes ago",
      color: "bg-blue-500",
    },
    {
      title: "Task completed",
      description: "UI component development was completed.",
      time: "1 hour ago",
      color: "bg-green-500",
    },
    {
      title: "Team update",
      description: "New members joined the workspace.",
      time: "3 hours ago",
      color: "bg-purple-500",
    },
  ];

  const projects = [
    { name: "Website Redesign", progress: 75, color: "bg-blue-600" },
    { name: "Mobile Application", progress: 50, color: "bg-purple-600" },
    { name: "Admin Dashboard", progress: 90, color: "bg-green-600" },
  ];

  return (
    <div className="space-y-8">

      <section className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-800 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm font-medium text-blue-200">
          WORKSPACE OVERVIEW
        </p>

        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
          Welcome to Your Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
          Manage your projects, track progress, and stay updated with
          everything happening in your workspace.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById("activity")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Recent Activity
          </button>
        </div>
      </section>

    
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm font-medium text-gray-500">Total Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">24</h2>
          <p className="mt-2 text-sm text-green-600">
            +12% <span className="text-gray-500">from last month</span>
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm font-medium text-gray-500">Tasks Completed</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">128</h2>
          <p className="mt-2 text-sm text-green-600">
            +8% <span className="text-gray-500">from last month</span>
          </p>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 xl:col-span-1">
          <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">16</h2>
          <p className="mt-2 text-sm text-orange-600">
            Needs attention
          </p>
        </div>
      </section>

      
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div
          id="projects"
          className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Project Progress
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Track your ongoing projects
              </p>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              3 Active
            </span>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    {project.name}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${project.color} transition-all`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="activity"
          className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
        >
          <h2 className="text-lg font-bold text-gray-900">
            Recent Activity
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Latest workspace updates
          </p>

          <div className="mt-6 space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${activity.color}`}
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    {activity.description}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="rounded-xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
        <h2 className="font-bold text-gray-900">Getting Started</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Use the sidebar to navigate between pages. Visit Home to view
          your KPI cards, Users to manage team members, and Settings to
          configure your workspace.
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
