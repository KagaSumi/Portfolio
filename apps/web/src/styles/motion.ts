import { easeOut } from "framer-motion";

export const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.1,
            ease: easeOut,
        },
    }),
};
