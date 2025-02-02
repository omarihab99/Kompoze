import React from "react";
export interface PinInputProps {
  actionFn: React.MouseEventHandler<HTMLButtonElement>;
}
type Mapping = Record<
  number,
  [(value: number | string) => void, null | React.RefObject<HTMLInputElement>]
>;
/**
 * A functional PinInput component that renders a 4-digit pin input field.
 */
const PinInput: React.FC<PinInputProps> = ({ actionFn }) => {
  const [input1, setInput1] = React.useState<number | string>("");
  const [input2, setInput2] = React.useState<number | string>("");
  const [input3, setInput3] = React.useState<number | string>("");
  const [input4, setInput4] = React.useState<number | string>("");
  //   const input1Ref = React.useRef<HTMLInputElement>(null);
  const input2Ref = React.useRef<HTMLInputElement>(null);
  const input3Ref = React.useRef<HTMLInputElement>(null);
  const input4Ref = React.useRef<HTMLInputElement>(null);
  const map: Mapping = {
    1: [setInput1, null],
    2: [setInput2, input2Ref],
    3: [setInput3, input3Ref],
    4: [setInput4, input4Ref],
  };
  const autoFocusNext = (index: number) => {
    setTimeout(() => {
      map[index][1]?.current?.focus();
    }, 0);
  };
  const handleClear = () => {
    map[1][0]("");
    map[2][0]("");
    map[3][0]("");
    map[4][0]("");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (value === "" || /^\d*$/.test(value)) {
      map[index][0]("");
    }
    if (!/^\d*$/.test(value)) {
      return; // Ignore non-numeric input
    }
    map[index][0](Number(value));
    if (value.length === 1) {
      autoFocusNext(index + 1);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Tab") {
      return;
    }
    // Allow only numeric keys and backspace
    if (!/\d/.test(key) && key !== "Backspace") {
      e.preventDefault(); // Prevent non-numeric input
    }
  };
  return (
    <div className="rounded-md border shadow-lg shadow-gray-300 min-h-fit w-fit">
      <div className="flex flex-col p-3 text-center items-center gap-5">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl"
            maxLength={1}
            required
            onKeyDown={handleKeyDown}
            value={input1?.toString()}
            onChange={(e) => handleChange(e, 1)}
          />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            ref={input2Ref}
            className="border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl"
            maxLength={1}
            required
            onKeyDown={handleKeyDown}
            value={input2?.toString()}
            onChange={(e) => handleChange(e, 2)}
          />
          <input
            className="border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            ref={input3Ref}
            required
            onKeyDown={handleKeyDown}
            value={input3?.toString()}
            onChange={(e) => handleChange(e, 3)}
          />
          <input
            className="border-2 w-14 h-14 focus:outline focus:outline-2 border-gray-400 rounded-md text-center text-2xl"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            ref={input4Ref}
            required
            onKeyDown={handleKeyDown}
            value={input4?.toString()}
            onChange={(e) => handleChange(e, 4)}
          />
        </div>
        <div className="flex flex-row gap-2">
          <button
            onClick={handleClear}
            type="button"
            className="rounded-md bg-red-500 text-white hover:bg-white hover:text-black border-red-500 border-2 transition-colors duration-300 px-4 py-2"
          >
            Clear
          </button>
          <button
            onClick={actionFn}
            type="button"
            className="rounded-md bg-green-700 text-white hover:bg-gray-100 hover:text-black border-green-700 border-2 transition-colors duration-300 px-4 py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinInput;
