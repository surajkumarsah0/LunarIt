// import React, { useState } from "react";
// import { createFileRoute, Link } from "@tanstack/react-router";
// import {
//   CheckCircle2,
//   Play,
//   Video,
//   Sparkles,
//   BookOpen,
//   ShieldCheck,
//   ArrowRight,
//   Users,
//   Award,
//   Terminal,
//   Clock,
//   Code,
//   Lock,
//   ChevronDown,
//   MessageSquare
// } from "lucide-react";

// export const Route = createFileRoute("/coursedetails/$slag")({
//   component: CourseDetailsComponent,
// });

// function CourseDetailsComponent() {
//   const [activeTab, setActiveTab] = useState<"overview" | "chapters" | "instructors"]("overview");
//   const [promoCode, setPromoCode] = useState("");
//   const [expandedChapter, setExpandedChapter] = useState<number | null>(0);

//   const COURSE_DATA = {
//     title: "AI-Powered MERN Stack Architecture",
//     category: "Full Stack",
//     price: "Rs. 2,000",
//     description:
//       "Master modern full-stack web development with AI-powered workflows. Learn Node.js, Express.js, PostgreSQL, Prisma, React, TypeScript, and Next.js while building real-world projects. Discover how to use AI tools like ChatGPT, Claude, and GitHub Copilot to accelerate development, improve productivity, and create production-ready applications.",
//     outcomes: [
//       "Build scalable backend applications using Node.js and Express.",
//       "Design and manage databases with PostgreSQL, Supabase, and Prisma ORM.",
//       "Create secure REST APIs with authentication and authorization.",
//       "Develop modern frontend applications using React.",
//       "Manage state, routing, forms, and API integrations.",
//       "Write type-safe applications with TypeScript.",
//       "Build full-stack applications using Next.js.",
//       "Implement SSR, SSG, ISR, API Routes, and Server Actions.",
//       "Apply industry-standard project structures and best practices.",
//       "Leverage AI tools such as ChatGPT, Claude, and GitHub Copilot for faster development.",
//     ],
//     deepDive:
//       "Become a modern Full Stack Developer by mastering the complete MERN ecosystem and AI assisted development workflows. This comprehensive course takes you from backend fundamentals to building production-ready full stack applications using Node.js, Express.js, React.js, TypeScript, Next.js, PostgreSQL, Supabase, and Prisma ORM. Designed for aspiring developers, students, freelancers, and professionals, this course focuses on practical learning through real-world projects and industry-standard development practices.",
//     curriculum: [
//       {
//         id: 0,
//         title: "Phase 1: Enterprise System Foundation & Prisma Layer",
//         duration: "8 Lessons • 4.5 hrs",
//         lessons: [
//           "Architecture Blueprint: Monolith vs Microservices",
//           "Setting up TypeScript Ecosystem & Strict Compilation Options",
//           "PostgreSQL Multi-tenant Database Modeling on Supabase",
//           "Prisma Client Instantiation, Migrations & Deep Relationship Maps"
//         ]
//       },
//       {
//         id: 1,
//         title: "Phase 2: Secure Express Router Engines & Middlewares",
//         duration: "10 Lessons • 6 hrs",
//         lessons: [
//           "Advanced Request Validation Middleware using Zod Schema",
//           "JWT Token Authentication & State Management Pipeline",
//           "Asynchronous Error Handling Wrappers & Error Classification",
//           "Optimizing Query Transactions with Custom Prisma Middleware"
//         ]
//       },
//       {
//         id: 2,
//         title: "Phase 3: Next.js Server Engines & Client Hydration",
//         duration: "14 Lessons • 9.5 hrs",
//         lessons: [
//           "TanStack Store and Next.js Core Data Hydration Architecture",
//           "Optimistic Server Actions & State Boundary Synchronization",
//           "Prompt Engineering Context Chains for AI Code Generation Workflow",
//           "Deploying Edge Middleware on Vercel Engine Infrastructures"
//         ]
//       }
//     ],
//     instructors: [
//       {
//         name: "Er. Rohan Shrestha",
//         role: "Principal Architecture Lead, Lunar IT Solution",
//         bio: "Ex-Silicon Valley Software Architect specializing in high-throughput enterprise systems and scalable full-stack multi-tenant infrastructure.",
//         avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
//       },
//       {
//         name: "Sarah Jenkins",
//         role: "Senior AI Integration Engineer",
//         bio: "Core contributor to open-source LLM developer tooling and automation frameworks with 8+ years of engineering experience.",
//         avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-background font-manrope text-text-primary antialiased pb-24 md:pb-16">
      
//       {/* ================= LIGHT PREMIUM BACKGROUND ACCENTUATIONS ================= */}
//       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[140px]" />
//         <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
//       </div>

//       {/* ================= HERO TEXT BRAND BLOCK ================= */}
//       <header className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8 animate-fadeInUp">
//         <div className="inline-flex items-center gap-2 rounded-md bg-text-primary px-3 py-1 text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
//           <Sparkles size={12} className="text-accent fill-current animate-pulse" />
//           <span>Category: {COURSE_DATA.category}</span>
//         </div>
        
//         <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl leading-tight max-w-5xl">
//           {COURSE_DATA.title}
//         </h1>
        
//         <p className="mt-4 max-w-4xl text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
//           {COURSE_DATA.description}
//         </p>
//       </header>

//       {/* ================= CONTENT LAYOUT GRID MATRIX ================= */}
//       <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-start">
        
//         {/* LEFT COMPONENT COLUMN */}
//         <div className="lg:col-span-8 space-y-8 animate-fadeInUp">
          
//           {/* COURSE PREVIEW EMBED MODULE */}
//           <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-text-primary shadow-xl">
//             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:24px_24px]" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
//             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
//               <div className="space-y-2 mb-6">
//                 <span className="text-xs font-bold tracking-widest text-accent uppercase block">
//                   Advanced Engineering Track
//                 </span>
//                 <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-lg">
//                   MERN STACK + AI ARCHITECTURE
//                 </h2>
//               </div>
              
//               {/* Modern Play Trigger mapped cleanly with Accent Palette */}
//               <button className="inline-flex h-12 items-center gap-3 rounded-xl bg-accent px-6 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.03] active:scale-[0.98]">
//                 <Play size={16} className="fill-current" />
//                 <span>Watch Trailer Preview</span>
//               </button>
//             </div>
            
//             <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-black/60 border border-white/10 px-3 py-1 backdrop-blur-md">
//               <Terminal size={12} className="text-accent" />
//               <span className="font-mono text-[10px] text-white tracking-wider uppercase">
//                 Enterprise Production Ready
//               </span>
//             </div>
//           </div>

//           {/* TAB SYSTEM SEPARATOR BAR */}
//           <div className="flex border-b border-border/80 gap-8 text-sm font-bold">
//             {(["overview", "chapters", "instructors"] as const).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`pb-3 capitalize tracking-tight transition-all relative cursor-pointer
//                   ${activeTab === tab 
//                     ? "text-primary" 
//                     : "text-text-secondary hover:text-text-primary"
//                   }`}
//               >
//                 {tab}
//                 {activeTab === tab && (
//                   <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full animate-fadeInUp" />
//                 )}
//               </button>
//             ))}
//           </div>

//           {/* DYNAMIC VIEWPORTS DISPLAY LAYER */}
//           <div className="transition-all duration-300">
            
//             {/* VIEWPORT 1: OVERVIEW COMPONENT */}
//             {activeTab === "overview" && (
//               <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs space-y-8">
//                 <div className="space-y-4">
//                   <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
//                     <Award size={14} className="text-accent" />
//                     What you will master
//                   </h3>
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     {COURSE_DATA.outcomes.map((outcome, idx) => (
//                       <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary font-normal leading-relaxed">
//                         <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
//                         <span>{outcome}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <hr className="border-border/60" />

//                 <div className="space-y-4">
//                   <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
//                     <Code size={14} className="text-primary" />
//                     Deep Architecture Dive
//                   </h3>
//                   <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal text-justify">
//                     {COURSE_DATA.deepDive}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* VIEWPORT 2: CHAPTERS ACCORDION SCHEMATIC */}
//             {activeTab === "chapters" && (
//               <div className="space-y-4">
//                 {COURSE_DATA.curriculum.map((chapter) => (
//                   <div 
//                     key={chapter.id} 
//                     className="rounded-xl border border-border bg-surface shadow-xs overflow-hidden transition-all duration-200"
//                   >
//                     <button
//                       onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
//                       className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-text-primary hover:bg-background transition-colors"
//                     >
//                       <div className="space-y-1 pr-4">
//                         <h4 className="font-bold tracking-tight text-text-primary">{chapter.title}</h4>
//                         <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary font-medium">
//                           <Clock size={12} className="text-primary" /> {chapter.duration}
//                         </span>
//                       </div>
//                       <ChevronDown 
//                         size={18} 
//                         className={`text-text-secondary transition-transform duration-200 shrink-0 ${expandedChapter === chapter.id ? "rotate-180" : ""}`} 
//                       />
//                     </button>
                    
//                     {expandedChapter === chapter.id && (
//                       <div className="border-t border-border/60 bg-background/50 p-5 space-y-3">
//                         {chapter.lessons.map((lesson, idx) => (
//                           <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
//                             <Lock size={12} className="text-text-secondary/60 shrink-0" />
//                             <span className="font-mono text-[11px] text-accent font-bold">{(idx+1).toString().padStart(2, '0')}</span>
//                             <span className="font-medium text-text-primary/95">{lesson}</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* VIEWPORT 3: DIRECT DESIGN ENGINEERING INSTRUCTORS */}
//             {activeTab === "instructors" && (
//               <div className="grid sm:grid-cols-2 gap-6">
//                 {COURSE_DATA.instructors.map((instructor, idx) => (
//                   <div key={idx} className="rounded-2xl border border-border bg-surface p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-start">
//                     <img 
//                       src={instructor.avatar} 
//                       alt={instructor.name}
//                       className="w-16 h-16 rounded-xl object-cover border border-border bg-background shrink-0 shadow-xs" 
//                     />
//                     <div className="space-y-2">
//                       <div>
//                         <h4 className="text-base font-bold tracking-tight text-text-primary">{instructor.name}</h4>
//                         <p className="text-xs font-semibold text-primary">{instructor.role}</p>
//                       </div>
//                       <p className="text-xs text-text-secondary leading-relaxed font-normal">
//                         {instructor.bio}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>
//         </div>

//         {/* RIGHT METRICS & TRANSACTION STICKY COLUMN */}
//         <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 animate-fadeInUp">
          
//           {/* PRICING ENGINE SHELL */}
//           <div className="rounded-2xl border border-border bg-surface p-6 shadow-md relative overflow-hidden">
//             <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
            
//             <div>
//               <span className="text-[10px] text-text-secondary uppercase tracking-widest font-bold block">
//                 Total Access Fee
//               </span>
//               <div className="text-3xl font-black text-text-primary tracking-tight mt-1">
//                 {COURSE_DATA.price}
//               </div>
//             </div>

//             {/* PROMO INPUT FIELD DESIGN */}
//             <div className="space-y-2 mt-5">
//               <label className="text-[10px] font-bold uppercase text-text-secondary tracking-wider block">
//                 Have an enterprise code?
//               </label>
//               <div className="flex gap-2">
//                 <input 
//                   type="text" 
//                   placeholder="PROMO10" 
//                   value={promoCode}
//                   onChange={(e) => setPromoCode(e.target.value)}
//                   className="flex-1 px-3.5 h-10 bg-background border border-border rounded-xl text-xs placeholder:text-text-secondary/50 focus:outline-none focus:border-text-secondary transition-all font-mono uppercase font-bold tracking-wider text-text-primary"
//                 />
//                 <button className="h-10 px-4 rounded-xl bg-background hover:bg-slate-100 border border-border text-text-primary text-xs font-bold transition-colors cursor-pointer">
//                   Apply
//                 </button>
//               </div>
//             </div>

//             {/* CALL TO ACTION BUTTON SUBMIT ROUTER TARGET */}
//             <Link to="/contact" search={{ enroll: "ai-mern-stack" }} className="block mt-6">
//               <button className="w-full h-12 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm flex items-center justify-center gap-2 transition-transform duration-150 active:scale-[0.98] shadow-sm cursor-pointer">
//                 <span>Enroll In Engineering Program</span>
//                 <ArrowRight size={15} />
//               </button>
//             </Link>

//             <hr className="border-border/60 my-6" />

//             {/* DATA SYNC MATRIX SPECIFICATIONS METRICS */}
//             <div className="space-y-3.5">
//               <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block">
//                 Course Package Parameters
//               </span>
              
//               <div className="flex items-center justify-between text-xs font-medium text-text-secondary">
//                 <div className="flex items-center gap-2.5">
//                   <Video size={14} className="text-text-secondary/70" />
//                   <span>Interactive Architecture Video Lessons</span>
//                 </div>
//                 <span className="font-bold text-text-primary">32</span>
//               </div>

//               <div className="flex items-center justify-between text-xs font-medium text-text-secondary">
//                 <div className="flex items-center gap-2.5">
//                   <BookOpen size={14} className="text-text-secondary/70" />
//                   <span>Comprehensive Projects & Assignments</span>
//                 </div>
//                 <span className="font-bold text-text-primary">36</span>
//               </div>

//               <div className="flex items-center justify-between text-xs font-medium text-text-secondary">
//                 <div className="flex items-center gap-2.5">
//                   <Users size={14} className="text-text-secondary/70" />
//                   <span>Dedicated Discord Mentorship Channels</span>
//                 </div>
//                 <span className="font-bold text-accent">24/7</span>
//               </div>
//             </div>
//           </div>

//           {/* CONSULTATION BANNER CONVERT MODULE */}
//           <div className="bg-gradient-to-br from-text-primary to-slate-950 text-white rounded-2xl p-5 border border-slate-800 shadow-lg relative overflow-hidden group">
//             <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/10 blur-xl rounded-full pointer-events-none" />
            
//             <div className="space-y-4 relative z-10">
//               <div className="space-y-1.5">
//                 <h3 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
//                   <ShieldCheck size={14} className="text-accent" />
//                   Free Consulting Blueprint
//                 </h3>
//                 <p className="text-xs text-slate-400 leading-relaxed font-normal">
//                   Unsure if this program aligns with your career path? Arrange a free architecture map strategy call directly with a Lunar IT lead engineer.
//                 </p>
//               </div>

//               <Link to="/contact" search={{ purpose: "consultation" }} className="block">
//                 <button className="w-full h-10 rounded-xl bg-white/10 hover:bg-white text-white hover:text-text-primary text-xs font-bold flex items-center justify-center gap-2 transition-all border border-white/5 cursor-pointer">
//                   <MessageSquare size={13} />
//                   <span>Schedule Consultation</span>
//                 </button>
//               </Link>
//             </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }