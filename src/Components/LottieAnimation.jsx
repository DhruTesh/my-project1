import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';

const LottieAnimation = ({ onAnimationComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationComplete(); // Call the function to hide the animation after 3 seconds
        }, 3000); // Adjust the duration as needed

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [onAnimationComplete]);

    return (
        <Player
            src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
            className="player"
            loop={false} // Set to false if you want it to play only once
            autoplay
        />
    );
};

export default LottieAnimation;