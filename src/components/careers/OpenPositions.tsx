import {
  Briefcase,
  MapPin,
  Clock,
} from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Kathmandu",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
  },
  {
    title: "UI/UX Designer",
    type: "Internship",
    location: "Kathmandu",
  },
];

export default function OpenPositions() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-5xl font-extrabold">
          Open Positions
        </h2>

        <div className="space-y-6 mt-16">

          {jobs.map((job) => (
            <div
              key={job.title}
              className="
              p-8
              border
              rounded-3xl
              hover:shadow-xl
              transition
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                <div>
                  <h3 className="text-2xl font-bold">
                    {job.title}
                  </h3>

                  <div className="flex gap-5 mt-4 text-slate-500">

                    <span className="flex items-center gap-2">
                      <Briefcase size={16}/>
                      {job.type}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={16}/>
                      {job.location}
                    </span>
                  </div>
                </div>

                <button
                  className="
                  px-6
                  py-3
                  rounded-xl
                  bg-[var(--primary)]
                  text-white
                  "
                >
                  Apply Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}