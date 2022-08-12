import React, { Children, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './carousel.css';

const Carousel = ({ children }) => {

    const containerRef = useRef();
    const intervalRef = useRef(null);
    const [current, setCurrent] = useState(1);
    const [translateX, setTranslateX] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            if (active === true) {
                setTimeout(() => {
                    setActive(false);
                }, 1000);
            }
        }
        return () => { isMounted = false };
    }, [active]);

    const actionHandler = useCallback((mode) => {

        containerRef.current.style.transitionDuration = "1s";

        if (active === false) {
            if (mode === "previous") {
                if (current <= 1) {
                    setTranslateX(0);
                    setCurrent(children.length);

                } else {
                    setTranslateX(containerRef.current.clientWidth * (current - 1));
                    setCurrent((previous) => --previous);
                };

            } else if (mode === "next") {
                if (current >= children.length) {
                    setTranslateX(containerRef.current.clientWidth * (children.length + 1));
                    setCurrent(1);

                } else {
                    setTranslateX(containerRef.current.clientWidth * (current + 1));
                    setCurrent((next) => ++next);
                };
            };

            setActive(true);
        }

    }, [active, current, children.length]);

    useEffect(() => {

        const transitionEnd = () => {

            if (current <= 1) {
                containerRef.current.style.transitionDuration = "0ms";
                setTranslateX(containerRef.current.clientWidth * current);
            };

            if (current >= children.length) {
                containerRef.current.style.transitionDuration = "0ms";
                setTranslateX(containerRef.current.clientWidth * children.length);
            };

        };

        document.addEventListener("transitionend", transitionEnd);

        return () => {
            document.removeEventListener("transitionend", transitionEnd);
        };

    }, [current, children]);

    useEffect(() => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        };

        intervalRef.current = setInterval(() => {
            actionHandler("next");
        }, 3000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            };
        };

    }, [actionHandler]);

    const slides = useMemo(() => {

        if (children.length > 1) {
            let items = Children.map(children, (child, index) => (
                <li key={index} className="Slide">
                    {child}
                </li>
            ));

            return [
                <li key={children.length + 1} className="Slide">
                    {children[children.length - 1]}
                </li>,
                ...items,
                <li key={children.length + 2} className="Slide">
                    {children[0]}
                </li>,
            ]
        };

        return (
            <li className="Slide">
                {children[0]}
            </li>
        );

    }, [children]);

    useLayoutEffect(() => {
        setTranslateX(containerRef.current.clientWidth * current);
    }, []);

    return (
        <section className="Root">

            <ul
                ref={containerRef}
                className="Container"
                style={{ transform: `translate3d(${-translateX}px, 0, 0)`, }}>
                {slides}
            </ul>
            <button onClick={() => actionHandler("previous")} className="Btn BtnLeft">{"<"}</button>
            <button onClick={() => actionHandler("next")} className="Btn BtnRight">{">"}</button>

        </section>
    );

};

export default Carousel;