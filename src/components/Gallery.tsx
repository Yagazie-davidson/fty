const Gallery = () => {
  const images = [
    {
      src: "gallery-one.jpg",
      alt: "Gallery One",
    },
    {
      src: "gallery-two.jpg",
      alt: "Gallery Two",
    },
    {
      src: "gallery-three.jpg",
      alt: "Gallery Three",
    },
    {
      src: "gallery-four.JPG",
      alt: "Gallery Four",
    },
    {
      src: "gallery-five.jpg",
      alt: "Gallery Five",
    },
    {
      src: "gallery-six.jpeg",
      alt: "Gallery Six",
    },
    {
      src: "gallery-seven.jpg",
      alt: "Gallery Seven",
    },
  ];

  return (
    <div className="px-10 py-4 mb-10 md:px-28 md:py-8 2xl:px-48 2xl:py-8 text-center">
      <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full mx-auto  mb-8 inline-block">
        <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
          Froot Gallery
        </p>
      </div>

      <div className="flex horizontal-slide-img custom-scrollbar rounded-3xl">
        {images.map((value, index) => (
          <div key={index} className="w-auto flex-shrink-0">
            <div>
              <img
                src={value.src}
                alt={value.alt}
                className="h-[271px] md:h-[474px] rounded-3xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
