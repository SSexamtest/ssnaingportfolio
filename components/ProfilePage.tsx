"use client"; // Required for interactivity (dark toggle)

import Image from "next/image";

const FormatInspiredHero = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-500 font-serif text-gray-900 dark:text-gray-100 p-6 md:p-12">
            {/* Profile Section */}
                  <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 mb-4 md:mb-0">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={160}
                        height={160}
                        priority
                    />
                </div>

            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8 max-w-4xl">
          
                {/* Text Content */}
                <div className="text-left leading-relaxed text-lg md:text-xl">
                    <p className="relative">
                        <span className="float-left text-7xl md:text-8xl font-light mr-3 mt-2 leading-[0.8] border-b-2 border-transparent">
                            W
                        </span>
                        hen they need a website, photographers use{" "}
                        <span className="underline underline-offset-4 decoration-1">Format</span>.
                        An easy, inclusive website platform featuring real humans to support your site build.
                        Too often seeing great work suffer from bad design, Format’s founding mission is
                        to support artists, photographers and designers to create elegant, beautifully
                        designed websites to showcase their work.
                    </p>

                    <p className="mt-6">
                        With hundreds of thousands of creatives using Format, including many already
                        featured on Boooooooom, we wanted to feature a selection of 14 photographers’
                        websites on the platform as inspiration for you. From layouts, logos and
                        image selections, we gathered some of the most aspirational examples of
                        what’s possible on Format.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FormatInspiredHero;