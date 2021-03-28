import Link from 'next/link';
import Layout from '../../components/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <section className={`${''} ${''}`}>
        <h2 className={''}>About</h2>
        <p>
          I am a computer programmer, graduate student and hobbyist currently living in Northern New
          Mexico. I enjoy data visualization, electronic music, and consider myself an amateur
          complex systems researcher.
        </p>
        <p>
          Dabbling in crypotcurrency, I am currently very interested in ADA the Cardano network and
          am looking to get involved with projects developing applications for the Cardano
          ecosystem.
        </p>
        <p>Please feel free to contact me via my LinkedIn page!</p>

        <p>
          <Link href='/cv'>
            <a>Resume</a>
          </Link>
        </p>
        <p>
          <a href='linkedin.com'>LinkedIn</a>
        </p>

        {/* <ul className={styles.postlist}>
          {allPostsData.map(({ id, date, title }) => (
            <li>
              <Link href={`/posts/${id}`}>
                <a>
                  <h5>{title}</h5>
                </a>
              </Link>
              <span className={styles.postlist_date}>{date}</span>
              <hr />
              <br />
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
}
