import { useEffect, useRef, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const experiences = [
  {
    duration: "July 2025 - Current",
    organisation: "Tata Consultancy Services",
    position: "System Engineer",
    type: "work",
  },
  {
    duration: "Jan 2025 - June 2025",
    organisation: "DigiValet",
    position: "Software Engineer",
    type: "work",
  },
  {
    duration: "July 2024 - Aug 2024",
    organisation: "Ardent Computech Pvt Ltd",
    position: "Software Intern",
    type: "work",
  },
  {
    duration: "Jul 2021 - Jun 2025",
    organisation: "Shri Vaishnav Institute of Information Technology",
    position: "Bachelor of Technology - CSE",
    type: "education",
  },
]

// Utility function to merge classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const timelineRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineTop = timelineRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const scrollTrigger = windowHeight * 0.6

      itemRefs.current.forEach((item, index) => {
        if (!item) return
        const itemTop = item.getBoundingClientRect().top

        if (itemTop < scrollTrigger) {
          setActiveIndex(index)
        }
      })

      // Reset if scrolled past
      if (timelineTop > scrollTrigger) {
        setActiveIndex(-1)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="2xl:px-24 md:px-20 px-4 min-h-screen w-full pt-10 bg-gradient-to-bl from-[#F8DAC5] via-[#D8A76D] to-[#FFDFBD] dark:bg-none dark:bg-black py-20">
      <div className="max-w-4xl">
        <h1
          className="md:text-7xl text-4xl dark:text-white text-darkbrown font-tommy mb-4"
          data-aos="fade-right"
        >
          Experience
        </h1>
        <p 
          className="dark:text-white text-darkbrown font-sans text-md md:text-lg mb-10"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          My professional journey and education
        </p>

        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-darkbrown/30 dark:bg-border" />

          {/* Animated progress line */}
          <div
            className="absolute left-8 top-0 w-[2px] bg-darkbrown dark:bg-accent transition-all duration-500 ease-out"
            style={{
              height:
                activeIndex >= 0
                  ? `${((activeIndex + 1) / experiences.length) * 100}%`
                  : "0%",
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="relative pl-20"
              >
                {/* Dot */}
                <div
                  className={cn(
                    "absolute left-[26px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-500",
                    index <= activeIndex
                      ? "bg-golden dark:bg-accent border-darkbrown dark:border-accent scale-100 shadow-lg shadow-darkbrown/50 dark:shadow-accent/50"
                      : "bg-white dark:bg-background border-darkbrown/30 dark:border-border scale-75"
                  )}
                />

                {/* Content card */}
                <div
                  className={cn(
                    " dark:bg-card border border-darkbrown/50 dark:border-border rounded-lg p-6 transition-all duration-700 backdrop-blur-sm",
                    index <= activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-40 translate-x-4"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-darkbrown dark:text-foreground mb-1 font-tommy">
                        {exp.position}
                      </h3>
                      <p className="text-darkbrown dark:text-accent font-bold font-sans">
                        {exp.organisation}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-darkbrown/10 dark:bg-muted text-darkbrown dark:text-muted-foreground border border-darkbrown/20 dark:border-border whitespace-nowrap self-start">
                      {exp.type === "work" ? "💼 Work" : "🎓 Education"}
                    </span>
                  </div>
                  <p className="text-sm text-darkbrown/70 dark:text-muted-foreground font-mono">
                    {exp.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}