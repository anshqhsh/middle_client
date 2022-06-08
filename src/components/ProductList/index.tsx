import { ImgSrcs } from 'assets/image'
import ProductItem from 'components/ProductList/ProductItem'

import styles from './productList.module.scss'

const ProductList = () => {
  // console.log(useAppSelector(getYoutube))
  // dispatch(setYoutube({ q: 'd', maxResult: 3 }))
  // console.log('pro')
  return (
    <div className={styles.productContainer}>
      {ImgSrcs.map((item) => (
        <ProductItem key={`${item.itemId} key`} itemId={item.itemId} src={item.src} />
      ))}
    </div>
  )
}
export default ProductList
