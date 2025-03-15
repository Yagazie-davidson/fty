const Story = () => {
  return (
    <div className="px-10 py-10 md:px-28 md:py-20 2xl:px-48 2xl:py-8 text-center">
      <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full mx-auto hidden mb-8 md:inline-block">
        <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
          The Frootify Story
        </p>
      </div>
      <div className="my-10 text-center">
        <img src="story.svg" alt="Story" className="mx-auto" />
      </div>
    </div>
  );
};

export default Story;
