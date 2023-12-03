import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const ItemIconButton = (props = { className: "" }) => {
  const { className, value, Icon, ...restProps } = props;

  return (
    <button {...restProps} className={`${styles.button} ${className}`}>
      <Icon />
      {value}
    </button>
  );
};

const ItemImage = ({ alt, src }) => {
  return (
    <div className={styles.bgContainer}>
      <Image alt={alt} src={src} fill className={styles.bg} />
    </div>
  );
};

const ItemContent = ({ notification, title, subtitle, children }) => {
  return (
    <>
      <span className={styles.notification}>{notification}</span>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.subtitle}>{subtitle}</span>
      <p className={styles.description}>{children}</p>
    </>
  );
};

const Item = ({ image, content, button } = { image: null }) => {
  return (
    <div className={styles.item}>
      {image}
      <div className={styles.text}>
        {content}
        {button}
      </div>
    </div>
  );
};

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <Item
        image={<ItemImage alt="astronaut" src="/astronaut.png" />}
        content={
          <ItemContent
            notification="🔥 Available Now"
            title="How to use the new version of the admin dashboard"
            subtitle="Takes 4 minutes to learn"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ItemContent>
        }
        button={<ItemIconButton Icon={MdPlayCircleFilled} value="Watch" />}
      />
      <Item
        content={
          <ItemContent
            notification="🚀 Coming Soon"
            title="New server actions are available, partial pre-rendering is coming up!"
            subtitle="Boost your productivity"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ItemContent>
        }
        button={<ItemIconButton Icon={MdReadMore} value="Learn" />}
      />
    </div>
  );
};

export default Rightbar;
