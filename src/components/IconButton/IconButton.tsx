import React from "react";
export type IconButtonProps = {
  defaultIcon: React.ReactNode;
  text: string;
  textStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  onClick: (e: React.MouseEvent) => void;
  isIconChangeOnClick?: boolean;
  iconClickInterval?: number;
  onClickIcon?: React.ReactNode;
};
const IconButton: React.FC<IconButtonProps> = ({
  defaultIcon,
  text,
  onClick,
  buttonStyle,
  textStyle,
  iconClickInterval,
  onClickIcon,
  isIconChangeOnClick,
}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, iconClickInterval || 3000);
  };
  return (
    <button
      onClick={(e) => {
        handleButtonClick();
        onClick(e);
      }}
      className="flex items-center gap-2 justify-evenly w-fit hover:bg-gray-100 hover:text-black border-2 border-black border-solid hover:border-black"
      style={buttonStyle}
    >
      {isIconChangeOnClick && isClicked ? onClickIcon : defaultIcon}
      <p className="font-mono text-lg" style={textStyle}>
        {text}
      </p>
    </button>
  );
};

export default IconButton;
