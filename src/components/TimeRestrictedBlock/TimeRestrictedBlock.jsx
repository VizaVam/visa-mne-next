"use client";
import { useEffect, useState } from "react";
import { useModal } from "@/components/modalcontext";
import { schedule } from "./schedule";
import Link from "next/link";

export default function TimeRestrictedBlock({ onVisibilityChange }) {
  const { openModal } = useModal();
  const [currentType, setCurrentType] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = вс, 1 = пн, ...
    const hour = now.getHours();

    const ranges = day >= 1 && day <= 5 ? schedule.weekdays : schedule.weekends;

    let match = null;
    for (const r of ranges) {
      if (hour >= r.start && hour <= r.end) {
        match = r.type;
        break;
      }
    }

    setCurrentType(match);
  }, []);

  useEffect(() => {
    onVisibilityChange?.(!!currentType && isVisible);
  }, [currentType, isVisible, onVisibilityChange]);

  if (!currentType || !isVisible) return null;

  return (
    <div className="timerestricted relative drm:p-4 dr:p-[8px] bg-orange-500 text-white text-center font-semibold flex">
      {currentType === "promo" && (
        <p className="font-medium ml-auto drm:text-base dr:text-xs">
          <Link
            href="/shengenskie-vizy/viza-v-ispaniyu"
            className="underline cursor-pointer hover:font-normal font-bold text-[#06195B]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Испанская виза с безличной подачей
          </Link>{" "}
          — быстрая запись, все сборы включены!
        </p>
      )}

      {currentType === "insurance" && (
        <p className="font-medium ml-auto drm:text-base dr:text-xs">
          <a
            className="underline cursor-pointer hover:font-normal font-bold text-[#06195B]"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            role="button"
          >
            Страхование от отказа в визе
          </a>{" "}
          позволит вернуть стоимость нашей услуги при отказе!
        </p>
      )}
      <button
            onClick={() => setIsVisible(false)}
            className="text-[#F86F00] font-bold text-lg ml-auto mdd:translate-y-[-15px] dr:translate-y-[-10px]"
        >
            <img src="/closewhite.svg" alt="Закрыть" className="w-6 h-6"/>
        </button>
    </div>
  );
}
