/* eslint-disable react/prop-types */
import { TickIcon } from "../assets/svgs/Icons";
import { planning } from "../data/data";
import { SecondaryButton } from "../globalComponents/Button";

const Plans = () => {
  return (
    <article className="mt-[30px] md:mt-[100px] container mx-auto p-4">
      <section className="bg-[url('/src/assets/images/plan-bg.png')] bg-no-repeat bg-cover py-[30px] md:pt-[0px] md:pb-[60px]">
        <h1 className="text-primary text-center font-[600] tracking-[-1px] text-[32px] md:text-[48px] leading-[36px] md:leading-[104px]">
          Subscription Plans
        </h1>
      </section>
      <div className="flex gap-5 justify-center items-center flex-col lg:flex-row">
        {planning.map((plan, i) =>{
            return(
                <Plan type={plan.type} price={plan.price} list={plan.list} key={i}/>
            )
        })}
      </div>
    </article>
  );
}

export default Plans

const Plan =({type , price, list}) =>{
    return (
      <article className="rounded-[12px] shadow-[var(--blue-shadow)] max-w-[317px]">
        <section
          className={`relative flex flex-col gap-2 items-center ${
            type == "Basic" ? "bg-[#00000050]" : "bg-primary"
          } px-4  py-9 rounded-t-[12px]`}
        >
            {type!="Basic" && <p className={`absolute left-1 top-1 z-1 text-[12px] rounded-[20px] px-3 py-1 ${type=="Standard" ? "bg-yellow-500 text-light" : " bg-[#ffffff] text-primary"}`}>
                {type=="Standard" ? "Rcommended": "Most Popular"}
                </p>}
          <h3
            className={`font-[500] text-lg ${
              type === "Basic" ? "text-primary" : "text-light"
            }`}
          >
            {type} Plan
          </h3>
          <h1
            className={`font-[500] text-4xl ${
              type === "Basic" ? "text-primary" : "text-light"
            }`}
          >
            £{price}
          </h1>

          <SecondaryButton
            text="Get Started"
            font="text-xs font-[500]"
            size="w-[95px] h-[30px]"
            colors={`${type=="Basic"? "bg-primary text-light": "bg-light text-primary"}`}
          />
        </section>
        <section className="px-3 py-6 space-y-3 rounded-b-[12px]">
          <h3 className="text-dark font-[600] text-sm">What you will get:</h3>
          <section className="mb-5 space-y-3">
            {list.map((single, i) => {
              return (
                <div className="flex items-center gap-2" key={i}>
                  <span>
                    <TickIcon />
                  </span>
                  <p className="text-grey6 text-sm">{single}</p>
                </div>
              );
            })}
          </section>
        </section>
      </article>
    );
}