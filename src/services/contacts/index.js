async function fetchContacts() {
  const response = await fetch('https://randomuser.me/api/?results=10', {  //TODO
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const jsonResponse = await response.json()
  return {
    data: jsonResponse.results
  }
}

export const contacts = {
  fetchContacts
}

