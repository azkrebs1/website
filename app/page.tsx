import Link from "next/link";
import { projects, workExperience, aboutContent } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl">
            {/* Greeting tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card-bg px-4 py-2 text-sm text-muted-light opacity-0 animate-fade-in-up">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              MIT Mechanical Engineering
            </div>

            {/* Name */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight opacity-0 animate-fade-in-up delay-100 sm:text-7xl">
              <span className="block text-foreground">{aboutContent.name.split(" ")[0]}</span>
              <span className="gradient-text">{aboutContent.name.split(" ").slice(1).join(" ")}</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-4 text-xl font-medium text-muted-light opacity-0 animate-fade-in-up delay-200 sm:text-2xl">
              {aboutContent.headline}
            </p>

            {/* Bio */}
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted opacity-0 animate-fade-in-up delay-300 sm:text-lg">
              {aboutContent.bio}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-400">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                View Projects
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={aboutContent.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-card-hover hover:-translate-y-0.5"
              >
                Download Resume
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
                Portfolio
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-muted-light transition-colors hover:text-accent-light sm:flex"
            >
              View all
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-muted-light transition-all hover:border-accent/50 hover:text-accent-light"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="relative py-24">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-light">
                Experience
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Work & Research
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-1 text-sm font-medium text-muted-light transition-colors hover:text-accent-light sm:flex"
            >
              View all
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workExperience.slice(0, 6).map((work, i) => (
              <ProjectCard key={work.slug} project={work} index={i} />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-muted-light transition-all hover:border-accent/50 hover:text-accent-light"
            >
              View all experience →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-card-border bg-card-bg p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[80px]" />
            </div>
            <div className="relative text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Interested in working together?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-muted-light">
                I&apos;m always open to discussing new projects, research
                opportunities, and engineering challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${aboutContent.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40 hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
                <a
                  href={aboutContent.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-card-hover hover:-translate-y-0.5"
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
