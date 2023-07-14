'use client'
import Image from 'next/image'
import twitterLogo from '../assets/logo-twitter.svg'
import Link from 'next/link'
import {
  House,
  Hash,
  Bell,
  EnvelopeSimple,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle,
} from '@phosphor-icons/react'

export default function Home() {
  return (
    <div className="layout mx-auto my-0 grid max-w-screen-lg grid-cols-[300px_1fr]">
      <aside className="sidebar flex flex-col gap-8 px-6 py-5">
        <Image src={twitterLogo} alt={'Logo do twitter'} />

        <nav className="main-navigation flex flex-col gap-8">
          <Link className="active" href="#">
            <House weight="fill" />
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

      <div className="content border-x border-[#ebeef0]">
        <main className="timeline">
          <div className="timeline-header flex items-center justify-between border-b border-[#ebeef0] px-5 py-6 text-xl font-bold">
            Home
            <Sparkle
              className="text-[var(--twitter-blue)]"
              width="1.5rem"
              height="1.5rem"
            />
          </div>

          <form className="new-tweet-form flex flex-col gap-2 px-5 py-6">
            <label className="flex items-center gap-3" htmlFor="tweet">
              <Image
                className="h-12 w-12 rounded-full"
                src="https://github.com/Lucassdev.png"
                alt="Foto de perfil do usuário"
                width={460}
                height={460}
              />
              <textarea
                className="flex flex-1 resize-none text-xl font-medium placeholder-[#5b7083af] focus:outline-none"
                id="tweet"
                placeholder="What's happening?"
              ></textarea>
            </label>

            <button
              className="ml-auto rounded-full bg-[var(--twitter-blue)] px-6 py-3 text-base font-black text-white hover:brightness-95"
              type="submit"
            >
              Tweet
            </button>
          </form>
          <div className="separator h-3 border-y border-[#ebeef0] bg-[#f7f9fa]" />
        </main>
      </div>
    </div>
  )
}
