// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { ticker } = req.query;
  console.log(ticker);
  get_ticker_data(ticker, '5d');

  res.status(200).json({
    ticker,
    data: [1, 2, 3, 4, 4],
  });
};

const get_ticker_data = (symbol, range) => {
  let url = `${process.env.IEX_API_URL}/stock/${symbol}/chart/${range}?token=${process.env.IEX_TOKEN}
  `;
  // console.log(url);
  // fetch(`${process.env.IEX_API}/stock/${symbol}/chart/${range}?token=${process.env.IEX_KEY}
  // `).then((response) => {
  //   console.log('response', response);
  // });
};
