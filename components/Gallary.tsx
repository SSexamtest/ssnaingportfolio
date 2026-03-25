// import PhotoCard from "@/components/PhotoCard";

// export default function Gallery() {

//     const photos = [
//         {
//             src: "/file.svg",
//             title: "Mountain",
//             description: "Landscape photography"
//         },
//         {
//             src: "/globe.svg",
//             title: "Portrait",
//             description: "Natural light"
//         },
//         {
//             src: "/next.svg",
//             title: "Product",
//             description: "Studio setup"
//         }
//     ];

//     return (
//         <section className="
//       max-w-6xl
//       mx-auto
//       px-6
//       py-16
//       grid
//       gap-8
//       sm:grid-cols-2
//       lg:grid-cols-3
//     ">

//             {photos.map((photo, index) => (
//                 <PhotoCard key={index} {...photo} />
//             ))}

//         </section>
//     );
// }

"use client";

import { useState } from "react";
import PhotoCard from "@/components/PhotoCard";
import PhotoModal from "@/components/PhotoModal";

export default function GalleryPage() {

    const images = [
        "/file.svg",
        "/globe.svg",
        "/file.svg",
        "/globe.svg",
        "/file.svg",
    ];

    const [index, setIndex] = useState<number | null>(null);

    const next = () => {
        if (index === null) return;
        setIndex((index + 1) % images.length);
    };

    const prev = () => {
        if (index === null) return;
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <main className="
      min-h-screen
      bg-white
      dark:bg-gray-900
      transition-colors
    ">

            {/* grid */}
            <section className="
        max-w-6xl
        mx-auto
        px-6
        py-16
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      ">

                {images.map((src, i) => (
                    <div key={i} onClick={() => setIndex(i)}>
                        <PhotoCard src={src} />
                    </div>
                ))}

            </section>

            {/* modal slideshow */}
            {index !== null && (
                <PhotoModal
                    images={images}
                    index={index}
                    onClose={() => setIndex(null)}
                    onNext={next}
                    onPrev={prev}
                />
            )}

        </main>
    );
}