import React from "react";

type BreakableProgressBarProps = {
  totalSegments: number;
  completedSegments: number;
  position?: string; // Adjust based on how position is used
};

const BreakableProgressBar: React.FC<BreakableProgressBarProps> = ({
  totalSegments,
  completedSegments,
  position = "",
}) => {
  const segmentWidth = 100 / totalSegments - 1; // Adjust width to account for margins

  return (
    <div
      className={`flex w-[50%] md:w-[25%] h-2 bg-transparent rounded absolute ${position} overflow-hidden`}
    >
      {Array.from({ length: totalSegments }, (_, index) => (
        <div
          key={index}
          className="h-full"
          style={{
            width: `${segmentWidth}%`,
            marginRight: index < totalSegments - 1 ? "4px" : "0",
          }}
        >
          <div
            className={`h-full transition-colors duration-300 ${
              index < completedSegments ? "bg-white" : "bg-[#6CA52B]"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default BreakableProgressBar;
