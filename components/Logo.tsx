import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold font-bona-nova text-2xl focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
    >
      BOND
    </Link>
  );
};
