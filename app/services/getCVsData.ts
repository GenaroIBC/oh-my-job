import ENV from "@/config"

export function getCVsData() {
  const URL = `Basic ${ENV.INFOJOBS_API_TOKEN}`

  return fetch("https://api.infojobs.net/api/1/offer", {
    headers: {
      Authorization: URL
    }
  })
}
