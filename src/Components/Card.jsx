import { Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaDownload, FaHeart } from "react-icons/fa";

const Card = ({ photo }) => {
    return (
        <div className="border border-zinc-300 rounded-md overflow-hidden p-4 flex  flex-col justify-between space-y-2 shadow shadow-zinc-200">
            <div className="relative aspect-square">
                <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="rounded-md object-cover"
                />
                <Chip className="absolute right-2 top-2 uppercase">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="text-xl font-bold line-clamp-1">{photo.title}</h2>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-1 font-semibold">
                    <span className="text-red-600">
                        <FaHeart />
                    </span>
                    <p>{photo.likes}</p>
                </div>
                <Separator  orientation="vertical"/>
                <div className="flex items-center space-x-1 font-semibold">
                    <span className="">
                        <FaDownload />
                    </span>
                    <p>{photo.downloads}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
