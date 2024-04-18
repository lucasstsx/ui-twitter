'use client'
import Header from '@/components/Header'
import Separator from '@/components/Separator'
import Tweet from '@/components/Tweet'
import { PaperPlaneRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { FormEvent, useState, KeyboardEvent } from 'react'

export default function Page() {
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!',
  ])

  const [newAnswer, setNewAnswer] = useState('')

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    newAnswer.length === 0 || !newAnswer.trim()
      ? alert('Digite algo!')
      : setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      newAnswer.length === 0 || !newAnswer.trim()
        ? alert('Digite algo!')
        : setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <>
      <main className="timeline">
        <Header title="Tweet" />

        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam pariatur quae alias tenetur, explicabo itaque ex, quisquam libero, hic maiores maxime voluptatum deleniti quasi nam nostrum nihil ipsa. Ut?" />

        <Separator />

        <form
          onSubmit={createNewAnswer}
          className="answer-tweet-form flex items-center gap-2 border-b border-[#ebeef0] px-5 py-6"
        >
          <label className="flex flex-1 items-center gap-3" htmlFor="answer">
            <Image
              className="h-12 w-12 rounded-full"
              src="https://github.com/lucasstsx.png"
              alt="Foto de perfil do usuário"
              width={460}
              height={460}
            />
            <textarea
              className="flex flex-1 resize-none text-sm font-medium placeholder:text-[#5B7083] focus:outline-none md:text-xl"
              id="answer"
              placeholder="Tweet your answer"
              onChange={(event) => {
                setNewAnswer(event.target.value)
              }}
              onKeyDown={handleHotKeySubmit}
              value={newAnswer}
            ></textarea>
          </label>

          <button
            className="rounded-full bg-[var(--twitter-blue)] px-6 py-2 text-base font-black text-white hover:brightness-95"
            type="submit"
          >
            <PaperPlaneRight className="block h-6 w-6 md:hidden" />
            <span className="hidden md:block">Answer</span>
          </button>
        </form>

        {answers.map((answer, index) => {
          return <Tweet key={index} content={answer} />
        })}
      </main>
    </>
  )
}
