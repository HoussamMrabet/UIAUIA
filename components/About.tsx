import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 
          className="text-4xl md:text-5xl font-extrabold text-center mb-8"
        >
          Welcome to the UIA UIA coin Revolution!
        </h1>

        <h2 
          className="text-xl md:text-2xl text-center font-semibold mb-12"
        >
          Where memes meet crypto. Join the madness. 🚀💰
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white text-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <Image 
              src="/hh.png" alt="Fun" className="animate-flip-accelerate mx-auto mb-4" width={400} height={400}
            />
            <h3 className="text-2xl font-bold mb-2">Fun & Laughter</h3>
            <p className='text-black'>Get your daily dose of laughs while HODLing. Memes are the future! 😂</p>
          </div>

          <div 
            className="bg-white text-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <Image 
              src="/hh.png" alt="Fun" className="animate-flip-accelerate mx-auto mb-4" width={400} height={400}
            />
            <h3 className="text-2xl font-bold mb-2">Community Powered</h3>
            <p className='text-black'>Join a community where memes rule and profits soar. 🚀</p>
          </div>

          <div 
            className="bg-white text-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <Image 
              src="/hh.png" alt="Fun" className="animate-flip-accelerate mx-auto mb-4" width={400} height={400}
            />
            <h3 className="text-2xl font-bold mb-2">Meme-Powered Growth</h3>
            <p className='text-black'>As memes go viral, so does the value of our coin. 📈</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://pump.fun/coin/2qFsq2tSkEJT5tDp1HGgqRXZRtVXav4NNVYqjQJEpump"
            target="_blank"
            rel="noopener noreferrer" 
            className="px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition duration-500"
          >
            Get UIA UIA Now! 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
