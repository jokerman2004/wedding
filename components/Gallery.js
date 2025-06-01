function Gallery() {
    try {
        const [selectedImage, setSelectedImage] = React.useState(null);
        
        const photos = [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
            'https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=400&h=300&fit=crop'
        ];

        return (
            <section id="gallery" data-name="gallery" data-file="components/Gallery.js" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Galeri Foto
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {photos.map((photo, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer">
                                <img 
                                    src={photo} 
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-64 object-cover"
                                    onClick={() => setSelectedImage(photo)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <i className="fas fa-search-plus text-xl"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {selectedImage && (
                        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                            <div className="relative max-w-4xl max-h-full">
                                <img src={selectedImage} alt="Selected" className="max-w-full max-h-full object-contain" />
                                <button 
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        reportError(error);
        return null;
    }
}
