export const CustomerStory = () => {
  return (
    <section className="bg-[rgba(13,13,13,1)] flex w-full flex-col items-center justify-center px-5 py-16 md:px-10 lg:px-16 xl:px-[70px] md:py-20 xl:py-[107px]">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="w-full md:w-[46%] flex flex-col">
            <div className="flex flex-col w-full text-lg font-normal tracking-[-0.18px] leading-[1.4]">
              <div className="flex items-center gap-2 text-[rgba(208,255,0,1)]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/62b92f30ff7e104a65662649ef89c6ce794f6d3d?placeholderIfAbsent=true"
                  alt="Customer story icon"
                  className="w-6 h-6 object-contain"
                />
                <div>Customer story</div>
              </div>
              
              <h2 className="text-[rgba(204,204,204,1)] text-2xl md:text-3xl lg:text-[38px] leading-tight md:leading-[42px] tracking-[-1.14px] mt-6 md:mt-[43px]">
                "Our growth no longer necessitates the recruitment and education
                of additional smart home integration specialists"
              </h2>
              
              <div className="flex items-center gap-2 text-[rgba(122,122,122,1)] mt-6 md:mt-[38px] cursor-pointer hover:text-[rgba(208,255,0,1)] transition-colors">
                <div className="my-auto">Read the story</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/b64baa1340288002bdbc9d9bbb84c7a08b401013?placeholderIfAbsent=true"
                  alt="Arrow right"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-[54%] mt-8 md:mt-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/aea48a609ed44a0d989d7460db0f3317/757d1739f4d0239420177ef1b69a92b630e33f39?placeholderIfAbsent=true"
              alt="Customer story illustration"
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};