'use client'
import {Studio} from 'sanity'
import config from '@/sanity.config'

export default function Home() {
    return (
        <Studio config={config} />
    )
}