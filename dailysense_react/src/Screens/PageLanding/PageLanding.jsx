import './Landing.css';
import {Landingheader} from './landingheader/Landingheader';
import { LandingBody } from './landingBody/LandingBody';
const Logo = require('../../Assets/LOGOS DAILYSENSE/BLUE PNG.png');

export default function PageLanding({LandingHeight,LandingWidth, backgroundColor}){
    const style = {
        height: LandingHeight + 'vh',
        width: LandingWidth + '%',
        backgroundColor: backgroundColor,
    }

    return (
        <div className="landing-container" style={style}>
            <Landingheader logo={Logo} Headerheight={20} Headerwidth={100} widthbtn={26} />
            <LandingBody BodyHeight={80} BodyWidth={100} />
        </div>
    );
}