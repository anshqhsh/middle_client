import { ImgSrcs } from 'assets/image'
import ProductItem from 'components/ProductList/ProductItem'

import styles from './productList.module.scss'

const ProductList = () => {
  return (
    <div className={styles.productContainer}>
      {ImgSrcs.map((item) => (
        <ProductItem key={2} itemId={item.itemId} src={item.src} />
      ))}
    </div>
  )
}
export default ProductList
