import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  DollarSign, 
  ArrowLeft, 
  Share2, 
  CheckCircle2 
} from "lucide-react";

// Mock data structure representing a detailed job post
const jobData = {
  title: "Frontend Developer",
  type: "Full Time",
  location: "Kathmandu",
  department: "Engineering",
  postedDate: "June 2, 2026",
  salaryRange: "$80k - $100k / year",
  aboutCompany: "We are a fast-growing tech company building next-generation digital products. We value autonomy, clean code, and user-centric engineering.",
  roleOverview: "We are looking for a skilled Frontend Developer who is passionate about creating exceptional user experiences. You will collaborate closely with product managers and designers to implement clean, modern interfaces using React and Tailwind CSS.",
  responsibilities: [
    "Develop high-quality, responsive web user interfaces using React and Next.js.",
    "Collaborate with the UI/UX design team to translate Figma mockups into scalable components.",
    "Optimize application speed, responsiveness, and performance across various devices.",
    "Write clean, maintainable, and well-tested code while participating in peer code reviews.",
    "Stay updated on emerging frontend trends and introduce best practices into our technical stack."
  ],
  requirements: [
    "3+ years of professional experience building web applications with React.",
    "Strong proficiency in modern JavaScript/TypeScript and semantic HTML/CSS.",
    "Experience writing utility-first CSS with Tailwind CSS.",
    "Familiarity with state management libraries and REST/GraphQL APIs.",
    "Excellent communication and teamwork skills in a fast-paced environment."
  ],
  benefits: [
    "Competitive salary and performance bonuses.",
    "Flexible working hours and remote-friendly policy.",
    "Comprehensive health insurance package.",
    "Annual learning stipend for courses, books, and conferences.",
    "Regular team-building activities and company retreats."
  ]
};

export default function JobDetail() {
  return (
    <main className="min-h-screen bg-gray-50/50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Button & Share */}
        <div className="flex items-center justify-between mb-8">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer group">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Open Positions
          </button>
          
          <button className="inline-flex items-center justify-center p-2.5 rounded-full bg-white border border-gray-100 text-gray-500 hover:text-gray-900 shadow-sm hover:shadow transition-all cursor-pointer">
            <Share2 size={16} />
          </button>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Job Description Details */}
          <div className="lg:col-span-2 bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-10">
            
            {/* Header Content */}
            <div className="space-y-4 border-b border-gray-100 pb-8">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100 text-xs font-semibold tracking-wide uppercase">
                {jobData.department}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                {jobData.title}
              </h1>
            </div>

            {/* Section: About the Company */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">About the Company</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {jobData.aboutCompany}
              </p>
            </div>

            {/* Section: Role Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900">Role Overview</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {jobData.roleOverview}
              </p>
            </div>

            {/* Section: Responsibilities */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Key Responsibilities</h2>
              <ul className="space-y-3">
                {jobData.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-[var(--primary)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section: Requirements */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Requirements & Qualifications</h2>
              <ul className="space-y-3">
                {jobData.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section: Perks & Benefits */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Perks & Benefits</h2>
              <ul className="space-y-3">
                {jobData.benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Sticky Meta Sidebar */}
          <div className="lg:sticky lg:top-8 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Job Summary</h3>
            
            {/* Meta Items List */}
            <div className="space-y-4 text-sm font-medium border-b border-gray-100 pb-6">
              
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <Briefcase size={16} className="text-gray-400" />
                  Job Type
                </span>
                <span className="bg-gray-50 text-gray-700 px-2.5 py-0.5 rounded-full border border-gray-100 text-xs uppercase font-semibold">
                  {jobData.type}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <MapPin size={16} className="text-gray-400" />
                  Location
                </span>
                <span className="text-gray-900 font-semibold">{jobData.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <DollarSign size={16} className="text-gray-400" />
                  Salary
                </span>
                <span className="text-gray-900 font-semibold">{jobData.salaryRange}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-500">
                  <Calendar size={16} className="text-gray-400" />
                  Date Posted
                </span>
                <span className="text-gray-500 font-normal">{jobData.postedDate}</span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="
                  w-full
                  inline-flex
                  items-center
                  justify-center
                  px-6
                  py-3.5
                  rounded-2xl
                  bg-gray-900
                  hover:bg-[var(--primary)]
                  text-white
                  font-semibold
                  text-sm
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                Apply for this position
              </button>
              
              <p className="text-center text-xs text-gray-400">
                Takes less than 5 minutes to apply.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
