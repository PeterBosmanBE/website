'use client';
import {AnimationControls, AnimationProps, motion} from "framer-motion"
import Link from "next/link";

type NameTitleType = {
    onHomepage: Boolean;
}
export default function NameTitle(props: NameTitleType) {

    const variants = {
        header: {
        },
        center: {
            className: "flex-grow flex"
        }
    }

    return <motion.div variants={variants} animate={props.onHomepage ? 'header' : 'center'} className={`text-white typewriter ${props.onHomepage && 'nameTitle'} ${!props.onHomepage && ''} w-full flex justify-center`}>
        <Link href="/about">
            <h1>Peter Bosman</h1>
        </Link>
    </motion.div>
}