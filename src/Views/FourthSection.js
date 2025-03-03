import React from 'react';

const FourthSection = () => {
  return (
    <section className="relative font-garamond">
      <div className="absolute inset-0 bg-[#EEECE3]" />
      <div className="relative py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-36 items-start">
            
            {/* Title: shows first on mobile, second on desktop */}
            <div className="md:order-2">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium text-black max-w-[480px] leading-tight">
                A new value proposition for GPs
              </h2>
            </div>

            {/* Content: shows second on mobile, first on desktop */}
            <div className="md:order-1 max-w-xl">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-black mb-8">
                Our asset-based approach allows us to offer greater flexibility and liquidity without giving up any upside
              </p>

              <div className="bg-white/10 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg">
                <ul className="space-y-6">
                  <li className="text-black">
                    <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">
                      Flexible
                    </span>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                      LPA-friendly, covenant-light agreements
                    </p>
                  </li>
                  <li className="text-black">
                    <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">
                      Non-dilutive
                    </span>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                      Ownership stays with GPs, maintaining upside and alignment
                    </p>
                  </li>
                  <li className="text-black">
                    <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">
                      No personal guaranty
                    </span>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                      Focus is solely on the economics of the assets
                    </p>
                  </li>
                  <li className="text-black">
                    <span className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold block mb-2">
                      Flexible repayment
                    </span>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                      No amortization and option to accrue interest until the next distribution
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
