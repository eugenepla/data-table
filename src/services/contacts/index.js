async function fetchContacts() {
  const response = await fetch(`https://randomuser.me/api/?results=40`, {  //TODO
    method: 'GET'
  })
  const jsonResponse = await response.json()
  const data = jsonResponse.results.map((item, index) => ({ ...item, id: index }))
  return {
    data
  }
}

export const contacts = {
  fetchContacts
}

