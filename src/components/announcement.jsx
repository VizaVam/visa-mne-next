import {useEffect, useState} from "react";

const Announcement = () => {
    const [activeAnnouncement, setActiveAnnouncement] = useState(null);

    useEffect(() => {
        const checkAnnouncements = () => {
            const now = new Date();

            // First announcement period (April 25-29)
            const firstStart = new Date("2025-04-25T00:00:00+05:00");
            const firstEnd = new Date("2025-04-29T23:59:59+05:00");

            // Second announcement period (April 30-May 4)
            const secondStart = new Date("2025-04-30T00:00:00+05:00");
            const secondEnd = new Date("2025-05-04T23:59:59+05:00");

            if (now >= firstStart && now <= firstEnd) {
                setActiveAnnouncement('first');
            } else if (now >= secondStart && now <= secondEnd) {
                setActiveAnnouncement('second');
            } else {
                setActiveAnnouncement(null);
            }
        };

        checkAnnouncements();
        const interval = setInterval(checkAnnouncements, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    const announcements = {
        first: {
            title: "Изменился график работы!",
            lines: [
                "сб 26.04. 09:00-19:00",
                "вс 27.04. пн 28.04. вт 29.04. - выходные дни"
            ]
        },
        second: {
            title: "Изменился график работы!",
            lines: [
                "чт 01.05. выходной день",
                "пт 02.05. с 9:00 до 19:00",
                "сб 03.05. с 10:00 до 14:00",
                "вс 04.05. выходной день"
            ]
        }
    };

    return (
        <>
            {activeAnnouncement && (
                <div className="px-[7%] md:pt-16 lg:pt-24 mdd:pb-16 -mt-10">
                    <div
                        className="md:w-max dm:w-full md:py-6 dm:py-4 md:px-10 bg-orange-500 text-white text-center m-auto font-bold">
                        <p className="md:text-2xl dm:text-lg">Внимание!</p>
                        <p className="md:text-2xl dm:text-lg">{announcements[activeAnnouncement].title}</p>
                        {announcements[activeAnnouncement].lines.map((line, index) => (
                            <p key={index} className="md:text-2xl dm:text-lg">{line}</p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Announcement;