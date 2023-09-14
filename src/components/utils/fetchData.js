export const Options = {
  method: "GET",
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
