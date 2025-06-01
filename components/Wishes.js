function Wishes() {
    try {
        const [wishes, setWishes] = React.useState([]);
        const [newWish, setNewWish] = React.useState({ name: '', message: '' });
        const [isSubmitting, setIsSubmitting] = React.useState(false);

        React.useEffect(() => {
            loadWishes();
        }, []);

        const loadWishes = async () => {
            try {
                const result = await trickleListObjects('wishes', 10, true);
                setWishes(result.items);
            } catch (error) {
                console.error('Error loading wishes:', error);
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            try {
                await trickleCreateObject('wishes', {
                    ...newWish,
                    submittedAt: new Date().toISOString()
                });
                
                setNewWish({ name: '', message: '' });
                loadWishes();
            } catch (error) {
                console.error('Error submitting wish:', error);
            }
            
            setIsSubmitting(false);
        };

        return (
            <section data-name="wishes" data-file="components/Wishes.js" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Ucapan & Doa
                    </h2>
                    
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4 text-purple-700">Kirim Ucapan</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Nama Anda"
                                    value={newWish.name}
                                    onChange={(e) => setNewWish({...newWish, name: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <textarea
                                    placeholder="Ucapan & Doa untuk mempelai"
                                    value={newWish.message}
                                    onChange={(e) => setNewWish({...newWish, message: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    rows="4"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
                                </button>
                            </form>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto">
                            <h3 className="text-2xl font-bold mb-4 text-purple-700">Ucapan Terbaru</h3>
                            <div className="space-y-4">
                                {wishes.map((wish) => (
                                    <div key={wish.objectId} className="bg-white p-4 rounded-lg shadow">
                                        <h4 className="font-semibold text-purple-600">{wish.objectData.name}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{wish.objectData.message}</p>
                                        <p className="text-gray-400 text-xs mt-2">
                                            {new Date(wish.createdAt).toLocaleDateString('id-ID')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Wishes component error:', error);
        reportError(error);
        return null;
    }
}
