"use client";

import Image from "next/image";

type PhotoCardProps = {
    src: string;
    title?: string;
    description?: string;
};

const PhotoCard = ({ src, title, description }: PhotoCardProps) => {
    return (
        <div className="group cursor-pointer">

            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
                <Image
                    src={src}
                    alt={title || "photo"}
                    width={600}
                    height={400}
                    className="
            object-cover
            w-full h-auto
            transition duration-500
            group-hover:scale-105
          "
                />

                {/* Hover overlay */}
                <div className="
          absolute inset-0
          bg-black/0
          group-hover:bg-black/30
          transition duration-500
        " />
            </div>

            {/* Text */}
            {(title || description) && (
                <div className="mt-3">

                    {title && (
                        <h3 className="
              text-lg
              font-serif
              text-gray-900
              dark:text-gray-100
            ">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="
              text-sm
              text-gray-500
              dark:text-gray-400
            ">
                            {description}
                        </p>
                    )}

                </div>
            )}

        </div>
    );
};

export default PhotoCard;