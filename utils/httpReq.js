const fetchData = async () => {
  const response = await fetch("data.json");
  const data = await response.json(); // Convert to json and parse data.
  return data;
};

export { fetchData };
