import { FooterLogo } from "../assets/svgs/Icons";


const Footer = () => {
  return (
    <article className="bg-[url('/src/assets/images/footer-bg.png')] bg-contain bg-no-repeat h-[47.8vh]">
        <section className="container p-4 mx-auto">
            <div>
                <div>
                    <FooterLogo />
                </div>
            </div>
        </section>
      
    </article>
  );
}

export default Footer