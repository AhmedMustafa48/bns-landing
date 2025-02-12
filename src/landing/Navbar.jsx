import { useEffect, useState } from "react";
import { Logo } from "../assets/svgs/Icons";
import { PrimaryButton } from "../globalComponents/Button";

const Navbar = () => {
     const [openNav, setOpenNav] = useState(false);

     useEffect(() => {
       window.addEventListener(
         "resize",
         () => window.innerWidth >= 960 && setOpenNav(false)
       );
     }, []);

     return (
       <header className="sticky top-0 z-10  max-w-full rounded-none bg-light h-max lg:h-[71px]  ">
         <div className="container mx-auto p-4   flex items-center justify-between text-primary">
           <Logo />
           <div className="flex items-center gap-9">
             <div className="mr-4 hidden lg:block">
               <NavList />
             </div>
             <div className="flex items-center gap-[24px]">
               <div className="hidden lg:inline-block">
                 <a
                   href="#"
                   className="text-[16px] leading-[16.8px] tracking-[-0.32px] font-[400] jakarta"
                 >
                   Login
                 </a>
               </div>
               <div className="hidden lg:inline-block">
                 <PrimaryButton
                   colors="bg-secondary text-light jakarta"
                   font="font-[400] text-[15.88px]"
                   text="Register"
                   size="w-[120px] h-[47px]"
                 />
               </div>
             </div>
             <button
               className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
               onClick={() => setOpenNav(!openNav)}
             >
               {openNav ? (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   className="h-6 w-6"
                   viewBox="0 0 24 24"
                   stroke="#092540"
                   strokeWidth={2}
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 18L18 6M6 6l12 12"
                   />
                 </svg>
               ) : (
                 <svg
                   width="19"
                   height="17"
                   viewBox="0 0 19 17"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M17.5 14C17.8852 14.0002 18.2556 14.1486 18.5344 14.4144C18.8132 14.6802 18.979 15.0431 18.9975 15.4279C19.016 15.8127 18.8858 16.1898 18.6338 16.4812C18.3818 16.7726 18.0274 16.9558 17.644 16.993L17.5 17H1.5C1.11478 16.9998 0.744405 16.8514 0.465613 16.5856C0.186821 16.3198 0.020988 15.9569 0.00247574 15.5721C-0.0160365 15.1873 0.114192 14.8102 0.366175 14.5188C0.618159 14.2274 0.972581 14.0442 1.356 14.007L1.5 14H17.5ZM17.5 7C17.8978 7 18.2794 7.15804 18.5607 7.43934C18.842 7.72064 19 8.10218 19 8.5C19 8.89782 18.842 9.27936 18.5607 9.56066C18.2794 9.84196 17.8978 10 17.5 10H1.5C1.10218 10 0.720644 9.84196 0.43934 9.56066C0.158035 9.27936 0 8.89782 0 8.5C0 8.10218 0.158035 7.72064 0.43934 7.43934C0.720644 7.15804 1.10218 7 1.5 7H17.5ZM17.5 0C17.8978 0 18.2794 0.158035 18.5607 0.43934C18.842 0.720644 19 1.10218 19 1.5C19 1.89782 18.842 2.27936 18.5607 2.56066C18.2794 2.84196 17.8978 3 17.5 3H1.5C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H17.5Z"
                     fill="#092540"
                   />
                 </svg>
               )}
             </button>
           </div>
         </div>
         {openNav && (
           <div open={openNav} className="container p-4 mx-auto relative z-1">
             <NavList />
             <div className=" flex items-center justify-center gap-x-8">
               <div className="lg:hidden inline-block">
                 <a
                   href="#"
                   className=" text-greyBlack text-[16px] leading-[16.8px] tracking-[-0.32px] font-[400] jakarta"
                 >
                   Login
                 </a>
               </div>
               <div className="lg:hidden inline-block">
                 <PrimaryButton
                   colors="bg-secondary text-light jakarta"
                   font="font-[400] text-[15.88px]"
                   text="Register"
                   size="w-[120px] h-[47px]"
                 />
               </div>
             </div>
           </div>
         )}
       </header>
     );
     
  
}

export default Navbar

const NavList=()=>{
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[30px]">
        <a
          href="#"
          className="text-greyBlack text-[16px] leading-[16.8px] tracking-[-0.32px] font-[400] jakarta"
        >
          What is AiDA?
        </a>
        <a
          href="#"
          className="text-greyBlack text-[16px] leading-[16.8px] tracking-[-0.32px] font-[400] jakarta"
        >
          About
        </a>
        <a
          href="#"
          className="text-greyBlack text-[16px] leading-[16.8px] tracking-[-0.32px] font-[400] jakarta"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-greyBlack text-[16px] leading-[16.8px] tracking-[-0.32px] font-[400] jakarta"
        >
          Contact
        </a>
      </ul>
    );
}