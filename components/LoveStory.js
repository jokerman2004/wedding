function LoveStory() {
    try {
        const stories = [
            {
                title: "Pertemuan Pertama",
                date: "Januari 2020",
                description: "Kami bertemu pertama kali di kajian rutin masjid kampus. Subhanallah, Allah telah menakdirkan pertemuan yang indah ini.",
                icon: "fas fa-heart"
            },
            {
                title: "Ta'aruf",
                date: "Maret 2020", 
                description: "Setelah beberapa bulan saling mengenal dalam batas syar'i, kami memutuskan untuk melakukan ta'aruf dengan melibatkan kedua keluarga.",
                icon: "fas fa-handshake"
            },
            {
                title: "Khitbah",
                date: "Agustus 2020",
                description: "Alhamdulillah, kedua keluarga menyetujui dan kami resmi bertunangan. Masa persiapan menuju pernikahan yang penuh berkah.",
                icon: "fas fa-ring"
            },
            {
                title: "Pernikahan",
                date: "Desember 2024",
                description: "Hari yang ditunggu-tunggu tiba. Kami akan menyatukan langkah dalam ikatan suci pernikahan. Bismillah.",
                icon: "fas fa-mosque"
            }
        ];

        return (
            <section data-name="love-story" data-file="components/LoveStory.js" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Kisah Cinta Kami
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        {stories.map((story, index) => (
                            <div key={index} className="flex items-center mb-12 slide-up">
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mr-6">
                                    <i className={`${story.icon} text-xl`}></i>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2 text-purple-700">{story.title}</h3>
                                    <p className="text-purple-600 font-semibold mb-2">{story.date}</p>
                                    <p className="text-gray-600">{story.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('LoveStory component error:', error);
        reportError(error);
        return null;
    }
}
