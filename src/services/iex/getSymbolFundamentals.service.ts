export default async function (symbol: string, range: string) {
  const url = `${process.env.IEX_API_URL}/stock/${symbol}/chart/${range}?token=${process.env.IEX_TOKEN}
      `;
  const res = await fetch(url);
}
