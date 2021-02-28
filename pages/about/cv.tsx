import cv from '../../lib/cv';
import styles from './CV.module.scss';
import remark from 'remark';
import html from 'remark-html';

export default function CV(props) {
  console.log(props);
  return (
    <>
      <div className={styles.cv} dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
    </>
  );
}

export async function getStaticProps() {
  const cvData = await cv();
  const processedContent = await remark().use(html).process(cvData.content);
  const contentHtml = processedContent.toString();
  return {
    props: {
      contentHtml,
    },
  };
}
