export const Footer = () => {
    return (
        <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <div className="container mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} Firdhaus Dwi Sukma. All rights reserved.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
};
