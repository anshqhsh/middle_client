import { ImgSrcs } from 'assets/image'
import ProductItem from 'components/ProductList/ProductItem'

import styles from './productList.module.scss'

const ProductList = () => {
  return (
    <div className={styles.productContainer}>
      <h2>추천 제품</h2>
      <div className={styles.productItemWrapper}>
        {ImgSrcs.map((item) => (
          <ProductItem key={`${item.itemId} key`} itemId={item.itemId} src={item.src} />
        ))}
      </div>
    </div>
  )
}
export default ProductList
