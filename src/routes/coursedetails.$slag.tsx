import { createFileRoute } from '@tanstack/react-router'
import {
  Clock3,
  GraduationCap,
  Award,
  Briefcase,
  Download,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute('/coursedetails/$slag')({
  component: RouteComponent,
})


 

function RouteComponent() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                Most Popular Program
              </span>

              <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
                MERN Stack Development
              </h1>

              <p className="mt-6 text-slate-300 text-lg leading-8">
                Learn modern full-stack web development and build
                production-ready applications using MongoDB,
                Express.js, React and Node.js.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>6 Months</span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  <span>Beginner to Advanced</span>
                </div>

                <div className="flex items-center gap-2">
                  <Award size={18} />
                  <span>Certificate Included</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="h-12 px-8 rounded-xl bg-[var(--primary)] font-semibold">
                  Enroll Now
                </button>

                <button className="h-12 px-8 rounded-xl border border-white/20 flex items-center gap-2">
                  <Download size={18} />
                  Download Syllabus
                </button>
              </div>
            </div>

            <div>
              <img
                src="/courses/mern-course.jpg"
                alt="MERN Course"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              "Live Interactive Classes",
              "Industry Projects",
              "Internship Support",
              "Career Guidance",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl border"
              >
                <h3 className="font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Modern React Development",
              "REST APIs",
              "Authentication & Security",
              "MongoDB Database Design",
              "Node.js Backend Development",
              "Deployment & DevOps Basics",
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-5 rounded-xl border"
              >
                ✓ {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Course Curriculum
          </h2>

          <div className="space-y-4">
            {[
              "Module 1: HTML, CSS & JavaScript",
              "Module 2: React Fundamentals",
              "Module 3: Backend Development",
              "Module 4: MongoDB Database",
              "Module 5: Authentication & APIs",
              "Module 6: Final Capstone Project",
            ].map((module) => (
              <div
                key={module}
                className="p-6 rounded-2xl border bg-slate-50"
              >
                {module}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Projects You'll Build
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "E-Commerce Platform",
              "Task Management App",
              "Social Media Dashboard",
            ].map((project) => (
              <div
                key={project}
                className="bg-white p-6 rounded-2xl border"
              >
                <h3 className="font-bold">
                  {project}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Career Opportunities
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
              "Software Engineer",
            ].map((role) => (
              <div
                key={role}
                className="border rounded-xl p-5 text-center"
              >
                <Briefcase className="mx-auto mb-3" />
                {role}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-extrabold">
            Ready To Start Your Career?
          </h2>

          <p className="mt-6 text-slate-300">
            Join our industry-focused training program and gain
            practical skills that employers value.
          </p>

          <button className="mt-10 h-12 px-8 rounded-xl bg-[var(--primary)] inline-flex items-center gap-2">
            Enroll Now
            <ArrowRight size={18} />
          </button>

        </div>
      </section>

    </main>
  );
}