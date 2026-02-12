import { projects } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — AZ Krebs",
    description:
        "Academic and personal engineering projects by AZ Krebs, spanning robotics, autonomous systems, compliant mechanisms, and more.",
};

export default function ProjectsPage() {
    return (
        <div className="relative">
            {/* Header */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
                </div>
                <div className="relative mx-auto max-w-6xl px-6">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light opacity-0 animate-fade-in-up">
                        Portfolio
                    </p>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up delay-100 sm:text-5xl">
                        Projects
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-light opacity-0 animate-fade-in-up delay-200">
                        A collection of academic and personal engineering projects — from
                        autonomous vehicles to bio-inspired robotics and everything in
                        between.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, i) => (
                            <ProjectCard key={project.slug} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
