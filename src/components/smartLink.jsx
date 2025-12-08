import Link from "next/link";

export default function SmartLink({ href, children, noNewTab }) {
  const isNewTab = !noNewTab;

  return (
    <Link
      href={href}
      className="underline cursor-pointer hover:font-normal font-medium text-blue-500"
      target={isNewTab ? "_blank" : undefined}
      rel={isNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}