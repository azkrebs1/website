"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-card-border shadow-lg shadow-black/10"
                    : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight transition-colors hover:text-accent-light"
                >
                    <span className="gradient-text">AZ</span>
                    <span className="ml-1 text-foreground">Krebs</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                        ? "text-accent-light"
                                        : "text-muted-light hover:text-foreground hover:bg-card-bg"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent" />
                                )}
                            </Link>
                        );
                    })}
                    <a
                        href="https://drive.google.com/file/d/1pTf9v6sX2tbM85DxfiQm--7MO05GuBiV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-light transition-all hover:border-accent hover:bg-accent/20"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-card-bg md:hidden"
                    aria-label="Toggle menu"
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden border-b border-card-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-none"
                    }`}
            >
                <div className="flex flex-col gap-1 px-6 pb-6">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${isActive
                                        ? "bg-accent/10 text-accent-light"
                                        : "text-muted-light hover:bg-card-bg hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <a
                        href="https://drive.google.com/file/d/1pTf9v6sX2tbM85DxfiQm--7MO05GuBiV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent-light transition-all hover:border-accent hover:bg-accent/20"
                    >
                        Resume ↗
                    </a>
                </div>
            </div>
        </header>
    );
}
