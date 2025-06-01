function WelcomePage({ onEnter }) {
    try {
        const [isLoading, setIsLoading] = React.useState(false);

        const handleEnter = () => {
            setIsLoading(true);
            setTimeout(() => {
                onEnter();
            }, 1500);
        };

        return (
            <div data-name="welcome-page" data-file="components/WelcomePage.js" className="fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-2xl mx-auto">
                    <div className="mb-8 fade-in">
                        <img 
                            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" 
                            alt="Wedding Couple Cartoon" 
                            className="w-64 h-64 mx-auto rounded-full object-cover border-4 border-white shadow-2xl float"
                        />
                    </div>
                    
                    <div className="mb-8 slide-up">
                        <h1 className="text-5xl md:text-7xl font-bold dancing-script mb-4 gradient-text">
                            Akhi & Ukhti
                        </h1>
                        <p className="text-xl md:text-2xl mb-4">
                            Mengundang Anda dalam acara pernikahan kami
                        </p>
                        <p className="text-lg opacity-90">
                            Sabtu, 31 Desember 2024
                        </p>
                    </div>
                    
                    <div className="mb-8 bounce-in">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
                            <p className="text-lg italic mb-2">
                                "Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah."
                            </p>
                            <p className="text-sm opacity-75">- QS. Adz-Dzariyat: 49</p>
                        </div>
                    </div>
                    
                    <div className="bounce-in">
                        <button
                            onClick={handleEnter}
                            disabled={isLoading}
                            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 disabled:opacity-50 shadow-lg"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Membuka Undangan...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <i className="fas fa-envelope-open mr-2"></i>
                                    Buka Undangan
                                </div>
                            )}
                        </button>
                    </div>
                    
                    <div className="mt-8 text-sm opacity-75">
                        <p>Klik tombol di atas untuk membuka undangan</p>
                        <p className="mt-2">
                            <i className="fas fa-volume-up mr-2"></i>
                            Pastikan suara aktif untuk pengalaman terbaik
                        </p>
                    </div>
                </div>
                
                <div className="absolute bottom-4 right-4 text-white/50 text-xs">
                    <p>Dokter Desain Indonesia</p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('WelcomePage component error:', error);
        reportError(error);
        return null;
    }
}
