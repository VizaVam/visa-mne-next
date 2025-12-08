import Image from "next/image";

export default function CheckList({ items }) {
  return (
    <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 items-start">
          <Image
            src="/check-0.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
            style={{ transform: "translate(0px, 4px)" }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}