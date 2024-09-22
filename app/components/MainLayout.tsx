'use client';

import NameTitle from "@/app/components/NameTitle";
import Footer from "@/app/components/footer";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion"
export default function MainLayout({children}: any) {
    const [isOnHomepage, setIsOnHomepage] = useState<Boolean | undefined>();
    const pathname = usePathname()

    useEffect(() => {
        setIsOnHomepage(pathname == "/");
    }, [pathname])

    const variants = {
        loading: {
            opacity: 0
        },
        loaded: {
            opacity: 1
        }
    }
    return <motion.div className="min-h-full flex flex-col" initial={{opacity: 0}} variants={variants} animate={isOnHomepage == undefined ? 'loading' : 'loaded'}>
        <NameTitle onHomepage={!!isOnHomepage}/>
        {!isOnHomepage && <div className="flex flex-grow flex-col items-center h-full justify-center">
        {children}
    </div>}
        <Footer/>
    </motion.div>
}

