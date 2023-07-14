'use client'
import { Sparkle } from '@phosphor-icons/react'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="timeline-header flex items-center justify-between border-b border-[#ebeef0] px-5 py-6 text-xl font-bold">
      {title}
      <Sparkle
        className="text-[var(--twitter-blue)]"
        width="1.5rem"
        height="1.5rem"
      />
    </div>
  )
}
