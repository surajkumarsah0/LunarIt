import { Link } from '@tanstack/react-router'
import {
  Brain,
  Database,
  Code2,
  Palette,
  BarChart3,
  ArrowRight,
  Clock,
  Layers
} from 'lucide-react'

const programs = [
  {
    title: 'MERN Stack Development',
    description: 'Learn modern full-stack web development using MongoDB, Express, React and Node.js.',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    icon: Code2,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Python Programming',
    description: 'Master Python fundamentals, automation, APIs and backend development.',
    duration: '3 Months',
    level: 'Beginner',
    icon: Code2,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    technologies: ['Python', 'Flask', 'FastAPI'],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems using machine learning, deep learning and generative AI.',
    duration: '6 Months',
    level: 'Intermediate',
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a",
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI'],
  },
  {
    title: 'UI/UX Design',
    description: 'Design modern digital experiences with user-centered design principles.',
    duration: '4 Months',
    level: 'Beginner',
    icon: Palette,
    image: "https://images.unsplash.com/photo-1561070791-26c113006238",
    technologies: ['Figma', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Data Science',
    description: 'Analyze data, build predictive models and generate business insights.',
    duration: '5 Months',
    level: 'Intermediate',
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ['Pandas', 'NumPy', 'Power BI'],
  },
  {
    title: 'Digital Marketing',
    description: 'Learn SEO, social media marketing and growth strategies for modern businesses.',
    duration: '3 Months',
    level: 'Beginner',
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ['SEO', 'Meta Ads', 'Google Ads'],
  },
]

export default function TrainingPrograms() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 text-slate-900 antialiased border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= ASYMMETRIC CARD GRID ================= */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {programs.map((program) => {
            const IconComponent = program.icon;
            
            return (
              <div
                key={program.title}
                className="
                  group
                  relative
                  flex flex-col
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-slate-200/60
                  shadow-sm
                  hover:shadow-md
                  hover:border-slate-300
                  transition-all
                  duration-300
                "
              >
                {/* 1/3 SPLIT IMAGE HEADER PANELS */}
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden shrink-0">
                  <img
                    src={`${program.image}?q=80&w=600&auto=format&fit=crop`}
                    alt={program.title}
                    loading="lazy"
                    className="h-full w-full object-cover transform scale-[1.01] group-hover:scale-105 transition-transform duration-500 ease-out opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* FLOATING CONTEXT BADGES */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    {/* Level Badge */}
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-slate-950/60 text-white backdrop-blur-md border border-white/10">
                      {program.level}
                    </span>
                    
                    {/* Icon Container Badge */}
                    <div className="p-1.5 rounded-md bg-white text-slate-900 shadow-sm">
                      <IconComponent size={14} />
                    </div>
                  </div>

                  {/* BOTTOM FLOATING TECHNOLOGY LABELS */}
                  <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5 max-w-[90%]">
                    {program.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium rounded bg-white/20 text-white backdrop-blur-sm border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2/3 CONTENT BLOCK BODY */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[var(--accent)] transition-colors duration-200 tracking-tight">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {program.description}
                    </p>
                  </div>

                  {/* METRIC SPECS + ROUTE CTAS */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={12} className="text-slate-400" />
                        <span>Duration: <strong className="text-slate-700 font-semibold">{program.duration}</strong></span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Layers size={12} className="text-slate-400" />
                        <span>{program.technologies.length} Frameworks</span>
                      </div>
                    </div>

                    <Link
                      to={`/coursedetails/${program.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className="block w-full"
                    >
                      <button className="
                        w-full h-9 rounded-xl
                      bg-[var(--primary-dark)]
                        text-white text-xs font-semibold
                        flex items-center justify-center gap-1.5
                        transition-colors duration-200
                        shadow-sm
                      ">
                        Explore Curriculum
                        <ArrowRight size={12} className="transform group-hover:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}