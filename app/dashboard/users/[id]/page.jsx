import Image from 'next/image'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="" />
        </div>
        John Due
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder='John Due' />
          <label>Email</label>
          <input type="email" name="email" placeholder='JohnDue@gmail.com' />
          <label>Password</label>
          <input type="text" name="password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder='+1234567890' />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="New York" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
