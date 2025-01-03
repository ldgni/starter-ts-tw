import { Outlet, ScrollRestoration } from "react-router";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Root({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <main className="grow">{children ?? <Outlet />}</main>
      <Footer />
      <ScrollRestoration />
    </Container>
  );
}
