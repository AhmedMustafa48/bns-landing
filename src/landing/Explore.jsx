import { RightChevronIcon } from "../assets/svgs/Icons";
import ChatCard from "../components/ChatCard"

const Explore = () => {
  return (
    <article className="px-4 md:container mx-auto">
      <section className="mt-5 lg:-mt-10 z-5 relative ">
        <ChatCard />
      </section>
      <section>
        <div className="">
          <h1 className="bg-[url('/src/assets/images/explore-bg.png')] bg-no-repeat bg-cover pt-[30px] md:pt-[140px] text-primary text-[32px] md:text-[48px] font-[600] tracking-[-1px] leading-[48px] md:leading-[104px] text-center">
            Explore Common Legal Questions
          </h1>
          <p className="text-primary text-[14px] md:text-[18px] font-[400] tracking-[-0.5px] leading-[27px] text-center max-w-">
            Discover what others are asking AiDA and see its expert responses
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-[36px] md:mt-[50px]">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </section>
    </article>
  );
}

export default Explore

const QuestionCard =() =>{
  return (
    <div className="shadow-[var(--gray-shadow)] rounded-[8px] border py-4 px-5 flex flex-col gap-[15.7px]">
      <p className="w-fit ml-auto bg-[#DAE9FF] text-[#1657B8] py-1 px-2 text-[11.92px] rounded-[4px]">
        POPULAR
      </p>
      <h3 className="text-greyBlack text-[24px] font-[400] tracking-[-0.67px] leading-[30px] max-w-[252px]">
        How do I file a petition in Turkish court?
      </h3>
      <p className="text-greyBlack  tracking-[-0.36px] font-[400] md:text-[14.41px] md:leading-[19.5px]">
        To file a petition, follow these steps.
      </p>
      <button className="text-greyBlack text-[15px] font-[400] flex gap-2 items-start">
        Continue to chat
        <RightChevronIcon />
      </button>
    </div>
  );
}