import { ProductsSection } from "@/components/products-section";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-20">
        <Header />
      </div>
      <main className="flex-1 overflow-auto">
        <h1 className="sr-only">scriptkavi.com</h1>
        <div className="relative mb-4 flex items-center justify-center py-[15vh] text-gray-900 ">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative mb-72 h-full w-full min-w-[29rem] max-w-[96rem] sm:mb-0"></div>
          </div>
          <div className="relative flex w-full flex-col items-center gap-6 px-6 text-center">
            <div className="flex w-full flex-col items-center gap-1.5">
              <h2
                className="text-4xl font-semibold tracking-tighter sm:text-5xl [@media(max-width:480px)]:text-[2rem]"
                data-testid="home-h2"
              >
                Creative. Analytical. Adaptive.
              </h2>
              <p>
                {`Crafting Digital Experiences with `}
                <br className="sm:hidden" />
                {`Precision and Creativity.`}
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="features-root mb-8">
        <ProductsSection />
      </section>
      <Footer />
    </div>
  );
}
