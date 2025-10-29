import React from "react";
import ColorDistanceText from "./ColorDistanceText";

interface HighlightedListProps {
  values: string[];
  target: string;
  maxDistance?: number;
  style?: React.CSSProperties;
}

/**
 * Displays a semicolon-separated list of strings inside a paragraph.
 * When a value matches the `target`, it is wrapped with ColorDistanceText.
 */
const HighlightedList: React.FC<HighlightedListProps> = ({
  values,
  target,
  maxDistance = 300,
  style,
}) => {
  return (
    <p className="mt-2 text-sm leading-normal" style={style}>
      {values.map((value, index) => {
        const isTarget = value === target;

        return (
          <React.Fragment key={index}>
            {isTarget ? (
              <ColorDistanceText 
              text={value} 
              maxDistance={maxDistance}/>
            ) : (
              value
            )}
            {index < values.length - 1 && "; "}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default HighlightedList;
