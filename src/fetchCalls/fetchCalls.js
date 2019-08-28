//dynamic fetch call 
export const serverCall = async (path, verb, content) => {
  // first send in the path: projects or palettes
  // can send in the id if selecting one
  // e.g path = project or project/1
  const url = `https://pallete-picker-de-pg.herokuapp.com/api/v1/${path}`
  // specify verb as GET, POST, PATCH or DELETE
    const options = {
      method: `${verb || "GET"}`,
      headers: {
        "Content-Type": "application/json"
      },
      //send in the content you wish to send in the body
      //leave empty for DELETE or generic GET
        body: JSON.stringify(content || undefined)
    };
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('There was an error retrieving projects at this time...')
    }
    const results = await response.json()
    //URL gets passed in 
    return results
  } catch (error) {
    throw Error(error.message)
  }
}