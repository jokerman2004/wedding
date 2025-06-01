function Countdown() {
    try {
        const [timeLeft, setTimeLeft] = React.useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });

        React.useEffect(() => {
            const targetDate = new Date('2024-12-31T10:00:00');
            
            const timer = setInterval(() => {
                const now = new Date().getTime();
                const distance = targetDate.getTime() - now;
                
                if (distance > 0) {
                    setTimeLeft({
                        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((distance % (1000 * 60)) / 1000)
                    });
                }
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        return (
            <section data-name="countdown" data-file="components/Countdown.js" className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8 dancing-script gradient-text">
                        Menuju Hari Bahagia
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-lg bounce-in">
                            <div className="text-3xl font-bold">{timeLeft.days}</div>
                            <div className="text-sm">Hari</div>
                        </div>
                        <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white p-6 rounded-lg bounce-in">
                            <div className="text-3xl font-bold">{timeLeft.hours}</div>
                            <div className="text-sm">Jam</div>
                        </div>
                        <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-6 rounded-lg bounce-in">
                            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                            <div className="text-sm">Menit</div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-6 rounded-lg bounce-in">
                            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                            <div className="text-sm">Detik</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Countdown component error:', error);
        reportError(error);
        return null;
    }
}
