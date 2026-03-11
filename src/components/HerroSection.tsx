import vector2 from "../images/Vector2.png"

function HerroSection() {
  return (
    <section
      className="bg-[url(images/home_bg.jpg)] bg-center bg-cover bg-no-repeat h-screen relative text-white "
      id="home"
    >
      <div className="absolute inset-0 bg-[#656b66b7]" />
      <div
        className=" absolute bottom-0 left-0 w-full h-50 max-sm:h-35 bg-white"
        style={{ clipPath: 'polygon(0 10%, 0% 101%, 100% 100%)' }}
      />
      

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-8 text-start -top-20">
        
        <img src={vector2} alt="image" className=" absolute right-[20%] max-sm:right-[5%] w-auto h-3/4 max-lg:h-2/3 max-sm:h-[55%] "/>

        <h2 className="text-[72px] max-lg:text-5xl! max-sm:text-[2rem]! font-bold! leading-tight text-nowrap z-3">
          e-RAMO Agency For
          <br />
          <span className="text-[#DAAE12] font-bold">Digital Solutions</span>
          <span className="text-[#DAAE12] align-top"> |</span>
        </h2>

        <p className="mt-2 max-w-xl max-lg:max-w-sm text-md md:text-base text-gray-100 z-3">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum
          dolor. Voluptate exercitation incididunt aliquip deserunt.
        </p>

        <button className=" w-fit mt-8 inline-flex items-center justify-center px-8 py-2 rounded-lg text-lg text-white bg-linear-to-r hover:scale-115 transition-all duration-400! ease-in-out! from-[#594D1C] to-[#BEA036] z-2">
          GET START
        </button>
      </div>


      <div className="absolute bottom-[10%] max-md:bottom-[15%] right-30 max-md:right-18 flex items-center gap-3">
        <span className="h-2 w-10 bg-linear-to-r  from-[#594D1C] to-[#BEA036]" />
        <span className="h-2 w-10 bg-white" />
        <span className="h-2 w-10 bg-white" />
      </div>
    </section>
  )
}

export default HerroSection
