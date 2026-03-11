import logo from "../images/e-ramo-logo-high-res 2.png"

function FooterComponent() {
  return (
    <section className="bg-[url(images/Union.jpg)] w-full object-fit-cover h-100 bg-cover bg-no-repeat">
       <img src={logo} alt="" className=" mx-auto rounded-full" />
    </section>
  )
}

export default FooterComponent

