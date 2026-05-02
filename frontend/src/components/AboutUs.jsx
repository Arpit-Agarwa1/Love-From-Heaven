/**
 * Brand story: mother–daughter baking, why Love From Heaven exists, and what we stand for.
 */
export function AboutUs() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-heaven-mist/90 bg-gradient-to-b from-heaven-blush/25 via-heaven-cream to-heaven-cream"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-heaven-rose">Our story</p>
        <h2 id="about-heading" className="mt-2 font-display text-3xl font-semibold tracking-tight text-heaven-cocoa sm:text-4xl">
          About us
        </h2>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-heaven-cocoa/78 sm:text-lg">
          <p>
            This is where the magic started. I was 10 years old when I started helping my mother with all her baking. As
            much as she loved baking and keeping everyone around her happy with it, I loved eating what she made. In fact,
            the first ever cake I made was for my Mom.
          </p>
          <p>
            Eventually, over the years I fell in love with baking too. I remember that Mumma always packed a small box of
            something sweet for me for school (this is something all my school and college friends know of because it was like
            a consolation prize at the end of the day for us all). Love From Heaven started out with the intention of
            keeping my Mom alive in the thing she loved the most.
          </p>
        </div>

        <blockquote className="mt-10 border-l-2 border-heaven-rose/50 pl-6 font-display text-xl italic leading-snug text-heaven-cocoa sm:text-2xl">
          I certainly get a high when people are happy to the core while eating something I made.
        </blockquote>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-heaven-cocoa/78 sm:text-lg">
          <p>
            This place I believe is not just for the business, but it&apos;s looking for joy in the little things. How food
            connects us all, how it fills our life with sweetness, how every occasion is incomplete without it.
          </p>
          <p className="font-medium text-heaven-cocoa/90">The idea is to make people fall in love with the art of baking.</p>
          <p>
            Love From Heaven showcases a mother daughter duo&apos;s immense love for baking. It brings forward a kid&apos;s
            passion for baking and fulfilling her and her mother&apos;s dream of spreading the joy of baking all around!
          </p>
        </div>
      </div>
    </section>
  );
}
