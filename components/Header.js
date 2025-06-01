function Header() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        
        const scrollToSection = (sectionId) => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        };

        return (
            <header data-name="header" data-file="components/Header.js" className="fixed top-0 w-full z-50 glass-effect">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <div className="text-white font-bold text-xl dancing-script">
                            Akhi & Ukhti
                        </div>
                        
                        <nav className="hidden md:flex space-x-6">
                            <button onClick={() => scrollToSection('home')} className="text-white hover:text-pink-300 transition-colors">Home</button>
                            <button onClick={() => scrollToSection('couple')} className="text-white hover:text-pink-300 transition-colors">Couple</button>
                            <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-pink-300 transition-colors">Gallery</button>
                            <button onClick={() => scrollToSection('event')} className="text-white hover:text-pink-300 transition-colors">Event</button>
                            <button onClick={() => scrollToSection('rsvp')} className="text-white hover:text-pink-300 transition-colors">RSVP</button>
                        </nav>

                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white"
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    {isOpen && (
                        <nav className="md:hidden mt-4 pb-4">
                            <div className="flex flex-col space-y-2">
                                <button onClick={() => scrollToSection('home')} className="text-white hover:text-pink-300 transition-colors py-2">Home</button>
                                <button onClick={() => scrollToSection('couple')} className="text-white hover:text-pink-300 transition-colors py-2">Couple</button>
                                <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-pink-300 transition-colors py-2">Gallery</button>
                                <button onClick={() => scrollToSection('event')} className="text-white hover:text-pink-300 transition-colors py-2">Event</button>
                                <button onClick={() => scrollToSection('rsvp')} className="text-white hover:text-pink-300 transition-colors py-2">RSVP</button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
