import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Starbucks</title>
        <meta name="description" content="Welcome to Starbucks Homepage" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        {/* Banner */}
        <section className="bg-[#D4E8E1] max-w-[1240px] mx-auto py-10 text-center text-[#1E3932] my-10 space-x-8 flex flex-col-reverse  lg:flex-row justify-between items-center">
          <div className="flex-1 px-10 space-y-6">
            <h2 className="text-3xl uppercase font-bold leading-snug tracking-[0.4rem] lg:text-6xl lg:leading-snug">
              starbucks for life
            </h2>
            <p className="text-xl font-medium leading-10 lg:text-2xl lg:leading-10">
              It's the most festive game of the year, with chances to win free
              coffee and more.*{" "}
              <a className="text-main-color border-b-4 border-b-main-color">
                Play now
              </a>
            </p>
          </div>
          <div className="flex-1">
            <img className="" src="/img/banner-img.png" alt="" />
          </div>
        </section>
        {/* Section A */}
        <section className="bg-main-color max-w-[1240px] mx-auto py-10 px-10 text-center text-white my-10">
          <h2 className="uppercase text-4xl font-medium tracking-[0.2em] mb-10 leading-[1.5] xl:text-5xl xl:leading-snug">
            jingle all the way to free favorites
          </h2>
          <p className="text-xl">
            Join Starbucks Rewards for delicious deals & exclusive offers.{" "}
            <a href="#" className="border-b">
              Learn more
            </a>
          </p>
        </section>

        {/* Section B */}
        <section className="bg-color-secondary max-w-[1240px] mx-auto  text-white flex flex-col lg:flex-row my-8">
          <div className="flex-1">
            <img className="h-auto" src="/img/box-b.png" alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center space-y-10 text-center px-10 py-10 justify-center ">
            <h2 className="uppercase text-4xl font-medium tracking-[0.2em] leading-snug">
              new to the nice list
            </h2>
            <p className="text-lg leading-[1.9]">
              For a nondairy twist on a holiday cookie classic, try the new Iced
              Sugar Cookie Almondmilk Latte.
            </p>
            <button className="border border-white rounded-full py-2 px-4">
              Order Now
            </button>
          </div>
        </section>

        {/* Section C  */}
        <section className="bg-color-secondary max-w-[1240px] mx-auto  text-white flex flex-col lg:flex-row-reverse my-8">
          <div className="flex-1">
            <img className="h-auto" src="/img/box-c.png" alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center space-y-10 text-center px-10 py-10 justify-center ">
            <h2 className="uppercase text-4xl font-medium tracking-[0.2em] leading-snug">
              merry moment
            </h2>
            <p className="text-lg leading-[1.9]">
              Treat yourself to a festive Sugar Plum Cheese Danish with a nicely
              spiced sugar - plum spread.
            </p>
            <button className="border border-white rounded-full py-2 px-4">
              Order Now
            </button>
          </div>
        </section>

        {/* Section D */}
        <section className="bg-main-color max-w-[1240px] mx-auto  text-white flex flex-col lg:flex-row my-8">
          <div className="flex-1">
            <img className="h-auto" src="/img/box-d.png" alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center space-y-10 text-center px-10 py-10 justify-center ">
            <h2 className="uppercase text-4xl font-medium tracking-[0.2em] leading-snug">
              Startbucks thanksgiving blend
            </h2>
            <p className="text-lg leading-[1.9]">
              this elegant dark roast returns, showcasing flavors from some of
              the world's major coffee-growing regions.
            </p>
            <button className="border border-white rounded-full py-2 px-4">
              Order Now
            </button>
          </div>
        </section>

        {/* Section E */}
        <section className="bg-color-secondary max-w-[1240px] mx-auto  text-white flex flex-col lg:flex-row-reverse my-8">
          <div className="flex-1">
            <img className="h-auto" src="/img/box-e.jpg" alt="" />
          </div>
          <div className="flex flex-1 flex-col items-center space-y-10 text-center px-10 py-10 justify-center ">
            <h2 className="uppercase text-4xl font-medium tracking-[0.2em] leading-snug">
              new to the nice list
            </h2>
            <p className="text-lg leading-[1.9]">
              For a nondairy twist on a holiday cookie classic, try the new Iced
              Sugar Cookie Almondmilk Latte.
            </p>
            <button className="border border-white rounded-full py-2 px-4">
              Order Now
            </button>
          </div>
        </section>

        {/* Section F */}
        <section className="max-w-[1240px] mx-auto text-white my-8  grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <img className="" src="/img/box-f1.jpg" alt="" />
            <div className="text-main-color bg-green-100 py-12 px-10 text-center space-y-7">
              <h3 className="text-2xl font-bold">
                Let the holiday cheer come to you
              </h3>

              <p>
                Make the moment merry. Order Starbucks holiday favorites on Uber
                Eats.*
              </p>
              <button className="text-black border border-1 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-150">
                Order Now
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <img src="/img/box-f2.jpg" alt="" />

            <div className="text-white bg-main-color py-12 px-10 text-center space-y-7">
              <h3 className="text-2xl font-bold">Loved Passing on Netflix?</h3>

              <p>
                Our new social series about film adaptations kicks off with the
                actors and directors who brought the book to life.
              </p>
              <button className="text-white border border-1 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-150">
                Order Now
              </button>
            </div>
          </div>
        </section>
        {/* Desc */}

        <div className="mb-10 mt-16 flex justify-center px-5">
          <p className="max-w-3xl text-center leading-8 text-sm">
            *NO PURCHASE NECESSARY. Participating stores only. Starbucks
            employees are not eligible to win prizes. Ends 1/3/22. To play and
            for Official Rules, visit{" "}
            <a className="border-b border-black">starbucksforlife.com.</a>
            Entrants can receive a maximum of 2 plays per day, plus bonus
            opportunities to earn additional plays.
          </p>
        </div>
      </div>
    </div>
  );
}
