export const getAllProductController = (req, res) => {
  const j = { name: "hello", price: 100 };
  return res.status(200).json(j);
};


