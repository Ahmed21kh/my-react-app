import officeTeam from "../images/apout_image.svg";
import icon_1 from "../images/lampa.svg";
import icon_2 from "../images/flag-mountain.svg";
import icon_3 from "../images/heart.svg";
import chatIcon from "../images/chat_icon.png";
import lightIcon from "../images/light_icon.png";
import printIcon from "../images/print_icon.png";

function ApoutSection() {
  return (
    <section className="py-16 bg-white" id="about_section">
      <div className="max-w-[1600px]! mx-auto px-6">
        {/* Top row: text + image */}
        <div className="grid md:grid-cols-2 gap-10 items-start px-6 max-sm:px-2">
          <div>
            <h2 className="text-[45px] max-md:text-4xl max-sm:text-4xl font-semibold text-gray-900 mb-4">
              Who we are and what we do ?
            </h2>
            <p className="text-[#6F6D71] max-w-2xl leading-8 text-[22px] max-md:text-base">
              We in e-RAMO truly care about our users and our digital
              solutions.For many businesses, your website is the main line of
              communication between your customers and your company. <br />
              Let's make something great together that deserve your company. We
              design custom websites based on any requirements from 5 pages to
              500 pages (or more). We offer Static websites & Dynamic. We have
              designed and built huge websites with Content Managed Backend
              Systems ( CMS ) and an array of different functionalists that fit
              client's needs.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className=" bg-[#D9D9D9] shadow-lg">
              <img
                src={officeTeam}
                alt="Office team"
                className="block w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Inline feature bullets */}
        <div className="mt-15 flex justify-center flex-wrap gap-x-10 gap-y-5 text-sm text-gray-700 px-6">
          <ul className=" grid grid-cols-4 place-items-center max-lg:grid-cols-2 max-md:grid-cols-1 max-md:place-items-start items-center justify-around list-disc text-[#594D1C] w-full font-semibold text-lg max-md:text-xl gap-8 max-w-7xl">
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Award-winning design
              </span>
            </li>
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Easy to Customize pages
              </span>
            </li>
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Super Fast Customer support
              </span>
            </li>
            <li className="">
              <span className="bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Powerful Performance
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-40 mx-auto max-md:mt-30 grid grid-cols-[1fr_1fr_1fr] max-sm:grid-cols-[1fr] place-items-center gap-5 max-md:gap-20 max-w-5xl">
          <div className="bg-[#EBEBEB] text-center p-6 rounded  shadow-xl relative flex flex-col items-center justify-center max-w-[216px] max-md:max-w-full!">
            <img
              src={icon_1}
              alt="Our company"
              className=" absolute top-[-25%] max-md:w-25"
            />
            <div className=" flex flex-col items-center justify-center gap-1">
              <h3 className="font-bold mt-9 mb-2 text-[22px] bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Our company
              </h3>
              <p className="text-xs font-semibold">
                We provide our clients a full integrated approach to achieve the
                best product marketing.
              </p>
            </div>
          </div>

          <div className="bg-[#EBEBEB] text-center p-6 rounded  shadow-xl relative flex flex-col items-center justify-center max-w-[216px]  max-md:max-w-full!">
            <img
              src={icon_2}
              alt="Our company"
              className=" absolute max-md:block! top-[-55%] max-md:top-[-30%] max-md:w-25"
            />

            <div className=" flex flex-col items-center justify-center gap-1">
              <h3 className="font-bold mt-9 mb-2 text-[22px] bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-xs font-semibold">
                To serve all kinds of business from small to international
                companies.
              </p>
            </div>
          </div>

          <div className="bg-[#EBEBEB] text-center p-6 rounded shadow-2xl relative flex flex-col items-center justify-center max-w-[216px] max-md:max-w-full!">
            <img
              src={icon_3}
              alt="Our company"
              className=" absolute top-[-20%]"
            />

            <div className=" flex flex-col items-center justify-center gap-1">
              <h3 className="font-bold mt-9 mb-2 text-[22px] bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                Our company
              </h3>
              <p className="text-xs font-semibold">
                We provide our clients a full integrated services to achieve the
                best results in customized solutions.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do section */}
        <div className="mt-20 max-md:mt-20 flex justify-center">
          {/* Left title */}

          {/* Right cards laid out like design */}
          <div className="grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 gap-y-9 gap-x-20  place-items-end items-baseline-last justify-items-end max-w-6xl content-evenly max-md:place-items-center">
            {/* empty cell to push first card to top-right on wide screens */}
            <div className="relative flex  h-full items-center justify-self-center ">
              <div className="relative ">
                <div className=" flex items-start justify-start">
                  <h3 className="text-[110px] max-md:text-[85px] font-bold leading-tight bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent text-nowrap">
                    What
                    <br />
                    <span>We Do?</span>
                  </h3>
                </div>
              </div>
            </div>
            {/* Top right small card */}
            <div className="bg-[#F8F8F8] rounded-xl shadow-xl p-8 border border-gray-200 max-w-[411px] h-[350px] max-md:max-w-full overflow-hidden text-ellipsis">
              <div className="flex items-center mb-3">
                <img src={chatIcon} alt=" image" />
                <h4 className="font-semibold text-lg bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  We have tricks
                </h4>
              </div>
              <p className="text-[18px] max-md:text-[16px] text-[#6F6D71] leading-relaxed text-ellipsis">
                We Improve your online view, We in e-RAMO monitor keyword
                rankings daily, as every single day search engines index new
                pages with new keywords so we have to strategise and forecast
                your digital marketing efforts.
              </p>
            </div>

            {/* Bottom left small card */}
            <div className=" bg-[#F8F8F8] rounded-xl shadow-xl justify-self-center p-8 border border-gray-200 max-w-[411px] max-md:max-w-full h-[350px]">
              <div className="flex items-center gap-3 mb-3">
                <img src={printIcon} alt=" image" />
                <h4 className="font-semibold text-lg bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  We are award winner
                </h4>
              </div>
              <p className="text-[20px] max-md:text-[16px] text-[#6F6D71] leading-relaxed">
                We are a certified Google Ads Partner and specialized in PPC
                advertising with conversion tracking to achieve the maximum
                return on investment from your advertising budget.
              </p>
            </div>

            {/* Bottom right large card */}
            <div className="bg-white rounded-xl shadow-xl p-9 border-2 max-w-[560px] max-md:max-w-full h-[450px]">
              <div className="flex items-center gap-3 mb-4">
                <img src={lightIcon} alt=" image" />
                <h4 className="font-semibold text-2xl bg-linear-to-r from-[#594D1C] to-[#BEA036] bg-clip-text text-transparent">
                  We Brand You
                </h4>
              </div>
              <p className="text-[22px] max-md:text-[16px] text-[#6F6D71] leading-relaxed ">
                As social media continues to grow as a proven marketing
                strategy, we help you build clever and effective campaigns that
                strengthen your brand and achieve measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApoutSection;
