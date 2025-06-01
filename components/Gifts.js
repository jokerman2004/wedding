function Gifts() {
    try {
        const [activeTab, setActiveTab] = React.useState('bank');
        const [copyMessage, setCopyMessage] = React.useState('');

        const copyToClipboard = (text, type) => {
            navigator.clipboard.writeText(text);
            setCopyMessage(`${type} berhasil disalin!`);
            setTimeout(() => setCopyMessage(''), 2000);
        };

        const bankAccounts = [
            { bank: 'BCA', number: '1234567890', name: 'Akhi & Ukhti' },
            { bank: 'Mandiri', number: '0987654321', name: 'Akhi & Ukhti' }
        ];

        const digitalWallets = [
            { name: 'GoPay', number: '081234567890', qr: 'https://via.placeholder.com/200x200?text=QR+GoPay' },
            { name: 'OVO', number: '081234567890', qr: 'https://via.placeholder.com/200x200?text=QR+OVO' }
        ];

        return (
            <section data-name="gifts" data-file="components/Gifts.js" className="py-16 bg-gradient-to-br from-pink-100 to-purple-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 dancing-script gradient-text">
                        Hadiah Pernikahan
                    </h2>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-gray-600">
                                Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
                                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                            </p>
                        </div>
                        
                        <div className="flex justify-center mb-8">
                            <div className="bg-white rounded-lg p-1 shadow-lg">
                                <button
                                    onClick={() => setActiveTab('bank')}
                                    className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'bank' ? 'bg-purple-500 text-white' : 'text-purple-500'}`}
                                >
                                    Rekening Bank
                                </button>
                                <button
                                    onClick={() => setActiveTab('digital')}
                                    className={`px-6 py-2 rounded-lg transition-all ${activeTab === 'digital' ? 'bg-purple-500 text-white' : 'text-purple-500'}`}
                                >
                                    Dompet Digital
                                </button>
                            </div>
                        </div>
                        
                        {activeTab === 'bank' && (
                            <div className="grid md:grid-cols-2 gap-6">
                                {bankAccounts.map((account, index) => (
                                    <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-purple-700 mb-4">{account.bank}</h3>
                                            <p className="text-gray-600 mb-2">{account.name}</p>
                                            <p className="text-xl font-mono font-bold mb-4">{account.number}</p>
                                            <button
                                                onClick={() => copyToClipboard(account.number, `Nomor rekening ${account.bank}`)}
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                                            >
                                                <i className="fas fa-copy mr-2"></i>
                                                Salin Nomor
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {activeTab === 'digital' && (
                            <div className="grid md:grid-cols-2 gap-6">
                                {digitalWallets.map((wallet, index) => (
                                    <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                                        <h3 className="text-2xl font-bold text-purple-700 mb-4">{wallet.name}</h3>
                                        <img src={wallet.qr} alt={`QR ${wallet.name}`} className="w-48 h-48 mx-auto mb-4 border rounded-lg" />
                                        <p className="text-xl font-mono font-bold mb-4">{wallet.number}</p>
                                        <button
                                            onClick={() => copyToClipboard(wallet.number, `Nomor ${wallet.name}`)}
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                                        >
                                            <i className="fas fa-copy mr-2"></i>
                                            Salin Nomor
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {copyMessage && (
                            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
                                {copyMessage}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gifts component error:', error);
        reportError(error);
        return null;
    }
}
