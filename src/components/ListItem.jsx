import Image from "next/image";

export default function ListItem({ children }) {
  return (
    <li className="flex gap-2 items-start">
      <Image
        src="/check-0.png"
        alt=""
        width={16}
        height={16}
        className="w-4 h-4"
        style={{ transform: "translate(0px, 4px)" }}
      />

      <span>{children}</span>
    </li>
  );
}