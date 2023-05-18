"use client"

import { editCV } from "./services/editCV"

type Props = { cvId: string }

export function EditCVForm({ cvId }: Props) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)

    const content = String(formData.get("content"))

    if (!content) return console.error("No content")

    console.log(content)

    editCV({ content, cvId })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Save</button>
    </form>
  )
}
