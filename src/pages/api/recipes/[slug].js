export default (req, res) => {
  const { slug } = req.query;
  console.log(slug);
  get_recipe(ticker, '5d');

  res.status(200).json({
    slug: slug,
  });
};
