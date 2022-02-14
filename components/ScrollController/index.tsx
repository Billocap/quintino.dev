import { createContext, useEffect, useState } from "react";

import styles from './style.module.css';

const ScrollContext = createContext(false);

export default function ScrollController({children}) {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = () => {
        setScrolled(true);
    };

    useEffect(() => {
        if (scrolled) setScrolled(false);
    }, [scrolled]);

    return (
        <div onScroll={onScroll} className={styles.container}>
            <ScrollContext.Provider value={scrolled}>
                {children}
            </ScrollContext.Provider>
        </div>
    );
};

export {
    ScrollContext
};