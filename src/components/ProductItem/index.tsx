import styles from './productItem.module.scss'

interface Props {
  src: string
}
const ProductItem = (props: Props) => {
  const { src } = props
  return (
    <div className={styles.productWrapper}>
      <img className={styles.productImg} src={src} alt='img' />
      <div className={styles.infoBox}>
        <p>허먼밀러</p>
        <p>에어론</p>
        <p>1,000,000</p>
      </div>
    </div>
  )
}

export default ProductItem
