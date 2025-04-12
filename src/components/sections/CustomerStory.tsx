export const CustomerStory = () => {
  return (
    <section className="bg-[rgba(13,13,13,1)] flex w-full flex-col items-center justify-center px-[70px] py-[107px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="w-[1161px] max-w-full ml-[51px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[46%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch text-lg font-normal tracking-[-0.18px] leading-[1.4] my-auto max-md:max-w-full max-md:mt-10">
              <div className="flex items-stretch gap-2 text-[rgba(208,255,0,1)]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/62b92f30ff7e104a65662649ef89c6ce794f6d3d?placeholderIfAbsent=true"
                  alt="Customer story icon"
                  className="aspect-[1] object-contain w-[25px] shrink-0"
                />
                <div className="basis-auto">Customer story</div>
              </div>
              <h2 className="text-[rgba(204,204,204,1)] text-[38px] leading-[42px] tracking-[-1.14px] self-stretch mt-[43px] max-md:max-w-full max-md:mt-10">
                "Our growth no longer necessitates the recruitment and education
                of additional smart home integration specialists"
              </h2>
              <div className="flex items-stretch gap-[7px] text-[rgba(122,122,122,1)] mt-[38px] cursor-pointer hover:text-[rgba(208,255,0,1)] transition-colors">
                <div className="grow my-auto">Read the story</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/b64baa1340288002bdbc9d9bbb84c7a08b401013?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="aspect-[1] object-contain w-8 shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/757d1739f4d0239420177ef1b69a92b630e33f39?placeholderIfAbsent=true"
              alt="Customer story illustration"
              className="aspect-[1.5] object-contain w-full grow rounded-[20px] max-md:max-w-full max-md:mt-[37px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
