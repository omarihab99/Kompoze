import clsx from "clsx";
// text porperty can be string, number or object that has toString method.
type Props<T extends string | number | { toString: () => string }, R> = {
  text: T;
  isActive: boolean;
  style?: React.CSSProperties;
  className?: string;
  renderButton?: (props: { text: T; isActive: boolean }) => React.ReactNode;
  actionFn: (...args: any[]) => R;
};
/**
 * A functional Tap component that renders a stylized button with customizable text and styles.
 *
 * @template T - The type of the text property, which can be a string, number, or any object with a toString method.
 * @template R - The return type of the actionFn function.
 * @param {Object} props - The properties object.
 * @param {T} props.text - The text content to display within the button.
 * @param {boolean} props.isActive - Determines the isActive state of the button, affecting its styling.
 * @param {React.CSSProperties} [props.style] - Optional inline styles to apply to the button.
 * @param {string} [props.className] - Optional additional CSS classes to apply to the button.
 * @param {function} [props.renderButton] - Optional custom render function for the button. If provided, it overrides the default rendering.
 * @param {function} props.actionFn - The function to execute when the button is clicked.
 * @returns {React.ReactNode} The rendered button component.
 * @example
 * const MyComponent = () => {
 *   const handleButtonClick = () => {
 *     // Handle button click logic
 *   };
 *
 *   return (
 *     <Tap text="Click Me" isActive={true} actionFn={handleButtonClick} />
 *   );
 * };
 }
 */
const Tap = <T extends string | number | { toString: () => string }, R>({
  text,
  isActive,
  style,
  className,
  renderButton,
  actionFn,
}: Props<T, R>): React.ReactNode => {
  if (renderButton) return <>{renderButton({ text, isActive })}</>;
  const defaultClasses = `hover:border-black hover:bg-gray-200 hover:text-black flex items-center w-fit border-black px-2 py-1 rounded-xl ${
    isActive ? "bg-black text-white" : "bg-white text-black"
  }`;
  return (
    <button
      style={style}
      type="button"
      onClick={actionFn}
      className={clsx(defaultClasses, className)}
    >
      {text.toString()}
    </button>
  );
};

export default Tap;
