const getUrlParam = (param) => {
    const splitedHash = location.hash.split("?");
  
    const urlParams = new URLSearchParams(splitedHash[1]);
    return urlParams.get(param);
  };
  
  const setUrlParam = (param, value, customSearchParams = "") => {
    value = `${value}`;
    const splitedHash = location.hash.split("?");
  
    const searchParams = new URLSearchParams(
      customSearchParams || splitedHash[1]
    );
  
    searchParams.set(param, value);
  
    history.pushState(
      `${location.pathname}${splitedHash[0]}?${searchParams.toString()}`
    );
  };
  
  const removeUrlParam = (param, customSearchParams = "") => {
    const splitedHash = location.hash.split("?");
    const searchParams = new URLSearchParams(
      customSearchParams || splitedHash[1]
    );
  
    if (searchParams.has(param)) {
      searchParams.delete(param);
  
      history.pushState(
        {},
        "",
        `${location.pathname}${splitedHash[0]}?${searchParams.toString()}`
      );
    }
  };
  
  export { getUrlParam, setUrlParam, removeUrlParam };
  
  