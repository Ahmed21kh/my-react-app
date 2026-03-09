import vector2 from "../images/Vector2.png"

function HerroSection() {
  return (
    <section
      className="bg-[url(images/home.jpg)] bg-center bg-cover h-screen relative text-white overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-black/45" /> */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-white"
        style={{ clipPath: 'polygon(0 10%, 0 100%, 100% 100%)' }}
      />
      

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-10 text-start">
      <img src={vector2} alt="" width={'auto'} className=" absolute right-58 w-auto h-auto top-6"/>
        <h2 className="text-[72px] md:text-5xl font-[700]! leading-tight">
          e-RAMO Agency For
          <br />
          <span className="text-[#DAAE12] font-bold">Digital Solutions</span>
          <span className="text-[#DAAE12] align-top"> |</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm md:text-base text-gray-100">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum
          dolor. Voluptate exercitation incididunt aliquip deserunt.
        </p>

        <button className=" w-fit mt-8 inline-flex items-center justify-center px-7 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#594D1C] to-[#BEA036]">
          GET START
        </button>
      </div>


      <div className="absolute bottom-10 right-24 flex items-center gap-2">
        <span className="h-1.5 w-10 rounded-full bg-[#BEA036]" />
        <span className="h-1.5 w-8 rounded-full bg-white/90" />
        <span className="h-1.5 w-8 rounded-full bg-white/60" />
      </div>
    </section>
  )
}

export default HerroSection
