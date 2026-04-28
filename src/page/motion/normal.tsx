import type { Variants } from "framer-motion";

export const section: Variants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

export const card_variants: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.5
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 }
    },
};

export const header_variants: Variants = {
    hidden: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.7
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 }
    },
};