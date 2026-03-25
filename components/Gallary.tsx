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
        "/sn/SN01.jpg",
        "/sn/SN02.webp",
        "/sn/SN08.webp",
        "/sn/SN09.webp",
        "/sn/SN10.webp",
        "/sn/SN11.webp",
        "/sn/SN12.webp",
        "/sn/SN13.webp",
        "/sn/SN14.webp",
        "/sn/SN15.webp",
        "/sn/SN16.webp",
        
        "/sn/SN19.webp",
                        "/sn/SN03.webp",
                        "/sn/SN06.webp",
                        "/sn/SN17.webp",
                "/sn/SN18.webp",
                "/sn/SN05.webp",
        "/sn/SN07.webp",
        "/sn/SN20.webp",
        "/sn/SN21.webp",
        "/sn/SN04.webp",



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
      <div className="text-center">
ကိုစိုးနိုင် မသေဆုံးခင်က သူ့ဖလင်ကင်မရာနဲ့ နောက်ဆုံးရိုက်ခဲ့သည့်​ ဖလင်ဓါတ်ပုံတချို့</div>

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