"use client";

import { useState } from "react";
import Image from "next/image";
import LeftIcon from "../../public/left-arrow.svg";
import RightIcon from "../../public/right-arrow.svg";
import PlayIcon from "../../public/play_button.svg";

type Testimonial = {
  thumbnail: string;
  thumbnailMobile: string;
  video: string;
  name: string;
  occupation: string;
};

const testimonials: Testimonial[] = [
  {
    thumbnail:
      "https://res.cloudinary.com/di5bmyknf/image/upload/v1721578166/omohtee_thumbnail_kjwqvk.png",
    thumbnailMobile:
      "https://res.cloudinary.com/di5bmyknf/image/upload/v1721593849/omohtee_mobile_gojzae.png",
    video:
      "https://res.cloudinary.com/di5bmyknf/video/upload/v1720768277/Mrs_Omohtee_a2n3rh.mp4",
    name: "Mrs Omohtee",
    occupation: "Beautician",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/di5bmyknf/image/upload/v1721578165/johnson_thumbnail_mkxfdh.png",
    thumbnailMobile:
      "https://res.cloudinary.com/di5bmyknf/image/upload/v1721593635/johnson_mobile_xxjvlv.png",
    video:
      "https://res.cloudinary.com/di5bmyknf/video/upload/v1721463098/Mr_Johnson_88.4mb_o4aup1.mp4",
    name: "Mrs Johnson",
    occupation: "Entrepreneur",
  },
  {
    thumbnail:
      "https://res.cloudinary.com/di5bmyknf/image/upload/v1721578165/joshua_thumbnail_jnrbq1.png",
    thumbnailMobile:
      "https://res.cloudinary.com/di5bmyknf/image/upload/v1722937604/Mask_group_3_nylpaz.png",
    video:
      "https://res.cloudinary.com/di5bmyknf/video/upload/v1721463103/Mr_Josh_97.4mb_ds1bai.mp4",
    name: "Mr Joshua",
    occupation: "Business Manager & Athlete",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setPlayingIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setPlayingIndex(null);
  };

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <div className="px-10 py-4 md:px-28 md:py-6 2xl:px-48 2xl:py-8 text-center">
      <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full mx-auto mb-8 md:inline-block">
        <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
          How Frootify has changed their Lives
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 p-4 box-border"
            >
              <p className="hero-font text-[#4F4F4F] font-extrabold text-xs mt-4 2xl:mt-8 2xl:text-xl mb-4">
                {testimonial.name} - {testimonial.occupation}
              </p>
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                {playingIndex === index ? (
                  <iframe
                    src={`${testimonial.video}?autoplay=1`}
                    title={testimonial.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                ) : (
                  <>
                    <picture className="absolute top-0 left-0">
                      <source
                        srcSet={testimonial.thumbnailMobile}
                        media="(max-width: 768px)"
                      />
                      <img
                        src={testimonial.thumbnail}
                        alt={`${testimonial.name} thumbnail`}
                        // layout="fill"
                        // fill
                        // objectFit="cover"
                      />
                    </picture>
                    <button
                      onClick={() => handlePlay(index)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
                    >
                      <Image
                        src={PlayIcon}
                        alt="Play"
                        width={64}
                        height={64}
                        className="md:w-16 md:h-16"
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#8BB021] text-white p-2 md:p-8 rounded-full"
        >
          <Image src={LeftIcon} alt="Previous" width={24} height={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#8BB021] text-white p-2 md:p-8 rounded-full"
        >
          <Image src={RightIcon} alt="Next" width={24} height={24} />
        </button>

        <div className="mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
