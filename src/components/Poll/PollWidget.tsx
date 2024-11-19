import React from "react";
/**
 * PollOption is a type that represents a poll option.
 * @param id - The id of the poll option.
 * @param text - The text of the poll option.
 * @param votes - The number of votes for the poll option.
 */
export type PollOption = {
  id: number;
  text: string;
  votes: number;
};
/**
 * PollWidgetProps is a type that represents the props for the PollWidget component.
 * @param question - The question of the poll.
 * @param options - The options for the poll.
 * @param onVote - The function that is called when a vote is made.
 * @param userVote - The vote of the user.
 */
export type PollWidgetProps = {
  question: string;
  options: PollOption[];
  onVote: (option: string) => void;
  userVote?: string;
};
/**
 * PollResultsProps is a type that represents the props for the PollResults component.
 * @param options - The options for the poll.
 */
export type PollResultsProps = {
  options: PollOption[];
};
/**
 * PollOptionsProps is a type that represents the props for the PollOptions component.
 * @param options - The options for the poll.
 * @param onVote - The function that is called when a vote is made.
 */
export type PollOptionsProps = {
  options: PollOption[];
  onVote: (option: string) => void;
};
/**
 * The PollWidget component renders a poll with options and handles votes.
 *
 * The component will render either the PollOptions or PollResults component
 * depending on whether the user has voted or not. The PollOptions component
 * renders the options and a button to vote, while the PollResults component
 * renders the results of the poll.
 *
 * @example
 * const options = [
 *   { id: 1, text: "Option 1", votes: 0 },
 *   { id: 2, text: "Option 2", votes: 0 },
 * ];
 * const userVote = "Option 1";
 *
 * <PollWidget
 *   question="What is your favorite option?"
 *   options={options}
 *   onVote={(option) => console.log(option)}
 *   userVote={userVote}
 * />
 */
const PollWidget: React.FC<PollWidgetProps> = ({
  question,
  options,
  onVote,
  userVote,
}) => {
  const [isVoted, setIsVoted] = React.useState(
    userVote !== "" && userVote !== undefined
  );
  const handleButtonClick = (option: string) => {
    onVote(option);
    setIsVoted(true);
  };
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <p className="text-black text-lg font-serif font-light">{question}</p>
      {isVoted ? (
        <div className="flex flex-col gap-2 w-full px-4 transition-opacity duration-500">
          {options.map((option) => (
            <div key={option.id}>
              <div
                className="text-center px-2 py-1  flex flex-row justify-between items-center bg-gradient-to-r from-gray-300 to-transparent"
                style={{
                  width:
                    (option.votes / options.reduce((a, b) => a + b.votes, 0)) *
                      100 +
                    "%",
                }}
              >
                <span className="font-bold text-lg text-black">
                  {option.text}
                </span>
                <div className="w-fit flex justify-center items-center px-2 py-1">
                  <span className="font-bold text-lg text-black">
                    {option.votes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row gap-2 transition-opacity duration-500">
          {options.map((option) => (
            <button
              className="hover:bg-gray-200 hover:text-black border-black hover:border-black transition-colors duration-400"
              key={option.id}
              onClick={() => {
                handleButtonClick(option.text);
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// const PollWidgetMemo = React.memo(PollWidget);

export default PollWidget;
