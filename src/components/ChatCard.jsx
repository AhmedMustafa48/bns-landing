/* eslint-disable react/prop-types */
import { RightChevronIcon, ShiningStarIcon } from "../assets/svgs/Icons";
import { SecondaryButton } from "../globalComponents/Button";


const ChatCard = () => {
  return (
    <section className="flex flex-col gap-[12px] md:gap-[30px] p-4 md:p-9 max-w-[1199px] mx-auto bg-light border-[1px] border-[#00000026] rounded-[8px] shadow-[var(--gray-shadow)]">
      <h3 className="text-primary font-[600] text-2xl md:text-5xl leading-[32px]">
        Try AiDA, You Will Get the Answer
      </h3>
      <p className=" text-primary font-[400] text-sm leading-[21px] md:text-[18.75px] md:leading-[30px]">
        Type your question below and experience AiDA’s power.
      </p>
      <div className="bg-none lg:bg-[#F3F3F3] lg:py-2 lg:px-4 rounded-[12px] flex flex-col lg:flex-row gap-5">
        <input
          type="text"
          className="flex-1 p-2 lg:p-0 rounded-lg border-[#00000040] border lg:border-none outline-none text-[18.75px] text-[#B6B6B6]"
          placeholder="Write a question here to ask..........."
        />
        <SecondaryButton
          text="Chat to AIDA"
          colors="bg-secondary"
          icon={<ShiningStarIcon isBlack={false} />}
        />
      </div>
      {/* All Buttons */}
      <div className="flex flex-wrap gap-4 md:gap-9">
        <LinkButton
          text="What are the steps to file a petition?"
          suggested={true}
        />
        <LinkButton text="How can I draft a legal contract?" />
        <LinkButton text="What are the court fees for a case?" />
      </div>
    </section>
  );
}

export default ChatCard

const LinkButton =({suggested = false , text}) =>{
  return (
    <button className="py-2 px-6 rounded-[100px] text-[14px] text-primary flex gap-2 shadow-[var(--gray-shadow)] w-fit">
      {suggested && <span className="font-bold lg:inline hidden">Suggested:</span>}
      <p>{text}</p>
      <span>

      <RightChevronIcon />
      </span>
    </button>
  );
}