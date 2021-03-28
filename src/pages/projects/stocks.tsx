type Data = any;

export default function Stocks(props: { data: any[] }) {
  return (
    <>
      <div>This will contain research information.</div>
      <div>This will be some listings of various contact methods and links</div>
      <h2>{props.data.length > 0 ? props.data[0].symbol : 'No Data'}</h2>
      <ul>
        {props.data.map((datum, idx) => {
          return <li key={idx}>{datum.close}</li>;
        })}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  let url = `${process.env.IEX_API_URL}/stock/${'AAPL'}/chart/${'90d'}?token=${
    process.env.IEX_TOKEN
  }
  `;
  const res = await fetch(url);
  const data: Data = await res.json();
  // console.log(data);

  return {
    props: {
      data,
    },
  };
};
