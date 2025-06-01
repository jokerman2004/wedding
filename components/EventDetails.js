function EventDetails() {
    try {
        const events = [
            {
                title: "Akad Nikah",
                date: "Sabtu, 31 Desember 2024",
                time: "08:00 - 10:00 WIB",
                location: "Masjid Al-Ikhlas",
                address: "Jl. Merdeka No. 123, Jakarta Selatan",
                mapUrl: "https://maps.google.com/?q=Masjid+Al-Ikhlas+Jakarta"
            },
            {
                title: "Resepsi",
                date: "Sabtu, 31 Desember 2024", 
                time: "11:00 - 15:00 WIB",
                location: "Gedung Serbaguna Al-Hikmah",
                address: "Jl. Bahagia No. 456, Jakarta Selatan",
                mapUrl: "https://maps.google.com/?q=Gedung+Serbaguna+Al-Hikmah+Jakarta"
            }
        ];

        return (
            <section id="event" data-name="event-details" data-file="components/EventDetails.js" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Detail Acara
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {events.map((event, index) => (
                            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 shadow-lg slide-up">
                                <h3 className="text-2xl font-bold mb-4 text-purple-700 dancing-script">{event.title}</h3>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center">
                                        <i className="fas fa-calendar text-purple-500 w-6"></i>
                                        <span className="ml-3">{event.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-clock text-purple-500 w-6"></i>
                                        <span className="ml-3">{event.time}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-map-marker-alt text-purple-500 w-6"></i>
                                        <span className="ml-3">{event.location}</span>
                                    </div>
                                    <div className="flex items-start">
                                        <i className="fas fa-home text-purple-500 w-6 mt-1"></i>
                                        <span className="ml-3">{event.address}</span>
                                    </div>
                                </div>
                                
                                <a 
                                    href={event.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
                                >
                                    <i className="fas fa-map-marked-alt mr-2"></i>
                                    Lihat Peta
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('EventDetails component error:', error);
        reportError(error);
        return null;
    }
}
