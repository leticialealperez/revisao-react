import React from 'react';
import { Banner, TituloBanner } from '../components/Banner';
import img from '../assets/image-bg.jpg';

function Home() {
    return (
        <Banner image={img}>
            <TituloBanner cor='#19def0'>Aprendendo React</TituloBanner>
        </Banner>
    )
}

export { Home }