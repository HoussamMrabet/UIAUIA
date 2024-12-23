import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <title>UIA UIA Meme Token - The Spinning Cat Says It All!</title>
        <meta
          name="description"
          content="Introducing the UIA UIA Meme Token, inspired by the iconic Spinning Cat Meme! Get ready for laughs, fun, and a token that brings joy to the digital world."
        />
        <meta
          name="keywords"
          content="UIA UIA Meme Token, Spinning Cat Meme, funny cryptocurrency, meme tokens, crypto fun"
        />
        <meta name="author" content="UIA UIA Meme Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-32 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/hh.png"
            alt="Spinning Cat Meme saying UIA UIA"
            width={400}
            height={400}
            priority
            className="object-contain animate-spin-slow"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left text-white">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-100">
            The Spinning Cat Says... <span className="text-yellow-400">UIA UIA</span>!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Welcome to the <span className="font-bold text-yellow-400">UIA UIA Meme Token</span>, the funniest way to invest in memes and memes in investing! 🐱💰
            The cat is spinning, and so are the profits. 
            Hold tight, it's going to be a wild, meme-filled ride! 🌀
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#join-the-fun"
              className="px-6 py-3 bg-yellow-400 text-black rounded-md text-lg hover:bg-yellow-500 transition"
              aria-label="Join the UIA UIA fun"
            >
              Join the Fun! 🎉
            </a>
            <a
              href="#buy-token"
              className="px-6 py-3 border border-white text-white rounded-md text-lg hover:bg-white hover:text-black transition"
              aria-label="Buy the UIA UIA Meme Token"
            >
              Buy Token 💸
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
