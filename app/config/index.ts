const ENV = {
  INFOJOBS_API_CLIENT_ID: process.env.INFOJOBS_API_CLIENT_ID,
  INFOJOBS_API_CLIENT_SECRET: process.env.INFOJOBS_API_CLIENT_SECRET,
  INFOJOBS_API_CALLBACK_URL: process.env.INFOJOBS_API_CALLBACK_URL,
  INFOJOBS_API_TOKEN: process.env.INFOJOBS_API_TOKEN
}

Object.entries(ENV).forEach(([key, value]) => {
  if (value === undefined) {
    throw new Error(`${key} environment variable is not defined`)
  }
})

export default ENV
