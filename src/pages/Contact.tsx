
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* <div className="container mx-auto px-4 py-12"> */}
          {/* <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-muted-foreground">
              Have a project idea or just want to say hello? I'd love to hear from you!
            </p>
          </div> */}

          <ContactForm />
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
