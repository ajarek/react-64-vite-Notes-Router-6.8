export const saveStorage = (newData,name) => {
  const localStorageData = localStorage.getItem(name)
  let data
  if (localStorageData === null) {
      data = []
  } else {
      data = JSON.parse(localStorageData)
  }
  data.push(newData)
  localStorage.setItem(name, JSON.stringify(data))
}
export const fetchStorage=(key)=>{
  return JSON.parse(localStorage.getItem(key))
}