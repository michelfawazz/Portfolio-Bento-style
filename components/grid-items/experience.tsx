"use client"
import { GridItemInterface } from "@/config/site-config";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Experience = ({ item }: { item: GridItemInterface }) => {
    const [selectedId, setSelectedId] = useState(null)

    return (
        <><motion.div layoutId={"1"} onClick={() => setSelectedId("1")}>
            <motion.h5>{item.title}</motion.h5>
            <motion.h2>by</motion.h2>
        </motion.div>
        
        <AnimatePresence>

                {selectedId && (
                    <motion.div layoutId={selectedId}>
                        <motion.h5>hi</motion.h5>
                        <motion.h2>by</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence >
            
            </>
    );

};

export default Experience;