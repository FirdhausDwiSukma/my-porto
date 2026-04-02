export const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] py-8 text-center">
            <div className="container mx-auto px-6">
                <p className="text-sm font-bold text-[#F5F0E8]/60 mb-4">
                    &copy; {new Date().getFullYear()} Firdhaus Dwi Sukma. All rights reserved.
                </p>
                <div className="flex justify-center gap-3">
                    {["LinkedIn", "GitHub"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="border-2 border-[#F5F0E8]/20 px-4 py-1.5 text-sm font-black text-[#F5F0E8]/60 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
