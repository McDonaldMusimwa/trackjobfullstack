import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="flex-1 min-h-screen bg-white from-slate-900 via-slate-800 to-slate-900">
      <div>
        <div>
          


          {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between container mx-auto px-8 py-20 gap-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Stay Organized <br /> Track Your Job Hunt With Ease
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Manage applications, interviews, notes, and offers — all in one beautiful dashboard.
                Let your job search be structured, efficient, and stress-free.
              </p>
              <button className="rounded-xl px-8 py-6 text-lg font-semibold flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
            </div>


            <div className="flex-1 flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-6 shadow-xl border border-gray-200 w-full max-w-md">
                <div className="h-56 bg-gray-200 rounded-xl animate-pulse"></div>
                <p className="text-center text-gray-500 mt-4 text-sm">Dashboard Preview Placeholder</p>
              </div>
            </div>
          </section>


          {/* Features */}
          <section id="features" className="container mx-auto px-8 py-20">
            <h3 className="text-3xl font-bold text-center mb-12">What You Get</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Application Tracking",
                  desc: "Track every application stage from applied to offer.",
                },
                {
                  title: "Interview Scheduling",
                  desc: "Never miss an interview — reminders + timeline view.",
                },
                {
                  title: "Notes & Progress",
                  desc: "Save insights, recruiter feedback, and job requirements.",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition bg-white"
                >
                  <h4 className="text-xl font-semibold mb-3">{i.title}</h4>
                  <p className="text-gray-600">{i.desc}</p>
                </div>
              ))}
            </div>
          </section>


          {/* Call to Action */}
          <section className="bg-[#4f772d] text-white py-20 text-center rounded-lg">
            <h3 className="text-3xl font-bold mb-6">Ready to level up your job search?</h3>
            <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto">
              Start organizing like a pro and land your next role faster.
            </p>
            <button className="rounded-xl px-8 py-6 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-200">
              Start Free
            </button>
          </section>


          {/* Footer */}
       
        </div>
      </div>
    </div >
  )
}
