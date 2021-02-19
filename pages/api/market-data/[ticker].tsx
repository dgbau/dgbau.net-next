// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { ticker } = req.query;
  console.log(req);
  res.status(200).json({ ticker, data: [1, 2, 3, 4, 4] });
};
