import React from 'react';
import Lottie from 'react-lottie';
import './lottie.css';

export const Scroll = ({animationData,AnimationHeight, AnimationWidth, autoplay, loop}) => {

    const defaultOptions = {
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='animation'>
            <Lottie
                options={defaultOptions}
                height={AnimationHeight}
                width={AnimationWidth}
            />
        </div>
    )
}
