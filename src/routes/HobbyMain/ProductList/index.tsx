import ProductItem from 'components/ProductItem'
import styles from './productList.module.scss'

const items = [
  {
    itemId: 'itemId1',
    src: 'https://kream-phinf.pstatic.net/MjAyMTExMDNfMTc1/MDAxNjM1OTE2NjgwNzg2.8dFHlfL9rdg9eD3Y30FMe5ufyxftbHFoZP5--W6VM0Yg.-4fLaDSTBFw-ZSBbQrYv1g98RZQmgDlQq-I2rOGWHMAg.PNG/a_1c6e37b668c640b8b1294ee459182b9e.png?type=m_webp',
  },
  {
    itemId: 'itemId2',
    src: 'https://kream-phinf.pstatic.net/MjAyMjA1MjVfMjY0/MDAxNjUzNDQ4MDcwMzQ0.3fL0AOv7Gh9OKk4EYX2p3fr26nzVwArYmIib2IK0_jUg.vJc7wxKVM2_f8TxX0gPPm5HwVDRz60Vrt8O1qqH-onQg.PNG/a_153003442ec14f1b9028df563a52ea5e.png?type=m_webp',
  },
  {
    itemId: 'itemId3',
    src: 'https://kream-phinf.pstatic.net/MjAyMjA1MjNfMjg2/MDAxNjUzMjkzODE1NjA2.Bbbzt-8FBsA9r1qxZGOUblN8LubUc-O0oZswtR3HP7cg.P-wDEr4gvKl0vqzI65rZHhJnuBngdzCgu6pF7UKOADsg.PNG/a_75585a90c13b45e188caa9aa16a91ed9.png?type=m_webp',
  },

  {
    itemId: 'itemId4',
    src: 'https://kream-phinf.pstatic.net/MjAyMjA1MjNfMTgx/MDAxNjUzMjkzNzk0NzU0.tLzKQEJ79hYVdC4yP30d398rwXNFFBTQ3l_QFdJhOk0g.fMXpuNu4ouh7J0cX4dUbt4465Wbth2ntNLqUUGi3iUMg.PNG/a_a9a2583dacd24da8bba13a9c0b1c6bfc.png?type=m_webp',
  },
  {
    itemId: 'itemId5',
    src: 'https://kream-phinf.pstatic.net/MjAyMjA0MjlfMjYz/MDAxNjUxMjIzODcxODM4.LW6fYHcJwpfDF9B_n_dHfFjtJYiD8f9ty8URst4Z4k4g.xzn7bHGYAmTTrN75eqcEbs2Q4PzjqbhpnSuChkJOeowg.PNG/a_8d433e328c44403aa9b5df2045a0e62e.png?type=m_webp',
  },
]

const ProductList = () => {
  return (
    <div className={styles.productContainer}>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <ProductItem key={item.itemId} itemId={item.itemId} src={item.src} />
      ))}
    </div>
  )
}
export default ProductList
