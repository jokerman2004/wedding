function AudioPlayer({ isActive }) {
    try {
        const [isPlaying, setIsPlaying] = React.useState(false);
        const audioRef = React.useRef(null);

        React.useEffect(() => {
            if (audioRef.current) {
                audioRef.current.volume = 0.3;
                audioRef.current.loop = true;
            }
        }, []);

        React.useEffect(() => {
            if (isActive && audioRef.current) {
                const playAudio = async () => {
                    try {
                        await audioRef.current.play();
                        setIsPlaying(true);
                    } catch (error) {
                        console.log('Auto-play prevented by browser');
                    }
                };
                playAudio();
            }
        }, [isActive]);

        const togglePlay = async () => {
            if (audioRef.current) {
                if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                } else {
                    try {
                        await audioRef.current.play();
                        setIsPlaying(true);
                    } catch (error) {
                        console.log('Playback failed');
                    }
                }
            }
        };

        if (!isActive) return null;

        return (
            <div data-name="audio-player" data-file="components/AudioPlayer.js" className="fixed bottom-4 left-4 z-40">
                <button
                    onClick={togglePlay}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all shadow-lg"
                >
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                </button>
                
                <audio
                    ref={audioRef}
                    src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
                    preload="auto"
                />
            </div>
        );
    } catch (error) {
        console.error('AudioPlayer component error:', error);
        reportError(error);
        return null;
    }
}
