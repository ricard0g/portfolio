import React from "react";
import Chart from "./Chart";

export default function ServiceCard() {
  return (
    <div className="flex flex-col items-center h-screen w-11/12 gap-y-2 min-[911px]:w-4/5 mt-14">
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 w-full md:h-[560px]">
        <div className="relative flex flex-col gap-y-10  w-full md:w-3/5 h-[600px] md:h-full p-10 bg-gradient-to-bl from-gray-50 from-50% to-shopify-light rounded-xl border-[1px] border-gray-200 overflow-hidden z-0">
          <h3 className="text-left font-textSemiBold text-xl">Store Setup</h3>
          <p className="text-pretty text-lg">
            Save time and eliminate stress with professional store setup
            services. You run your business, I'll ensure your online presence
            works flawlessly.
          </p>
          <figure className="relative w-[200%] sm:w-[180%] lg:w-[130%] -ml-12 ">
            <img
              src="/store_setup_mockup.webp"
              className="w-full mb-16"
              alt="Mockup Of a Computer withy Shopify Dashboard"
            />
            <p>Device Mockup created from </p>
            <a href="https://deviceframes.com/templates/macbook-air">
              MacBook Air mockups
            </a>
          </figure>
        </div>
        <div className="relative flex flex-col gap-y-10  w-full md:w-2/5 h-[600px] md:h-full p-10 bg-gray-50 rounded-xl border-[1px] border-gray-200 overflow-hidden z-0">
          <h3 className="text-left font-textSemiBold text-xl">
            Theme Customizations
          </h3>
          <p className="text-pretty text-lg">
            Transform your Shopify store into a sales machine with custom themes
            that convert. Beautiful design meets proven results.
          </p>
          <div className="relative">
            <figure className="absolute top-0 w-[180%] md:w-[160%] lg:w-[140%] xl:w-[120%] -left-12 md:-left-10 lg:-left-10 lg:-mt-4 ">
              <img
                src="/code_snippet_mockup.png"
                className="w-full"
                alt="Code Snippet mockup"
              />
            </figure>
            <figure className="absolute top-12 left-1/3 md:left-1/2 w-4/5 md:w-2/3 ">
              <img
                src="/theme_customization_screenshot.png"
                className="w-full"
                alt="Theme Customizer"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 w-full md:h-[560px]">
        <div className="relative flex flex-col gap-y-10  w-full md:w-1/2 h-[600px] md:h-full p-10 bg-gray-50 rounded-xl border-[1px] border-gray-200 overflow-hidden z-0">
          <h3 className="text-left font-textSemiBold text-xl">
            Conversion Rate Optimization
          </h3>
          <p className="text-pretty text-lg">
            Boost your conversion rates with proven CRO tactics. Strategic A/B
            testing that delivers measurable results.
          </p>
          <div className="relative h-80 w-[120%] sm:w-full lg:w-full sm:left-0 lg:left-0 -left-[15%]">
            <Chart />
          </div>
        </div>
        <div className="relative flex flex-col gap-y-10  w-full md:w-1/2 h-[600px] md:h-full p-10 bg-gray-50 rounded-xl border-[1px] border-gray-200 overflow-hidden z-0">
          <h3 className="text-left font-textSemiBold text-xl">
            Store Migration
          </h3>
          <p className="text-pretty text-lg">
            Seamlessly migrate your e-commerce store without losing SEO rankings
            or data. From WooCommerce to Adobe Commerce (formerly Magento), I
            handle it all.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="relative flex flex-col gap-y-10  w-full md:w-2/5 h-[600px] md:h-full p-10 bg-gray-50 rounded-xl border-[1px] border-gray-200 overflow-hidden z-0"></div>
        <div className="relative flex flex-col gap-y-10  w-full md:w-2/5 h-[600px] md:h-full p-10 bg-gray-50 rounded-xl border-[1px] border-gray-200 overflow-hidden z-0"></div>
      </div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
