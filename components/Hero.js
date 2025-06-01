function Hero() {
    try {
        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 opacity-90"></div>
                
                <div className="relative z-10 text-center text-white px-4 fade-in">
                    <div className="mb-8 float">
                        <i className="fas fa-heart text-6xl text-pink-300 heart-beat"></i>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-bold dancing-script mb-4 gradient-text">
                        Akhi & Ukhti
                    </h1>
                    
                    <p className="text-xl md:text-2xl mb-8 slide-up">
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
                    </p>
                    
                    <div className="text-lg mb-8 bounce-in">
                        <p>Ar-Rum: 21</p>
                    </div>
                    
                    <div className="animate-bounce">
                        <i className="fas fa-chevron-down text-2xl"></i>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
