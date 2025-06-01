function RSVP() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            attendance: '',
            guests: 1,
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitMessage, setSubmitMessage] = React.useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            try {
                await trickleCreateObject('rsvp', {
                    ...formData,
                    submittedAt: new Date().toISOString()
                });
                
                setSubmitMessage('Terima kasih! Konfirmasi kehadiran Anda telah diterima.');
                setFormData({ name: '', attendance: '', guests: 1, message: '' });
            } catch (error) {
                setSubmitMessage('Maaf, terjadi kesalahan. Silakan coba lagi.');
            }
            
            setIsSubmitting(false);
        };

        return (
            <section id="rsvp" data-name="rsvp" data-file="components/RSVP.js" className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Konfirmasi Kehadiran
                    </h2>
                    
                    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Kehadiran</label>
                                <select
                                    value={formData.attendance}
                                    onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                >
                                    <option value="">Pilih kehadiran</option>
                                    <option value="hadir">Hadir</option>
                                    <option value="tidak-hadir">Tidak Hadir</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Jumlah Tamu</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    value={formData.guests}
                                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Pesan (Opsional)</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    rows="3"
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Mengirim...' : 'Konfirmasi Kehadiran'}
                            </button>
                        </form>
                        
                        {submitMessage && (
                            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                                {submitMessage}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('RSVP component error:', error);
        reportError(error);
        return null;
    }
}
