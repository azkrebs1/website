import { aboutContent, projects, workExperience } from "@/data/content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — AZ Krebs",
    description:
        "Learn more about AZ Krebs — MIT Mechanical Engineering student passionate about robotics and autonomous systems.",
};

export default function AboutPage() {
    const stats = [
        { label: "Projects", value: projects.length.toString() },
        { label: "Work Positions", value: workExperience.length.toString() },
        { label: "University", value: "MIT" },
        { label: "Focus", value: "Robotics" },
    ];

    return (
        <div className="relative">
            {/* Header */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
                    <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
                </div>

                <div className="relative mx-auto max-w-6xl px-6">
                    <div className="grid gap-16 lg:grid-cols-5">
                        {/* Left: Content */}
                        <div className="lg:col-span-3">
                            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent-light opacity-0 animate-fade-in-up">
                                About
                            </p>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground opacity-0 animate-fade-in-up delay-100 sm:text-5xl">
                                {aboutContent.name}
                            </h1>
                            <p className="mb-4 text-xl font-medium text-accent-light opacity-0 animate-fade-in-up delay-200">
                                {aboutContent.headline}
                            </p>
                            <p className="mb-8 text-base leading-relaxed text-muted-light opacity-0 animate-fade-in-up delay-300">
                                {aboutContent.bio}
                            </p>

                            {/* Action buttons */}
                            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-400">
                                <a
                                    href={aboutContent.resumeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40 hover:-translate-y-0.5"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    Download Resume
                                </a>
                                <a
                                    href={`mailto:${aboutContent.email}`}
                                    className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-card-bg px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-card-hover hover:-translate-y-0.5"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Get in Touch
                                </a>
                            </div>
                        </div>

                        {/* Right: Stats */}
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, i) => (
                                    <div
                                        key={stat.label}
                                        className="glass-card rounded-xl p-6 text-center opacity-0 animate-fade-in-up"
                                        style={{
                                            animationDelay: `${200 + i * 100}ms`,
                                            animationFillMode: "forwards",
                                        }}
                                    >
                                        <p className="mb-1 text-2xl font-bold text-accent-light">
                                            {stat.value}
                                        </p>
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills / Interests */}
            <section className="py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                        Areas of Interest
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Robotics & Legged Locomotion",
                                desc: "Bio-inspired robots, dynamic locomotion, and control of legged systems.",
                                icon: "🤖",
                            },
                            {
                                title: "Autonomous Systems",
                                desc: "Self-driving vehicles, path planning, perception, and real-time decision making.",
                                icon: "🚗",
                            },
                            {
                                title: "Mechanical Design",
                                desc: "CAD, FEA, compliant mechanisms, and design for manufacturing.",
                                icon: "⚙️",
                            },
                            {
                                title: "Embedded Systems",
                                desc: "Microcontrollers, sensor integration, and real-time control systems.",
                                icon: "🔌",
                            },
                            {
                                title: "Defense & Aerospace",
                                desc: "Advanced technology for defense applications and next-gen aircraft.",
                                icon: "✈️",
                            },
                            {
                                title: "Numerical Computation",
                                desc: "Simulation, modeling, and computational analysis using MATLAB and Python.",
                                icon: "📊",
                            },
                        ].map((item, i) => (
                            <div
                                key={item.title}
                                className="glass-card rounded-xl p-6 opacity-0 animate-fade-in-up"
                                style={{
                                    animationDelay: `${i * 80}ms`,
                                    animationFillMode: "forwards",
                                }}
                            >
                                <span className="mb-3 block text-2xl">{item.icon}</span>
                                <h3 className="mb-2 text-base font-semibold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
