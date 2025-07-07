import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';

const DocumentSamples = () => {
    const documents = [
        {
            id: 1,
            title: "Справка с места работы",
            filename: "Компания Visa Vam - Справка с места работы.pdf"
        },
        {
            id: 2,
            title: "Выписка с банковского счета",
            filename: "Компания Visa Vam - Выписка с банковского счета.pdf"
        },
        {
            id: 3,
            title: "Справка о доходах физ. лица",
            filename: "Компания Visa Vam - Справка о доходах физ. лица.pdf"
        }
    ];

    return (
        <section className="px-[7%] pt-32 mdd:pt-20 pb-32 mdd:pb-20">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-6">Скачать образцы документов</h2>

            {/* Desktop version */}
            <div className="mdd:hidden sm:flex gap-8">
                {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center gap-2">
                        <img src={`/pdf.png`} alt="PDF" className="h-8" />
                        <Link
                            href={`/${doc.filename}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline hover:no-underline text-center hover:font-medium"
                            title={`Компания Visa Vam - ${doc.title}`}
                        >
                            {doc.title}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Mobile version */}
            <div className="sm:hidden space-y-4">
                {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center gap-2">
                        <img src={`/pdf.png`} alt="PDF" className="h-8" />
                        <Link
                            href={`/${doc.filename}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline hover:no-underline hover:font-medium"
                            title={`Компания Visa Vam - ${doc.title}`}
                        >
                            {doc.title}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DocumentSamples;