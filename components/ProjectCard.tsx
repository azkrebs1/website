import { Project } from "@/data/content";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <div
            className="glass-card group relative overflow-hidden rounded-xl p-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" }}
        >
            {/* Gradient accent line at top */}
            <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent-light">
                        {project.title}
                    </h3>
                    <svg
                        className="mt-1 h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H7M17 7v10"
                        />
                    </svg>
                </div>

                {project.subtitle && (
                    <p className="mb-2 text-sm font-medium text-accent-light/70">
                        {project.subtitle}
                    </p>
                )}

                {project.description && (
                    <p className="mb-4 text-sm leading-relaxed text-muted-light">
                        {project.description}
                    </p>
                )}

                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
