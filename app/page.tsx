import { getCVsData } from "@/services/getCVsData"
import { LogIn } from "./components/LogIn"
import { EditCVForm } from "./EditCVForm"

export default async function App() {
  const cv = await getCVsData()

  return (
    <main className="overflow-auto">
      <LogIn />
      <section className="grid grid-cols-3 gap-2">
        <code className="bg-slate-300 overflow-auto">
          <pre>{JSON.stringify(cv, null, 2)}</pre>
        </code>
        <EditCVForm cvId={"saad"} />
      </section>
    </main>
  )
}
