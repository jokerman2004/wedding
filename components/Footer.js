function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold dancing-script mb-4">Akhi & Ukhti</h3>
                            <p className="text-lg mb-4">
                                "Barangsiapa yang Allah kehendaki kebaikan baginya, maka Allah akan memberikan pemahaman agama kepadanya"
                            </p>
                            <p className="text-sm opacity-75">- HR. Bukhari</p>
                        </div>
                        
                        <div className="flex justify-center space-x-6 mb-8">
                            <a href="#" className="text-2xl hover:text-pink-300 transition-colors">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-pink-300 transition-colors">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-pink-300 transition-colors">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-2xl hover:text-pink-300 transition-colors">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        
                        <div className="border-t border-white/20 pt-8">
                            <p className="text-sm opacity-75 mb-2">
                                © 2024 Akhi & Ukhti Wedding. All rights reserved.
                            </p>
                            <p className="text-sm opacity-75">
                                Diproduksi oleh <span className="font-semibold">Dokter Desain Indonesia</span>
                            </p>
                            <div className="mt-4">
                                <button 
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all"
                                >
                                    <i className="fas fa-arrow-up mr-2"></i>
                                    Kembali ke Atas
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
