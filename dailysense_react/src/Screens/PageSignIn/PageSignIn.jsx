import React from 'react'
import { Mask } from '../PageSignUp/Mask/Mask';
export const PageSignIn = ({ SignInHeight, SignInWidth, backgroundColor }) => {

    const style = {
        height: SignInHeight + 'vh',
        width: SignInWidth + '%',
        backgroundColor: backgroundColor,
    }

    return (
        <div className="PageSignInContainer" style={style}>
            <Mask opacity={0.8} />
        </div>
    )
}
