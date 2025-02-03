import { FooterLogo } from "../assets/svgs/Icons";


const Footer = () => {
  return (
    <article className="bg-[url('/src/assets/images/footer-bg.png')] bg-contain bg-no-repeat h-[47.8vh]">
      <section className="container p-4 mx-auto">
        <div>
          <div>
            <FooterLogo />
            <h1 className="text-light text-[16px] leading-[24px] max-w-[295px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </h1>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Footer