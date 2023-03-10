export const saveStorage = (newData) => {
  const localStorageData = localStorage.getItem('data')
  let data
  if (localStorageData === null) {
      data = []
  } else {
      data = JSON.parse(localStorageData)
  }
  data.push(newData)
  localStorage.setItem('data', JSON.stringify(data))
}