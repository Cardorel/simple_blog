import React from 'react'
import Link from 'next/link'
import { AddPostLink, LogoLink, NavMain } from './layout.styled_components'

export default function Navigation() {
    return (
        <header>
            <NavMain>
                <Link href="/">
                   <LogoLink>Simple blog</LogoLink>
                </Link>
                <Link href="/Posts/New">
                   <AddPostLink>Add Post</AddPostLink>
                </Link>
            </NavMain>
        </header>
    )
}

