import officeTeam from "../images/apout_image.svg";
import icon_1 from "../images/lampa.svg"
import icon_2 from "../images/flag-mountain.svg"
import icon_3 from "../images/heart.svg"
import chatIcon from "../images/chat_icon.png"
import lightIcon from "../images/light_icon.png"
import printIcon from "../images/print_icon.png"

function ApoutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1600px]! mx-auto px-6">
        {/* Top row: text + image */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Who we are and what we do ?
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We in e-RAMO truly care about our users and our digital solutions.
              For many businesses, your website is the main line of
              communication between your customers and your company. We design
              custom websites based on any requirements from 5 pages to 500
              pages (or more). We offer static websites &amp; dynamic.
              We&apos;ve designed and built huge websites with Content Managed
              Backend Systems (CMS) and an array of different functionalities
              that fit client&apos;s needs.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className=" p-1 bg-white shadow-lg">
              <img
                src={officeTeam}
                alt="Office team"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Inline feature bullets */}
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm text-gray-700">
          <ul className=" flex items-center justify-between list-disc text-[#594D1C] w-full font-semibold text-lg flex-wrap gap-5">
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Award-winning design
              </span>
            </li>
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Easy to Customize pages
              </span>{" "}
            </li>
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Super Fast Customer support
              </span>{" "}
            </li>
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Powerful Performance
              </span>{" "}
            </li>
          </ul>
        </div>

        {/* Bottom cards */}
        <div className="mt-30 grid sm:grid-cols-3 place-items-center gap-8">
          <div className="bg-[#EBEBEB] text-center px-6 py-8 rounded  shadow-xl relative flex flex-col items-center justify-center w-[216px]">
            <img src={icon_1} alt="Our company" className=" absolute top-[-20%]" />
            <h3 className="font-semibold mt-9 mb-2 text-xl bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">Our company</h3>
            <p className="text-xs font-semibold">
              We provide our clients a full integrated approach to achieve the
              best product marketing.
            </p>
          </div>

          <div className="bg-[#EBEBEB] text-center px-6 py-8 rounded  shadow-xl relative flex flex-col items-center justify-center w-[216px]">
          <img src={icon_2} alt="Our company" className=" absolute top-[-55%]" />

            <h3 className="font-semibold mt-9 mb-2 text-xl bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">Our Mission</h3>
            <p className="text-xs font-semibold">
              To serve all kinds of business from small to international
              companies.
            </p>
          </div>

          <div className="bg-[#EBEBEB] text-center px-6 py-8 rounded  shadow-xl relative flex flex-col items-center justify-center w-[216px]">
          <img src={icon_3} alt="Our company" className=" absolute top-[-20%]" />

            <h3 className="font-semibold mt-9 mb-2 text-xl bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">Our company</h3>
            <p className="text-xs font-semibold">
              We provide our clients a full integrated services to achieve the
              best results in customized solutions.
            </p>
          </div>
        </div>

        {/* What We Do section */}
        <div className="mt-32 grid md:grid-cols-[1.1fr,1.2fr] gap-12 items-start">
          {/* Left title */}


          {/* Right cards laid out like design */}
          <div className="grid sm:grid-cols-2 gap-8 auto-rows-min place-items-center">
            {/* empty cell to push first card to top-right on wide screens */}
            <div className="relative flex items-center justify-center md:justify-start">
            <div className="relative">
              <div className="h-64 w-64 flex items-center justify-center">
                <h3 className="text-7xl! md:text-5xl font-semibold leading-tight bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  What
                  <br />
                  <span>We Do?</span>
                </h3>
              </div>
            </div>
          </div>
            {/* Top right small card */}
            <div className="bg-[#F8F8F8] rounded-xl shadow-xl p-8 border border-gray-200 max-w-[411px]">
              <div className="flex items-center mb-3">
                <img src={chatIcon} alt=" image" />
                <h4 className="font-semibold text-lg bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  We have tricks
                </h4>
              </div>
              <p className="text-md text-[#6F6D71] leading-relaxed">
              We Improve your online view, We in e-RAMO monitor keyword rankings daily, as every single day search engines index new pages with new keywords so we have to strategise and forecast your digital marketing efforts.
              </p>
            </div>

            {/* Bottom left small card */}
            <div className=" bg-[#F8F8F8] rounded-xl shadow-xl p-8 border border-gray-200 max-w-[411px]">
              <div className="flex items-center gap-3 mb-3">
                <img src={printIcon} alt=" image" />
                <h4 className="font-semibold text-lg bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  We are award winner
                </h4>
              </div>
              <p className="text-xs text-[#6F6D71] leading-relaxed">
                We are a certified Google Ads Partner and specialized in PPC
                advertising with conversion tracking to achieve the maximum return
                on investment from your advertising budget.
              </p>
            </div>

            {/* Bottom right large card */}
            <div className="bg-white rounded-xl shadow-lg p-9 border-2 border-[#594D1C] sm:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={lightIcon} alt=" image" />
                <h4 className="font-semibold text-2xl bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  We Brand You
                </h4>
              </div>
              <p className="text-sm text-[#6F6D71] leading-relaxed">
                As social media continues to grow as a proven marketing strategy, we
                help you build clever and effective campaigns that strengthen your
                brand and achieve measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApoutSection;
