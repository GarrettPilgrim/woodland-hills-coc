import Nav from "./nav/Nav";

type Props = {
  children?: React.ReactNode,
}

export default function Layout({ children }: Props) {
  return(
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}