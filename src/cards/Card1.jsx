import React from 'react'

// Import all images
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";
import Icon7 from '../assets/Icon7.png'
import Icon8 from '../assets/Icon8.png'

const workItems = [
  { id: '01', title: 'Summer Collection', image: Icon1, description: 'Vibrant dance collection showcasing summer performances' },
  { id: '02', title: 'Mobile App Design', image: Icon2, description: 'Modern mobile interface for dance class bookings' },
  { id: '03', title: 'Training Program', image: Icon3, description: 'Structured training course for professional dancers' },
  { id: '04', title: 'Studio Branding', image: Icon4, description: 'Complete brand identity for the dance academy' },
  { id: '05', title: 'Performance Video', image: Icon5, description: 'Professional dance performance documentation' },
  { id: '06', title: 'Exhibition Design', image: Icon6, description: 'Interactive exhibition for dance showcase' },
  { id: '07', title: 'Workshop Materials', image: Icon7, description: 'Educational materials for master classes' },
  { id: '08', title: 'Community Events', image: Icon8, description: 'Community dance events and outreach programs' },
]

const Card1 = ({ viewMode = 'grid' }) => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-6 py-16">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90vw] gap-6">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-300"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-sm text-muted-foreground mb-1">Project</p>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    MARUPI {item.id}
                  </span>
                  <svg
                    className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7l10 10M7 17L17 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      MARUPI {item.id}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                </div>

                <svg
                  className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7l10 10M7 17L17 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Card1
