import styles from "./memberCard.module.scss"

export default function MemberCard (props: any){
  const { LastName, FirstNames, Email, Address, Phone, Photo } = props;
  return (
    <div className={styles.container}>
      <h2>{LastName}</h2>
    </div>
  )
}