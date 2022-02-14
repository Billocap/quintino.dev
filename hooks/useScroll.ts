import { ScrollContext } from "components/ScrollController";
import { useContext, useEffect } from "react";

function useScroll(callback) {
    const scrolled = useContext(ScrollContext);

    useEffect(callback, [scrolled, callback]);
}

export default useScroll;