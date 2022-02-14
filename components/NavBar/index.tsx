import { useEffect, useRef, useState } from "react";

import useScroll from "hooks/useScroll";
import style from "./style.module.css";

export default function NavBar({children}) {
    const [className, setClassName] = useState(style.top);

    const cont = useRef(null);

    useEffect(() => {
        const rect = cont.current.getBoundingClientRect();

        cont.current.style.height = `${rect.height}px`;
    }, [cont]);

    useScroll(() => {
        const rect = cont.current.getBoundingClientRect();

        setClassName(rect.y == 0 ? style.top : style.stick);
    });

    const getClassName = () => {
        return [
            style.navBar,
            className
        ].join(" ");
    };

    return (
        <div className={style.cont} ref={cont}>
            <nav className={getClassName()}>
                {children}
            </nav>
        </div>
    );
};