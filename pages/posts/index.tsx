import Link from 'next/link';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import styles from './Posts.module.scss';
import Layout from '../../components/Layout/Layout';

export default function Post({ allPostsData }) {
  return (
    <Layout>
      <section className={`${''} ${''}`}>
        <h2 className={''}>Latest Posts</h2>
        <ul className={styles.postlist}>
          {allPostsData.map(({ id, date, title }, i) => (
            <li key={i}>
              <Link href={`/posts/${id}`}>
                <a>
                  <h5>{title}</h5>
                </a>
              </Link>
              <span className={styles.postlist_date}>{date}</span>
              <hr />
              {/* <br /> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
