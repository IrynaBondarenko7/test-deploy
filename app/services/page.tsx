import type { Metadata } from "next";

import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Iryna's Services",
  description: "Iryna Bondarenko services",
};

export default function ServicesPage() {
  return (
    <section className="mt-24 mb-5">
      <h1 className="font-semibold text-white flex gap-4 items-center justify-center text-lg md:text-xl xl:text-2xl mb-3">
        Services
      </h1>
      <Services />
    </section>
  );
}
