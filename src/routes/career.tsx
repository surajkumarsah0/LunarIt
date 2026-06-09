import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Building2, 
  Sparkles, 
  Search, 
  GraduationCap, 
  Layers,
  HelpCircle,
  ChevronRight,
  ArrowLeft
} from 'lucide-react'

export const Route = createFileRoute('/career')({
  component: CareersComponent,
})

const JOBS_DATABASE = [
  {
    id: 'jr-mern-developer',
    title: 'Junior MERN Stack Developer',
    company: 'Vertex Digital Solutions',
    location: 'Kathmandu (Hybrid)',
    type: 'Full-Time',
    stipend: 'NPR 35,000 - 45,000 / month',
    posted: '2 days ago',
    category: 'job',
    requirements: ['React state management ecosystems', 'Express REST API pipeline design', 'Basic NoSQL aggregation workflows']
  },
  {
    id: 'backend-python-intern',
    title: 'Backend Engineering Intern (Python)',
    company: 'Aura Analytics Labs',
    location: 'Lalitpur (On-site)',
    type: 'Internship',
    stipend: 'Paid (Performance Incentives)',
    posted: '3 days ago',
    category: 'internship',
    requirements: ['Python data structures foundations', 'Familiarity with FastAPI/Flask', 'Basic database management concepts']
  },
  {
    id: 'fullstack-developer-intern',
    title: 'React & Node.js Developer Intern',
    company: 'NextGen Software House',
    location: 'Kathmandu (Remote)',
    type: 'Internship',
    stipend: 'Paid Internship Allocation',
    posted: '1 week ago',
    category: 'internship',
    requirements: ['Semantic DOM & ES6+ JavaScript patterns', 'Asynchronous data fetching mechanisms', 'GitHub branch workflow management']
  },
  {
    id: 'associate-cloud-engineer',
    title: 'Associate DevOps / Cloud Engineer',
    company: 'Skyline Cloud Systems',
    location: 'Kathmandu (On-site)',
    type: 'Full-Time',
    stipend: 'NPR 40,000 - 55,000 / month',
    posted: '5 days ago',
    category: 'job',
    requirements: ['Linux environment scripting paths', 'Basic Docker containerization tools', 'CI/CD task pipeline structures']
  }
]

function CareersComponent() {
  const [filter, setFilter] = useState<'all' | 'job' | 'internship'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRoles = JOBS_DATABASE.filter(role => {
    const matchesTab = filter === 'all' || role.category === filter
    const matchesSearch = role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          role.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen pb-20 md:pb-0">
      
      {/* ================= INLINE ROUTE NAVIGATION ================= */}
      <nav className="bg-white border-b border-slate-200/60 py-3.5 sticky top-0 z-50 backdrop-blur-md bg-white/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft size={13} className="stroke-[2.5]" />
            <span>Back to Matrix</span>
          </Link>
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest hidden sm:inline">
            Placement Placement Portal
          </span>
        </div>
      </nav>

      {/* ================= LIGHT PREMIUM HERO SECTION ================= */}
      <header className="bg-white border-b border-slate-200/70 py-10 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3.5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-bold tracking-wider uppercase mx-auto shadow-sm">
            <Sparkles size={10} className="text-[var(--accent)] fill-current" />
            <span>Direct Placement Network</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ecosystem Jobs & Internships
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            Exclusive career paths, industry internships, and full-time entry points curated directly for qualified track graduates and network candidates.
          </p>

          {/* SIGNATURE HAND-DRAWN ITALIC ACCENT UNDERLINE */}
          <div className="pt-1 text-center">
            <p className="text-xs text-slate-500 font-medium">
              Every position matches our internal{" "}
              <span className="relative inline-block whitespace-nowrap px-0.5">
                <span className="font-['Caveat',_cursive] text-[14px] font-bold text-slate-900 italic relative z-10">
                  Hiring Standards
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1.5 text-slate-900 opacity-90 pointer-events-none z-0">
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full fill-none stroke-current stroke-[2.5px]"><path d="M3,7 C30,2 60,3 97,4" /></svg>
                </span>
              </span>
            </p>
          </div>
        </div>
      </header>

      {/* ================= PLATFORM CONTROLS & GRID ================= */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10 space-y-4">
        
        {/* INTERACTIVE FILTERS WRAPPER PANEL */}
        <div className="grid md:grid-cols-12 gap-3 items-center bg-white p-2 rounded-xl border border-slate-200/60 shadow-sm">
          
          {/* SEARCH FIELD BAR ENTRY */}
          <div className="md:col-span-7 relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search roles or target companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 h-9 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-400 font-normal transition-all"
            />
          </div>

          {/* TAB SEGMENT FILTER SELECTION SYSTEM */}
          <div className="md:col-span-5 flex p-0.5 bg-slate-100 rounded-lg border border-slate-200/40">
            {(['all', 'job', 'internship'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`flex-1 text-center py-1.5 text-xs font-semibold rounded-md capitalize tracking-tight transition-all
                  ${filter === tab 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
              >
                {tab === 'all' ? 'All Roles' : tab === 'job' ? 'Full-Time' : 'Internships'}
              </button>
            ))}
          </div>
        </div>

        {/* ================= OPEN PLACEMENT CARDS MATRIX ================= */}
        <div className="grid lg:grid-cols-12 gap-4 items-start">
          
          {/* LEFT CONTENT LIST (MAIN POSTINGS CONTAINER) */}
          <div className="lg:col-span-8 space-y-2.5">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <div 
                  key={role.id} 
                  className="bg-white border border-slate-200/60 rounded-xl p-4 shadow-sm hover:border-slate-300 transition-all group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider
                        ${role.category === 'job' 
                          ? 'bg-slate-900 text-white' 
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        }`}
                      >
                        {role.type}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                        <Building2 size={11} className="shrink-0" />
                        {role.company}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-tight group-hover:text-slate-800">
                        {role.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5">
                        <span className="flex items-center gap-0.5">
                          <MapPin size={11} className="text-slate-400" />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Calendar size={11} className="text-slate-400" />
                          {role.posted}
                        </span>
                        <span className="font-semibold text-slate-700">
                          {role.stipend}
                        </span>
                      </div>
                    </div>

                    <div className="pt-1 flex flex-wrap gap-1">
                      {role.requirements.map((req, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-600 font-normal"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DESKTOP EXCLUSIVE ACTION TARGET BUTTON ANCHOR */}
                  <div className="hidden sm:block shrink-0">
                    <Link 
                      to="/contact" 
                      search={{ roleRef: role.id }}
                      className="h-8 px-3 rounded-lg bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-all border border-slate-200 group-hover:border-slate-300"
                    >
                      <span>Apply</span>
                      <ArrowUpRight size={12} className="text-slate-400 group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-slate-200/60 rounded-xl p-8 text-center max-w-sm mx-auto space-y-1.5">
                <Briefcase size={20} className="mx-auto text-slate-300" />
                <h4 className="text-xs font-bold text-slate-900 uppercase">No Matches Discovered</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Try adjusting or modifying your system filtering parameters.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT CTA CONTROL INDEX COLUMN (PERFECT STACK ON MOBILE) */}
          <div className="lg:col-span-4 space-y-3">
            
            {/* GENERAL ENQUIRY ROUTE INTERFACE */}
            <div className="bg-white rounded-xl border border-slate-200/60 p-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-900" />
              <h3 className="text-xs font-bold text-slate-900 tracking-tight uppercase mb-1.5 flex items-center gap-1.5">
                <HelpCircle size={13} className="text-slate-400" />
                General Placement Inquiry
              </h3>
              <p className="text-[11px] text-slate-600 leading-relaxed font-normal mb-4">
                Can't find a timeline position matching your technological skills stack? Send an open request query directly to our tech ecosystem team.
              </p>

              <Link to="/contact">
                <button className="w-full h-9 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-200">
                  Inquire For Details
                  <ChevronRight size={12} className="text-slate-400" />
                </button>
              </Link>
            </div>

            {/* VERIFICATION VERDICT WIDGET */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-4 border border-slate-800 shadow-sm space-y-2">
              <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">
                <GraduationCap size={13} /> 
                <span>Graduate Matrix Validation</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                Active students receive systematic acceleration passes routing developer portfolios directly into regional software hubs before public board deployment.
              </p>
              <Link to="/contact" className="block pt-1">
                <button className="w-full h-8 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center justify-center gap-1 transition-all border border-white/10">
                  <Layers size={12} />
                  <span>Verify Profile Metrics</span>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* ================= FIXED STICKY MOBILE SCREEN CONVERSION BUTTONS ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.04)] p-3 flex gap-2 lg:hidden z-50">
        <Link to="/contact" className="flex-1">
          <button className="w-full h-10 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center justify-center gap-1 active:bg-slate-800 transition-colors">
            Apply Now
            <ChevronRight size={12} />
          </button>
        </Link>
        <Link to="/contact" className="flex-1">
          <button className="w-full h-10 rounded-xl bg-white text-slate-800 text-xs font-bold flex items-center justify-center gap-1 active:bg-slate-50 transition-colors border border-slate-200">
            Inquire Now
            <HelpCircle size={12} className="text-slate-400" />
          </button>
        </Link>
      </div>

    </div>
  )
}