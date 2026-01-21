import ContactForm from "../../components/ContactForm/ContactForm";
import NewFooter from "../../components/NewFooter/NewFooter";
import PageTitle from "../../components/PageTitle";
import Navbar from "../../Shared/Navbar/Navbar";

export default function Contact() {
  const title = "Contact Us";
  return (
    <>
      <Navbar />
      <PageTitle title={title} />
      {/* <SectionWrapper>
        <SectionTitle
          title={"Contact Details"}
          subtitle={"Contact our head office"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <BiMap size={"44"} />
            <div>
              <h4 className="text-sm mb-4">ADDRESS</h4>
              <p className="text-2xl">
                70 Bowman St. South <br />
                Windsor, CT 06074
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <BiEnvelope size={"44"} />
            <div>
              <h4 className="text-sm mb-4">EMAIL ADDRESS</h4>
              <Link className="text-2xl" to="mailto:info@lagomcar.com">
                info@lagomcar.com
              </Link>
              <br />
              <Link className="text-2xl" to="mailto:complaint@lagomcar.com">
                complaint@lagomcar.com
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <BiPhone size={"44"} />
            <div>
              <h4 className="text-sm mb-4">PHONE</h4>
              <Link className="text-2xl" to="tel:9585-554-5555">
                +586 555 9506
              </Link>
              <br />
              <Link className="text-2xl" to="tel:9585-554-5555">
                +985 554 5555
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper> */}
      <ContactForm />
      {/* <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-0"
        style={{ alignItems: "center" }}
      >
        <div className="p-8 lg:px-12 xl:px-24 2xl:px-40">
          <SectionTitle
            title={"Message Us"}
            subtitle={"Contact our head office"}
            align={"left"}
          />
          <form action="/">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input type="text" required name="name" placeholder="Name *" />
                <Input type="email" required id="email" placeholder="Email" />
              </div>
              <Textarea required placeholder="Message *"></Textarea>
              <Button className="bg-sky-600">Send message</Button>
            </div>
          </form>
        </div>
        <div className="relative aspect-[16/9] bg-gray-100">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          />
        </div>
      </div> */}
      <NewFooter />
    </>
  );
}
