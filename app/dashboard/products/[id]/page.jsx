import Image from 'next/image'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import { fetchProduct } from '@/app/lib/data'

const SingleProductPage = async ({ params }) => {
  const { id } = params
  const product = await fetchProduct(id)
  
  const productImage = product.img || "/noproduct.jpg"

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={productImage} fill alt={product.title} />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={product.size} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder={product.desc}></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
