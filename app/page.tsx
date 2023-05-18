import { getCVsData } from "@/services/getCVsData"

export default async function App() {
  const data = await getCVsData()
    .then(res => res.json())
    .catch(err => console.log(err))

  return (
    <main>
      <h1>OhMyJob</h1>

      <section className="grid grid-cols-2 gap-2">
        <code className="bg-slate-300 overflow-auto">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </section>
    </main>
  )
}
