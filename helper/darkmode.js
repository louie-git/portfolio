

const set = (value) => {
  localStorage.setItem('DarkMode', value)
  return
}

const get = () => {
  let data = false
  if(localStorage.getItem('DarkMode')){
    localStorage.getItem('DarkMode') === 'true' ? data = true : data = false
  }
  return data
}

export default {
  set,
  get
}