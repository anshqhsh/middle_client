import styles from './article.module.scss'

interface Props {
  title: string
  firstParagraph: string
  secondParagraph?: string
  thirdParagraph?: string
}

const Article = ({ title, firstParagraph, secondParagraph, thirdParagraph }: Props) => {
  return (
    <article className={styles.article}>
      <h2>{title}</h2>
      <p className={styles.firstParagraph}>- {firstParagraph}</p>
      <br />
      <p>{secondParagraph}</p>
      <br />
      <p>{thirdParagraph}</p>
    </article>
  )
}

export default Article
