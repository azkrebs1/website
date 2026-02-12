import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-card-border bg-background">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
                <p className="text-sm text-muted">
                    © {new Date().getFullYear()} AZ Krebs. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link
                        href="/about"
                        className="text-sm text-muted transition-colors hover:text-accent-light"
                    >
                        About
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/1pTf9v6sX2tbM85DxfiQm--7MO05GuBiV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-accent-light"
                    >
                        Resume
                    </a>
                    <a
                        href="mailto:azkrebs@mit.edu"
                        className="text-sm text-muted transition-colors hover:text-accent-light"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
