'use client'

export default function Breadcrumbs({ breadcrumbs = [] }) {
    if (!breadcrumbs.length) return null; 

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <nav aria-label="breadcrumb">
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
            <ul className="flex space-x-2 text-sm translate-y-[-50px]">
                {breadcrumbs.map((item, index) => (
                    <li key={index} className="after:content-['/'] last:after:content-[''] after:mx-2">
                        <a href={item.url} className="text-blue-600 hover:underline">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
