function CoupleProfile() {
    try {
        return (
            <section id="couple" data-name="couple-profile" data-file="components/CoupleProfile.js" className="py-16 bg-gradient-to-br from-pink-100 to-purple-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Mempelai
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="text-center slide-up">
                            <div className="mb-6">
                                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop" 
                                     alt="Akhi" className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2 dancing-script text-purple-700">Akhi</h3>
                            <p className="text-gray-600 mb-4">Putra dari Bapak Ahmad & Ibu Siti</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Seorang yang taat beragama dan mencintai ilmu pengetahuan. 
                                Bekerja sebagai software engineer dan aktif dalam kegiatan dakwah.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="#" className="text-blue-500 hover:text-blue-600 text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-500 text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-blue-600 hover:text-blue-700 text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div className="text-center slide-up">
                            <div className="mb-6">
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop" 
                                     alt="Ukhti" className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2 dancing-script text-purple-700">Ukhti</h3>
                            <p className="text-gray-600 mb-4">Putri dari Bapak Usman & Ibu Fatimah</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Seorang muslimah yang sholehah dan berjiwa sosial tinggi. 
                                Bekerja sebagai guru dan aktif dalam kegiatan pengajian.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="#" className="text-pink-500 hover:text-pink-600 text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-500 text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-blue-600 hover:text-blue-700 text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CoupleProfile component error:', error);
        reportError(error);
        return null;
    }
}
