import { PrimaryButton } from "../globalComponents/Button";
import aidaImg from "../assets/images/aida.png"


const WhyAida = () => {
  return (
    <article className="mt-[99px] bg-[url('/src/assets/images/choose-bg.png')] bg-cover bg-right h-fit md:h-[810px] place-content-center">
      <section className="px-4 md:py-4 py-9 md:container mx-auto flex-col lg:flex-row flex justify-between items-center lg:gap-0  gap-8">
        <div className="space-y-5 md:space-y-7 lg:text-start text-center">
          <h1 className="font-[600] text-[32px] md:text-[56.6px] leading-[45px] md:leading-[68px] ">
            Why Choose AiDA?
          </h1>
          <p className="font-[400] text-[14px] md:text-[24px] leading-[21px] md:leading-[40px] max-w-[519px]">
            AiDA is a powerful AI assistant designed to simplify legal processes
            in Turkey. Whether it’s drafting petitions, answering legal queries,
            or providing legal templates, AiDA saves you time and effort with
            accurate and reliable answers
          </p>
          <div className="flex justify-center lg:justify-start">
          <PrimaryButton text="Learn More" />
          </div> 
        </div>
        <img
          src={aidaImg}
          alt="aida-img"
          className="max-w-[300px] lg:max-w-[529px]"
        />
      </section>
    </article>
  );
}

export default WhyAida