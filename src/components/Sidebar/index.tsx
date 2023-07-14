'use client'
import {
  House,
  Hash,
  Bell,
  EnvelopeSimple,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
} from '@phosphor-icons/react'
import twitterLogo from '../../assets/logo-twitter.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import './Sidebar.css'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="sidebar flex flex-col gap-8 px-6 py-5">
      <Image src={twitterLogo} alt={'Logo do twitter'} />

      <nav className="main-navigation flex flex-col gap-8">
        <Link className={pathname === '/' ? 'active' : ''} href="/">
          <House weight={pathname === '/' ? 'fill' : 'regular'} />
          Home
        </Link>
        <Link href="#">
          <Hash />
          Explore
        </Link>
        <Link href="#">
          <Bell />
          Notifications
        </Link>
        <Link href="#">
          <EnvelopeSimple />
          Messages
        </Link>
        <Link href="#">
          <BookmarkSimple />
          Bookmarks
        </Link>
        <Link href="#">
          <FileText />
          Lists
        </Link>
        <Link href="#">
          <User />
          Profile
        </Link>
        <Link href="#">
          <DotsThreeCircle />
          More
        </Link>
      </nav>

      <button
        className=" new-tweet flex w-full justify-center rounded-full bg-[var(--twitter-blue)] p-4 text-[1.25rem] font-bold text-white hover:brightness-95"
        type="button"
      >
        Tweet
      </button>
    </aside>
  )
}
