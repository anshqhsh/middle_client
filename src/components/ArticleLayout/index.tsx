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
      <h1>{title}</h1>
      <p>{firstParagraph}</p>
      <br />
      <p>{secondParagraph}</p>
      <br />
      <p>{thirdParagraph}</p>
    </article>
  )
}

export default Article
