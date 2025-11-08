import Link from "next/link";

export default function NextArticleLink({ href, title }) {
    return (
        <div className="w-full relative flex flex-col px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
            <p>
                Читать следующую статью: 
            </p>
            <Link href={href} 
                className="cursor-pointer hover:font-normal 
                text-[24px] font-medium 
                text-blue-500" 
                target="_blank" 
                rel="noopener noreferrer">
                    {title}
            </Link>
        </div>
    );
}