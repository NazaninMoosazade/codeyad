const getFromLocal = (key) => {
    const getItem = localStorage.getItem(`codeyad-${key}`);
    return getItem ? JSON.parse(getItem) : null
  }
  const setToLocal = (key, value) => {
    localStorage.setItem(`codeyad-${key}`, JSON.stringify(value));
  }
  const removeFromLocal = (key) => {
    localStorage.removeItem(`codeyad-${key}`);
  }
  const getFromSession = (key) => {
    const getItem = sessionStorage.getItem(`codeyad-${key}`);
    return getItem ? JSON.parse(getItem) : null
  }
  const setToSession = (key, value) => {
    sessionStorage.setItem(`codeyad-${key}`, JSON.stringify(value));
  }
  
  export  {
    getFromLocal,
    setToLocal,
    removeFromLocal,
    getFromSession,
    setToSession
  }