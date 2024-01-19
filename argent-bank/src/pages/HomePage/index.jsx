import React from 'react';
import '../../style/main.css';

import Banner from '../../components/Banner';
import FeatureItem from '../../components/FeatureItem';

import FeaturesItemData from '../../data/FeaturesItemData.json';

import iconChat from '../../assets/img/icon-chat.png';
import iconMoney from '../../assets/img/icon-money.png';
import iconSecurity from '../../assets/img/icon-security.png';

/* Home page */
function HomePage () {

    const imageData = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return (
        <main>
            <Banner />
            <section className="features">
                <h2 className='sr-only'>Features</h2>
                {/* Return items from json file with map */}
                {FeaturesItemData.map((data) => (
                    /* Return item component */
                    < FeatureItem 
                        key={data.id}
                        image={imageData[data.image]}
                        descriptionImage={data.descriptionImage}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </section>
        </main>
    )
}

export default HomePage;