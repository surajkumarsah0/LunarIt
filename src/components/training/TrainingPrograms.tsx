import { Link, useNavigate } from "@tanstack/react-router";
import {
  Brain,
  Database,
  Code2,
  Palette,
  BarChart3,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";


const programs = [
  {
    title: "MERN Stack Development",
    description:
      "Learn modern full-stack web development using MongoDB, Express, React and Node.js.",
    duration: "6 Months",
    level: "Beginner to Advanced",
    icon: Code2,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Python Programming",
    description:
      "Master Python fundamentals, automation, APIs and backend development.",
    duration: "3 Months",
    level: "Beginner",
    icon: Code2,
    technologies: ["Python", "Flask", "FastAPI"],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems using machine learning, deep learning and generative AI.",
    duration: "6 Months",
    level: "Intermediate",
    icon: Brain,
    technologies: ["TensorFlow", "PyTorch", "OpenAI"],
  },
  {
    title: "UI/UX Design",
    description:
      "Design modern digital experiences with user-centered design principles.",
    duration: "4 Months",
    level: "Beginner",
    icon: Palette,
    technologies: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    title: "Data Science",
    description:
      "Analyze data, build predictive models and generate business insights.",
    duration: "5 Months",
    level: "Intermediate",
    icon: Database,
    technologies: ["Pandas", "NumPy", "Power BI"],
  },
  {
    title: "Digital Marketing",
    description:
      "Learn SEO, social media marketing and growth strategies for modern businesses.",
    duration: "3 Months",
    level: "Beginner",
    icon: BarChart3,
    technologies: ["SEO", "Meta Ads", "Google Ads"],
  },
];



export default function TrainingPrograms() {
  const navigate = useNavigate();
  return (
    <section className="py- bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="
                  group
                  bg-white
                  rounded-3xl
                  border
                  border-slate-200
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-[var(--primary)]/30
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center">
                    <Icon
                      size={32}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">
                    {program.level}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-2xl font-bold">
                  {program.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {program.description}
                </p>

                {/* Meta */}
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>Duration</span>
                  <span className="font-semibold text-slate-800">
                    {program.duration}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {program.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-slate-100
                        text-sm
                        text-slate-700
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                 <Link to={`/coursedetails/${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button
                    className="
                      flex-1
                      h-11
                      rounded-xl
                      bg-[var(--primary)]
                      text-white
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                  </Link>

                  <button
                    className="
                      flex-1
                      h-11
                      rounded-xl
                      border
                      border-slate-300
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:bg-slate-50
                    "
                  >
                    <MessageSquare size={16} />
                    Enquiry
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}