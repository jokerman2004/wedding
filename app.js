function App() {
    try {
        const [showWelcome, setShowWelcome] = React.useState(true);
        const [currentSection, setCurrentSection] = React.useState('home');
        const [autoScroll, setAutoScroll] = React.useState(false);

        const handleEnterInvitation = () => {
            setShowWelcome(false);
        };

        React.useEffect(() => {
            if (!showWelcome) {
                const sections = ['home', 'couple', 'gallery', 'event', 'rsvp'];
                let currentIndex = 0;

                const autoScrollInterval = setInterval(() => {
                    if (autoScroll && currentIndex < sections.length - 1) {
                        currentIndex++;
                        const nextSection = sections[currentIndex];
                        document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' });
                        setCurrentSection(nextSection);
                    } else if (autoScroll) {
                        currentIndex = 0;
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        setCurrentSection('home');
                    }
                }, 5000);

                return () => clearInterval(autoScrollInterval);
            }
        }, [autoScroll, showWelcome]);

        React.useEffect(() => {
            if (!showWelcome) {
                const handleScroll = () => {
                    const sections = ['home', 'couple', 'gallery', 'event', 'rsvp'];
                    const scrollPosition = window.scrollY + 100;

                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const { offsetTop, offsetHeight } = element;
                            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                setCurrentSection(section);
                                break;
                            }
                        }
                    }
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }
        }, [showWelcome]);

        if (showWelcome) {
            return <WelcomePage onEnter={handleEnterInvitation} />;
        }

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <AudioPlayer isActive={!showWelcome} />
                <Header />
                
                <div className="fixed top-20 right-4 z-40">
                    <button
                        onClick={() => setAutoScroll(!autoScroll)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                            autoScroll 
                                ? 'bg-pink-500 text-white' 
                                : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                    >
                        <i className={`fas ${autoScroll ? 'fa-pause' : 'fa-play'} mr-2`}></i>
                        {autoScroll ? 'Pause' : 'Auto Scroll'}
                    </button>
                </div>

                <Hero />
                <Countdown />
                <CoupleProfile />
                <LoveStory />
                <Gallery />
                <EventDetails />
                <RSVP />
                <Wishes />
                <Gifts />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return (
            <div className="min-h-screen flex items-center justify-center bg-red-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Terjadi Kesalahan</h1>
                    <p className="text-red-500">Silakan refresh halaman</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
