export default function StaffCard(props: any) {
  return (
    <>
      <h3>{props.name}</h3>
      <span>{props.title}</span>
      <p>{props.description}</p>
    </>
  )
}