import { workExperience } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work & Research — AZ Krebs",
    description:
        "Professional work and research experience of AZ Krebs, including internships at Anduril Industries and Embraer, and research at MIT.",
};

export default function WorkPage() {
    return (
        <div className="relative">
            {/* Header */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />
                </div>
                <div className="relative mx-auto max-w-6xl px-6">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light opacity-0 animate-fade-in-up">
                        Experience
                    </p>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up delay-100 sm:text-5xl">
                        Work & Research
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-light opacity-0 animate-fade-in-up delay-200">
                        Professional experience and research positions across robotics,
                        defense technology, aerospace, and autonomous systems.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {workExperience.map((work, i) => (
                            <ProjectCard key={work.slug} project={work} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
