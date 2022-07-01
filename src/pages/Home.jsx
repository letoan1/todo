import ListItem from '../components/Items/ListItem';

import { motion } from 'framer-motion';

export const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' },
    },
};

export default function Home() {
    return (
        <>
            <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
                <ListItem />
            </motion.div>
        </>
    );
}
