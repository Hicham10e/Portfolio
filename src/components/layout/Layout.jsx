
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-bg text-white relative selection:bg-primary selection:text-black font-sans">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>

            <footer className="relative z-10 py-8 border-t border-glass-border mt-20 bg-bg-secondary/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Heffaf Mohamed Hicham.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
