import Nav from "./nav/Nav";

type Props = {
  children: JSX.Element,
}

export default function Layout({ children }: Props) {
  return(
    <>
      <Nav />
      <div>{children}</div>
    </>
  )
}