'use client';

import 'ldrs/bouncy'
import {useEffect} from "react";

export default function Loading() {
    useEffect(() => {
        async function getLoader() {
            const { bouncy } = await import('ldrs')
            bouncy.register()
        }
        getLoader()
    }, [])
    return <l-bouncy color="white" size={50}></l-bouncy>
}