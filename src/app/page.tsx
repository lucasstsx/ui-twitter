export default function Home() {
  return (
    <div className="layout mx-auto my-0 grid max-w-screen-lg grid-cols-[300px_1fr]">
      <aside className="sidebar flex flex-col gap-8 px-6 py-5">sidebar</aside>
      <div className="content border-x border-[#ebeef0]">content</div>
    </div>
  )
}
