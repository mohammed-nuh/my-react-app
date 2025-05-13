import { useState } from 'react';
import bulb_off from '../src/assets/bulb_off.png';
import bulb_on from '../src/assets/bulb_on.png';
import switch_on from '../src/assets/switch-on.png';
import switch_off from '../src/assets/switch-off.png';
import './Toggle.css';

function Toggle() {
    let [isOn, setIsOn] = useState(false);

    return (
        <section className='toggleSection'>
            <h2 className='pt-3'>Status: {isOn ? <span className='text-success'>ON</span> : <span className='text-danger'>OFF</span>}</h2>
            <div className='toggleSectionContainer'>
                <img src={isOn ? switch_on : switch_off} width={'300px'} onClick={() => setIsOn(!isOn)} />
                <img src={isOn ? bulb_on : bulb_off} width={'300px'} />
            </div>
        </section>
    )
}

export default Toggle;