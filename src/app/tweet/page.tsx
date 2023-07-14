import Header from '@/components/Header'
import Separator from '@/components/Separator'
import Tweet from '@/components/Tweet'
import Image from 'next/image'

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso!',
]

export default function Page() {
  return (
    <>
      <main className="timeline">
        <Header title="Tweet" />

        <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam pariatur quae alias tenetur, explicabo itaque ex, quisquam libero, hic maiores maxime voluptatum deleniti quasi nam nostrum nihil ipsa. Ut?" />

        <Separator />

        <form className="answer-tweet-form flex items-center gap-2 border-b border-[#ebeef0] px-5 py-6">
          <label className="flex flex-[1] items-center gap-3" htmlFor="answer">
            <Image
              className="h-12 w-12 rounded-full"
              src="https://github.com/Lucassdev.png"
              alt="Foto de perfil do usuário"
              width={460}
              height={460}
            />
            <textarea
              className="flex resize-none text-xl font-medium placeholder:text-[#5B7083] focus:outline-none"
              id="answer"
              placeholder="Tweet your answer"
            ></textarea>
          </label>

          <button
            className="rounded-full bg-[var(--twitter-blue)] px-6 py-2 text-base font-black text-white hover:brightness-95"
            type="submit"
          >
            Answer
          </button>
        </form>

        {answers.map((answer) => {
          return <Tweet key={answer} content={answer} />
        })}
      </main>
    </>
  )
}
