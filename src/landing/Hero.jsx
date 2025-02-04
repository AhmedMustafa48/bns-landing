import { RightChevronIcon, ShiningStarIcon } from "../assets/svgs/Icons";
import  { PrimaryButton, SecondaryButton } from "../globalComponents/Button";


const Hero = () => {
 
  return (
    <article className="h-fit md:h-[70vh] bg-[url('/src/assets/images/hero-bg.png')] bg-no-repeat bg-left-top  bg-cover flex flex-col">
      <section className="md:container px-4 py-6 md:px-0 mx-auto flex flex-col items-center justify-center gap-6 flex-1">
        <div className="text-center space-y-5 md:space-y-10">
          <h1 className="text-xl md:text-5xl font-bold tracking-[-1px] text-light">
            Empowering Your{" "}
            <span className="text-secondary">Legal Journey</span>
          </h1>
          <p className="w-full md:max-w-[737px] text-[12px] md:text-[16px] leading-[27px] text-center tracking-[-0.5px] text-light">
            We are dedicated to making legal services accessible. From drafting
            contracts to managing petitions, our AI-powered platform offers
            tailored solutions for all your legal needs.
          </p>
          <div className=" md:max-w-[794px] hidden lg:flex items-center gap-[12.48px] p-1 border-light border-[2px] rounded-[100px]  bg-gradient-to-r from-[#ffffff80] to-[#ffffff70] ">
            <SecondaryButton
              text="New"
              icon={<ShiningStarIcon isBlack={true} />}
            />
            <p className="text-dark text-[14px] leading-[21px] tracking-[-0.3px] font-[500] flex-1">
              <span className="font-[600] tracking-[-0.32px]">
                Introducing :{"   "}
              </span>
              What can an artificial intelligence specialised in Turkish law do
              at most?
            </p>
            <span className="px-5">
              <RightChevronIcon />
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[20px]">
            <PrimaryButton text="Try Me" colors="bg-secondary text-light" />
            <PrimaryButton text="Learn More" />
          </div>
        </div>
      </section>
    </article>
  );
}

export default Hero