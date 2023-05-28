import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import { Anton, Noto_Sans } from "@next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const noto_sans = Noto_Sans({
  weight: "300",
  subsets: ["latin"],
});

type Props = {
  children?: React.ReactNode,
}

export default function Layout({ children }: Props) {
  return(
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  )
}