import ENV from "@/config"

export function LogIn() {
  return (
    <a
      className="text-green-400 bg-slate-800 inline"
      href={ENV.INFOJOBS_AUTHORIZATION_URL}
    >
      Login
    </a>
  )
}
