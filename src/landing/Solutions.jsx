/* eslint-disable react/prop-types */
import { LegalChatIcon } from "../assets/svgs/Icons";
import { PrimaryButton } from "../globalComponents/Button";

const Solutions = () => {
  return (
    <article className=" mt-[50px] md:mt-[100px] bg-[url('/src/assets/images/solution-bg.png')] bg-cover xl:bg-contain bg-no-repeat h-fit xl:h-[55vh] place-content-center">
      <section className="p-4 md:container  mx-auto flex lg:flex-row flex-col gap-10">
        <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
          <p className="text-light text-[16px] font-[400] tracking-[-0.32px] flex items-center gap-3">
            <LegalChatIcon isWhite={true} width={15} height={15} />
            The legal AI Toolkit
          </p>
          <h1 className="font-[400] tracking-[-2.4px] leading-[48px] md:leading-[60px] text-[32px] md:text-[48px] max-w-[510px]">
            Unveiling the Impact of Smart Legal Solutions
          </h1>
          <PrimaryButton text="Learn more" />
        </div>

        <div className="grid grid-cols-2 place-content-between place-items-center gap-10 flex-1">
          <NumStat num="12K+" type="Active Users" />
          <NumStat num="25K+" type="Chats Completed" />
          <NumStat num="15K+" type="Forms Generated" />
          <NumStat num="95%" type="Client Satisfaction" />
        </div>
      </section>
    </article>
  );
}

export default Solutions

const NumStat=({num , type})=>{
    return (
      <div className="space-y-1">
        <h1 className="text-light font-[600] text-5xl md:text-[70px] jakarta">{num}</h1>
        <p className="text-secondary font-[500] text-[14px] md:text-[18px]">{type}</p>
      </div>
    );
}
