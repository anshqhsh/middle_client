import { IArticle } from 'states/article'
import styles from './article.module.scss'

export interface Props {
  data: IArticle
}

const Article = ({ data }: Props) => {
  const { title, firstParagraph, secondParagraph, thirdParagraph } = data
  return (
    <article className={styles.article}>
      <h2>{title}</h2>
      <p className={styles.firstParagraph}>{firstParagraph}</p>
      <br />
      <p>{secondParagraph}</p>
      <br />
      <p>{thirdParagraph}</p>
    </article>
  )
}

export default Article
