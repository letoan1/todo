import React from 'react';
import ListItem from '../components/Items/ListItem';
import { variants } from './Home';

import { motion } from 'framer-motion';

export default function DoneTask() {
    return (
        <>
            <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
                <ListItem status="Done" />
            </motion.div>
        </>
    );
}
