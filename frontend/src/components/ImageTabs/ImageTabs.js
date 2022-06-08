import React, {useState} from 'react';
import styles from "./image_tabs.module.css"
import {BASE_URL} from "../../constants";

const ImageTabs = ({images}) => {

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {images.map((image, index) =>
                    <div className={activeIndex === index ? styles.tabs_item_active : styles.tabs_item}
                         onClick={() => setActiveIndex(index)} key={index}>
                        <img src={`${BASE_URL}/${image.image}`} alt="photo" className={styles.tabs_image}/>
                    </div>
                )}
            </div>
            <img src={`${BASE_URL}/${images[activeIndex].image}`} className={styles.promo_img} alt="photo"/>
        </div>
    );
}

export default ImageTabs;
