import Image from 'next/image'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id)

  const userAvatar = user.img || '/noavatar.png'

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={userAvatar} fill alt="" />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="text" name="password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.addess} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin" value={user.isAdmin}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" value={user.isActive}>
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
