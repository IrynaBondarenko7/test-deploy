"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <section className="mt-24">
      <div className="text-center">
        <h2 className="font-bold text-xl md:text-4xl">
          Uh oh we have a problem!
        </h2>
        <DotLottieReact src="/404_animation.json" loop autoplay />
        <Link
          href="/"
          className="focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
        >
          Take me away
        </Link>
      </div>
    </section>
  );
}
