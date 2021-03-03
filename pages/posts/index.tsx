import Link from 'next/link';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import styles from '../../styles/Posts.module.scss';

export default function Post({ allPostsData }) {
  return (
    <section className={`${''} ${''}`}>
      <h2 className={''}>Latest Posts</h2>
      <ul className={styles.postlist}>
        {allPostsData.map(({ id, date, title }) => (
          <li>
            <Link href={`/posts/${id}`}>
              <a>
                <h5 className='bp3-heading'>{title}</h5>
              </a>
            </Link>
            <br />
            {date}
          </li>
        ))}
      </ul>
    </section>
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
