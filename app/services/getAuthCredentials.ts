import ENV from "@/config"
import { APICredentials as Authentication } from "@/types"

type Params = {
  verificationCode: string
}

export async function getAuthCredentials({
  verificationCode
}: Params): Promise<Authentication | null> {
  const URL = `https://www.infojobs.net/oauth/authorize?&grant_type=authorization_code&client_id=${
    ENV.INFOJOBS_API_CLIENT_ID
  }&client_secret=${encodeURIComponent(
    ENV.INFOJOBS_API_CLIENT_SECRET
  )}&redirect_uri=${ENV.INFOJOBS_API_CALLBACK_URL}&code=${verificationCode}`

  try {
    const response = await fetch(URL)
    const data = await response.json()
    if (!data) return null

    const {
      access_token: accessToken,
      expires_in: expiresIn,
      refresh_token: refreshToken,
      token_type: tokenType
    } = data

    if (!accessToken || !expiresIn || !refreshToken || !tokenType) return null

    return {
      accessToken,
      expiresIn,
      refreshToken,
      tokenType
    }
  } catch (message) {
    console.error(message)
    return null
  }
}
