import { urlFecth } from "../constants"

export const getUser = async (user) => {
  const response = await fetch(`${urlFecth}${user}`, { method: "GET" })
  
  if (response.ok) {
    return await response.json()
  }

  throw new Error('Something went wrong')
  

}
