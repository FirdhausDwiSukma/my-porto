export const Footer = () => {
    return (
        <footer className="bg-white py-8 text-center border-t-2 border-[#000]/10">
            <div className="container mx-auto px-6">
                <p className="text-xs font-bold text-[#000]/60 mb-4 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Firdhaus Dwi Sukma. All rights reserved.
                </p>
                <div className="flex justify-center gap-3">
                    {[
                        { label: "LinkedIn", href: "https://linkedin.com/in/firdhausdwisukma" },
                        { label: "GitHub", href: "https://github.com/FirdhausDwiSukma" },
                        { label: "Behance", href: "https://behance.net/usdhauss" },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#000]/25 px-4 py-1.5 text-xs font-extrabold text-[#000]/60 uppercase tracking-widest hover:border-[#000] hover:text-[#000] hover:bg-[#FFE500] transition-all"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
