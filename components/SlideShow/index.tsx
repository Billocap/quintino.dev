import styles from './style.module.css';

const slides = [
    "ExZBMRV",
    "mdRgBMW",
    "vYymvmZ"
];

export default function SlideShow() {
    const style = {
        backgroundImage: `url("https://codepen.io/Pikachurin/pen/${slides[0]}/image/large.png")`
    };

    return (
        <div className={styles.slide} style={style}>
        </div>
    );
};