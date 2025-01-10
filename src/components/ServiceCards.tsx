import React from "react";

export default function ServiceCard() {
  return (
    <div className="flex flex-col items-center h-screen w-11/12 mt-14">
      <div className="flex gap-x-2 w-full h-[560px]">
        <div className="relative flex flex-col gap-y-10  w-3/5 p-10 bg-gray-50 rounded-xl border-[1px] border-gray-200 overflow-hidden">
          <h3 className="text-left font-textSemiBold text-xl">Store Setup</h3>
          <p className="text-pretty text-lg">
            Save time and eliminate stress with professional store setup
            services. You run your business, I'll ensure your online presence
            works flawlessly.
          </p>
          <div className="w-full -mt-8">
            <img src="/store-setup-mockup.png" className="w-full" />
          </div>
        </div>
        <div className="w-2/5 bg-shopify-light rounded-xl">
          <p>Que tal va la vaina</p>
        </div>
      </div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
      <div className="flex">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
