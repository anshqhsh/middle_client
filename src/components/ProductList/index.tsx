import ProductItem from 'components/ProductItem'

import styles from './productList.module.scss'

const items = [
  {
    itemId: '허먼밀러 에어론',
    src: 'https://lh4.googleusercontent.com/qgOdGeq82Esk-3IL28jD4tS_adglplvBe6QgfDZyJcoOCeLYvb2tTfB1uhOkevlYo91xKzQs5MSh6q6Ea1me=w2216-h2488',
  },
  {
    itemId: '벨킨 애플워치 스탠드',
    src: 'https://lh4.googleusercontent.com/fh12NsS5Hf5iqVjjF2vWG4PvA8iCG_WTMAoQqbosTVKqe3OY-AMnHod1f9o_wU0ILeN7bDBWowG6lliyI5Jn=w1078-h2374',
  },
  {
    itemId: '맥북 16인치',
    src: 'https://lh6.googleusercontent.com/RcdL73EDszZQB9gLVq8sgfX1Z37i25dO0_eH8JutY7Xogy2oSREhr7BjAN1z0oFpO56QWN3ZC-ZqA-oesWZ-=w1078-h2374-rw',
  },

  {
    itemId: '오디오엔진 a2',
    src: 'https://lh5.googleusercontent.com/qCpIPrc8aFpfiBi9I6Hj0X3HmpCQZXLFUXSfsAgW5PIFQsDNwRNzopzbCHRaM6vHujyavEqUKgKkYOJy6Zsy=w1078-h2374',
  },
  {
    itemId: 'dell 3219q',
    src: 'https://lh3.googleusercontent.com/CDjhoKKm9OikrY3WTrVfVCJtJtDG3SLvYs9c3O0Tt3MhkwijHv4NLix86dbOjZt6OX2EZr7B28WGC7c6G1Sd=w1078-h2374',
  },
]

const ProductList = () => {
  return (
    <div className={styles.productContainer}>
      {items.map((item) => (
        <ProductItem key={item.itemId} itemId={item.itemId} src={item.src} />
      ))}
    </div>
  )
}
export default ProductList
