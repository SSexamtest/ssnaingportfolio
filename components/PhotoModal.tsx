"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
    images: string[];
    index: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
};

export default function PhotoModal({
    images,
    index,
    onClose,
    onNext,
    onPrev,
}: Props) {

    // keyboard support
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index,onClose,onNext,onPrev]);

    return (
        <div
            className="
        fixed inset-0
        bg-black/90
        flex items-center justify-center
        z-50
      "
            onClick={onClose}
        >

            {/* image */}
            <div
                className="relative max-w-5xl w-full p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={images[index]}
                    alt="photo"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                />

                {/* close */}
                <button
                    onClick={onClose}
                    className="
            absolute top-4 right-4
            text-white text-2xl
          "
                >
                    ✕
                </button>

                {/* prev */}
                <button
                    onClick={onPrev}
                    className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-white text-3xl
          "
                >
                    ‹
                </button>

                {/* next */}
                <button
                    onClick={onNext}
                    className="
            absolute right-4 top-1/2
            -translate-y-1/2
            text-white text-3xl
          "
                >
                    ›
                </button>

            </div>
        </div>
    );
}