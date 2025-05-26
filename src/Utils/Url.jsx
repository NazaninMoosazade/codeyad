const getUrlParam = (param) => {
  const hash = location.hash; // مثلا: #page?foo=bar&baz=qux
  const parts = hash.split("?");
  if (parts.length < 2) return null;
  const params = new URLSearchParams(parts[1]);
  return params.get(param);
};

const setUrlParam = (param, value, customSearchParams = "") => {
  const hash = location.hash;
  const parts = hash.split("?");
  const baseHash = parts[0]; // مثل #page
  const searchParams = new URLSearchParams(customSearchParams || parts[1] || "");
  searchParams.set(param, value);
  location.hash = `${baseHash}?${searchParams.toString()}`;
};

const removeUrlParam = (param, customSearchParams = "") => {
  const hash = location.hash;
  const parts = hash.split("?");
  const baseHash = parts[0];
  const searchParams = new URLSearchParams(customSearchParams || parts[1] || "");
  if (searchParams.has(param)) {
    searchParams.delete(param);
    const newSearch = searchParams.toString();
    location.hash = newSearch ? `${baseHash}?${newSearch}` : baseHash;
  }
};

export { getUrlParam, setUrlParam, removeUrlParam };
