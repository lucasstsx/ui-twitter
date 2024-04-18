'use client'
import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

interface TweetProps {
  content: string
}

export default function Tweet({ content }: TweetProps) {
  return (
    <Link
      className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#ebeef0] px-5 py-6"
      href="/tweet"
    >
      <Image
        className="h-12 w-12 rounded-full"
        src="https://github.com/lucasstsx.png"
        alt="Foto de perfil do usuário"
        width={460}
        height={460}
      />

      <div className="tweet-content flex flex-col gap-2">
        <div className="tweet-content-header flex items-center gap-1">
          <strong>Lucas Silva</strong>
          <span className="text-sm text-[#89a2b8]">@lucass_dev</span>
        </div>

        <p className="whitespace-break-spaces break-all leading-5">{content}</p>

        <div className="tweet-content-footer mt-3 flex items-center justify-between min-[420px]:justify-normal min-[420px]:gap-12">
          <button
            className="flex items-center gap-2 border-0 bg-transparent text-sm text-[#89a2b8] hover:text-[var(--twitter-blue)]"
            type="button"
          >
            <ChatCircle className="h-5 w-5" />
            20
          </button>
          <button
            className="flex items-center gap-2 border-0 bg-transparent text-sm text-[#89a2b8] hover:text-[var(--twitter-blue)]"
            type="button"
          >
            <ArrowsClockwise className="h-5 w-5" />
            20
          </button>
          <button
            className="flex items-center gap-2 border-0 bg-transparent text-sm text-[#89a2b8] hover:text-[var(--twitter-blue)]"
            type="button"
          >
            <Heart className="h-5 w-5" />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}
