import { FacebookIcon, FooterLogo, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../assets/svgs/Icons";
import { SecondaryButton } from "../globalComponents/Button";


const Footer = () => {
  return (
    <article className="mt-[100px] bg-[url('/src/assets/images/footer-bg.png')] bg-cover bg-no-repeat h-fit lg:h-[47.8vh]">
      <section className="container px-4 py-6 mx-auto flex flex-col justify-between h-[100%]">
        <div className="flex justify-between lg:flex-row flex-col-reverse h-full mt-0 lg:mt-10">
          <div className="space-y-[20px]">
            <span className="hidden lg:block">
              <FooterLogo />
            </span>
            <h1 className=" hidden lg:block text-light font-[400] text-[16px] leading-[24px] max-w-[295px] tracking-[-0.8px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </h1>
          </div>
          <div className="hidden lg:flex flex-col gap-y-[10px]">
            <a
              href="#"
              className="text-light jakarta leading-[24px] text-[16px] font-[400]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-light jakarta leading-[24px] text-[16px] font-[400]"
            >
              About
            </a>
            <a
              href="#"
              className="text-light jakarta leading-[24px] text-[16px] font-[400]"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-light jakarta leading-[24px] text-[16px] font-[400]"
            >
              Contact
            </a>
          </div>
          <div className="flex justify-between lg:block lg:mt-0 mt-[90px] mb-[30px]">
            <span className="block lg:hidden">
              <FooterLogo />
            </span>
            <div className="space-y-[14px]">
              <p className="text-light text-[16px] font-[600] leading-[24px] jakarta">
                Social
              </p>
              <div className="flex items-center gap-[10px]">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
                <YoutubeIcon />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-light text-[18px] font-[600] jakarta">Social</p>
            <p className="font-[400] text-[16px] leading-[38.4px] jakarta text-[#B7B7B7]">
              Join our community to receive updates{" "}
            </p>
            <div className="flex flex-wrap items-center gap-3 lg:gap-[13.65px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="rounded-full bg-[#E2EDF9] max-w-[251px] outline-none border-none py-3 px-5 text-[#7E9EC0]"
              />
              <SecondaryButton
                text="Subscribe"
                colors="bg-secondary text-light"
                font="font-[400] text-[16px]"
                size="w-[116px] h-[44px]"
              />
            </div>
            <p className="font-[400] text-[12px] leading-[38.4px] jakarta text-[#a7a7a7]">
              {" "}
              By subscribing, you agree to our Privacy Policy{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="lg:flex gap-4 hidden ">
            <a
              href="#"
              className="font-[400] text-[14px] tracking-[-0.5px] jakarta text-[#8C8F9D]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-[400] text-[14px] tracking-[-0.5px] jakarta text-[#8C8F9D]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-[400] text-[14px] tracking-[-0.5px] jakarta text-[#8C8F9D]"
            >
              Cookie Policy
            </a>
          </div>
          <p className="font-[400] text-[14px]  jakarta text-[#8C8F9D] mx-auto lg:mx-0">
            © 2024 James Alonso. All rights reserved
          </p>
        </div>
      </section>
    </article>
  );
}

export default Footer