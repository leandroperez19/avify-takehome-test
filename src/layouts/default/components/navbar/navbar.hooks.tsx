import { useEffect, useRef } from "react";

const useNavbar = () => {
    const nav = useRef<HTMLElement>(null);
    const previousScrollTop = 0;

    const scrollHandler = () => {
        const currentScrollTop = window.scrollY;

        const nav = document.querySelector("nav");
        if (!nav) return;

        if (currentScrollTop >= 30 && currentScrollTop > previousScrollTop) {
            nav.classList.add("navbar-transparent");
        } else {
            setTimeout(() => nav.classList.remove("navbar-transparent"), 10);
        }
    };

    useEffect(() => {
        const navbar = nav.current;
        scrollHandler();

        document.addEventListener("scroll", scrollHandler);

        return () => {
            document.removeEventListener("scroll", scrollHandler);
            navbar?.classList.remove("navbar-transparent");
        };
    }, []);

    return {
        nav,
    };
};

export default useNavbar;
