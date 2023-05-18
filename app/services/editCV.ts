type Params = {
  content: string
  cvId: string
}

export function editCV({ content, cvId }: Params) {
  return fetch(`https://api.infojobs.net/api/1/curriculum/${cvId}/cvtext`, {
    method: "PUT",
    body: JSON.stringify({ cvtext: content })
  })
}
