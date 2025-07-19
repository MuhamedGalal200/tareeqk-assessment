const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
          Welcome to <span className="text-black">TAREEQK PORTAL</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          TAREEQK PORTAL is created to make your life easier away from all the complications.
          Driving either long or short distances, in bad or good weather, our goal is to get you
          to reach our recovery or towing service, provide you the service with the fastest time
          available with a guaranteed price so that you do not scratch your head off from thinking
          when you get in trouble on the road.
        </p>

        <div className="mt-10">
          <a
            href="/CreateRequest"
            className="inline-block bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition duration-300"
          >
            Make a Request
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
