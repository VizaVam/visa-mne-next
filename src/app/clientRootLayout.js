"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Suspense } from "react";

export default function ClientRootLayout({ children }) {
  const [hasTimerestricted, setHasTimerestricted] = useState(false);

  return (
    <>
      <Header onTimerestrictedChange={setHasTimerestricted} />
      <Breadcrumbs />
      <Suspense fallback={null}>
        <main className={hasTimerestricted ? "pt-[65px]" : ""}>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
}
