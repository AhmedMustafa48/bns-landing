import imgAvatar from "../assets/images/avatar.png"

const Reviews = () => {
  return (
    <article>
      <div className="container mx-auto p-4">
        <section className="bg-[url('/src/assets/images/review-bg.png')] bg-no-repeat bg-cover py-[30px] md:pt-[65px] md:pb-[110px]">
        <h1 className="text-primary font-[600] text-[32px] md:text-[48px] leading-[40px] md:leading-[104px] tracking-[-1px] text-center">
          What Our Users Say
        </h1>
        <p className="text-primary font-[400] text-center leading-[27px] tracking-[-0.5px] text-[14px] md:text-[18px]">
          What Can AiDA Do for You?
        </p>
        </section>
        <section className="flex gap-5 justify-center flex-col lg:flex-row">
          <Review />
          <Review />
        </section>
      </div>
    </article>
  );
}

export default Reviews

const Review =() =>{
    return (
      <article className="space-y-[25px] md:space-y-[38px]">
        <section className="shadow-[var(--blue-shadow)] rounded-[8px] py-[30px] md:py-[60px] px-[25px] md:px-[39px] text-center space-y-4 max-w-[588px]">
          <h3 className="text-[24px] font-[500] leading-[28px] text-grey8">
            Incredible Experience
          </h3>
          <p className="tracking-[0.5px] text-[12px] md:text-[18px] font-[400] leading-[20px] md:leading-[28px] text-grey6 text-center">
            We had an incredible experience working with AiDA and were impressed
            they made such a big difference in only three weeks. Our team is so
            grateful for the wonderful improvements they made and their ability
            to get familiar with the concept so quickly.
          </p>
        </section>
        <section className="flex justify-center gap-4 items-center">
          <img src={imgAvatar} />
          <div>
            <h3 className="text-grey8 font-[700] text-[18px] leading-[28px]">
              Anya Tailor Joy
            </h3>
            <p className="text-grey6 font-[400] text-[14px] leading-[24px]">CEO, SF Industires</p>
          </div>
        </section>
      </article>
    );
}