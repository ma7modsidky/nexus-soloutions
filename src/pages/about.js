import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <>
      <Header />
      
      <main className="relative">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] w-full">
          <Image
            src="/images/1-min.jpg"
            alt="Our team working together"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlapping Section */}
        <div className="relative z-10 mx-auto -mt-20 md:-mt-32 max-w-4xl px-6">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Founded in 2010, we've been transforming HR operations across Egypt and beyond with innovative outsourcing solutions.
            </p>
          </div>
        </div>

        {/* About Content */}
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            <p className="text-lg text-gray-600">
              Suspendisse eu orci luctus est pulvinar egestas. Sed leo tortor, tempus in lacinia at, vulputate semper nisi. Aliquam sodales odio id eleifend tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac risus quis nisl aliquam tincidunt.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold pt-8">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}