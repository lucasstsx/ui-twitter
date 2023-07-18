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
  Pencil,
} from '@phosphor-icons/react'
import twitterLogo from '../../assets/logo-twitter.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import './Sidebar.css'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="sidebar flex flex-col items-center gap-8 px-3 py-6 md:items-start md:px-6 md:py-5">
      <Image src={twitterLogo} alt={'Logo do twitter'} />

      <nav className="main-navigation flex flex-col gap-8">
        <Link className={pathname === '/' ? 'active' : ''} href="/">
          <House weight={pathname === '/' ? 'fill' : 'regular'} />
          <span>Home</span>
        </Link>
        <Link href="#">
          <Hash />
          <span>Explore</span>
        </Link>
        <Link href="#">
          <Bell />
          <span>Notifications</span>
        </Link>
        <Link href="#">
          <EnvelopeSimple />
          <span>Messages</span>
        </Link>
        <Link href="#">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </Link>
        <Link href="#">
          <FileText />
          <span>Lists</span>
        </Link>
        <Link href="#">
          <User />
          <span>Profile</span>
        </Link>
        <Link href="#">
          <DotsThreeCircle />
          <span>More</span>
        </Link>
      </nav>

      <button
        className=" new-tweet flex w-full justify-center rounded-full bg-[var(--twitter-blue)] p-4 text-[1.25rem] font-bold text-white hover:brightness-95"
        type="button"
      >
        <Pencil className="block h-6 w-6 md:hidden" />
        <span className="hidden md:block">Tweet</span>
      </button>
    </aside>
  )
}
