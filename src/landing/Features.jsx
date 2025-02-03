/* eslint-disable react/prop-types */
import { DraftPetitionIcon, LegalChatIcon, LegalTemplatesIcon, RightChevronIcon } from "../assets/svgs/Icons";


const Features = () => {
  return (
    // bg-[url('/src/assets/images/line-bg.png')] bg-no-repeat bg-left-top  bg-cover
    <article className="">
      <div className="container p-4 mx-auto space-y-5">
        {/* my-10 */}
        <section className="bg-[url('/src/assets/images/line-bg.png')] bg-no-repeat bg-cover py-[30px] md:pt-[65px] md:pb-[95px]">
          <h1 className="text-primary text-center font-[600] tracking-[-1px] text-[32px] md:text-[48px] leading-[36px] md:leading-[104px]">
            Features Section
          </h1>
          <p className="text-primary font-[400] text-center tracking-[-0.5px] text-[14px] md:text-[18px]">
            What Can AiDA Do for You?
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]">
          <Feature heading="Instant Legal Chart" icon={<LegalChatIcon />} />
          <Feature heading="Draft Petitions" icon={<DraftPetitionIcon />} />
          <Feature heading=" Legal Templates" icon={<LegalTemplatesIcon />} />
        </section>
      </div>
    </article>
  );
}

export default Features

const Feature=({heading, icon})=>{
    return (
      <article className="rounded-[8px] shadow-[var(--blue-shadow)] text-primary px-4 py-6 space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="text-greyBlack tracking-[-1.26px] text-[30px] leading-[34.6px]">
            {heading}
          </h1>
          <span className="">
            {icon}
          </span>
        </div>
        <p className="text-greyBlack font-[400] tracking-[-0.3px] text-[18px] leading-[27px] md:max-w-[333px]">
          Transform existing processes with AI-powered workflows integrated into
          your martech stack, so you can embed AI into every marketing process,
          empowering every marketer.
        </p>
        <div className="flex justify-end ">
          <RightChevronIcon width={25} height={25} />
        </div>
      </article>
    );
}