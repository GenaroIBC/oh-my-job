import ENV from "@/config"

export function getCVsData() {
  const Authorization = `Basic ${ENV.INFOJOBS_API_TOKEN}`

  return fetch("https://api.infojobs.net/api/2/curriculum", {
    headers: {
      Authorization
    }
  }).then(response => response.json())
}
