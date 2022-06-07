import styles from './sliderItem.module.scss'

interface Props {
  src: string
}
const SliderItem = (props: Props) => {
  const { src } = props
  return (
    <div className={styles.sliderWrapper}>
      <img className={styles.sliderImg} src={src} alt='img' />
    </div>
  )
}

export default SliderItem
