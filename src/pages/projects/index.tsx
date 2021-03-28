import Layout from '../../components/Layout/Layout';
import project from '../../../data/projects/this-site';
import styles from '../../styles/Projects.module.scss';

export default function Projects() {
  return (
    <Layout home={false}>
      <section className={styles.container}>
        <h2 className={''}>Projects</h2>
        <div>
          <h3>{project.title}</h3>
          <span>
            Tags:{' '}
            {project.tags.map((tag, idx) => (
              <em key={idx}>{tag + (idx != project.tags.length - 1 ? ', ' : '')} </em>
            ))}
          </span>

          <p>{project.summary}</p>
          <p>{project.description}</p>
        </div>
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
