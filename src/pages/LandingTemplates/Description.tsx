import plant1 from "../../images/plant1.jpeg"
import plant2 from "../../images/plant2.jpeg"

const Description = () => {
  return (
    <>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Medicinal Plants
              </h3>
              <p className="text-gray-600  text-justify mb-8">
                Medicinal plants have been used for centuries by various
                cultures around the world to treat ailments and promote
                well-being. This page explores the history, significance, and
                modern applications of medicinal plants in traditional and
                contemporary medicine. Learn about the rich diversity of
                plant-based remedies and their role in promoting holistic
                health.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 px-6">
              <img className=" w-1/2" src={plant1}></img>
            </div>
          </div>
          <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 px-6">
              <img className=" w-1/2" src={plant2}></img>
            </div>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Machine Learning in Medicinal Plants Research
              </h3>
              <p className="text-gray-600  text-justify mb-8">
              Machine learning techniques are revolutionizing medicinal plant research and drug discovery processes. This page delves into how artificial intelligence and data-driven approaches are employed to analyze vast datasets of plant compounds, predict bioactivities, and accelerate the discovery of novel therapeutic agents from natural sources. Discover the intersection of technology and traditional medicine in the quest for new treatments.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Conservation and Sustainability
              </h3>
              <p className="text-gray-600  text-justify mb-8">
              The conservation and sustainable management of medicinal plants are critical to preserving biodiversity and traditional knowledge for future generations. This page explores the challenges and initiatives involved in protecting medicinal plant species from extinction, promoting ethical harvesting practices, and supporting local communities dependent on herbal medicine traditions. Discover the importance of conservation efforts in maintaining ecosystem health and cultural heritage.
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 px-6">
              <img className=" w-1/2" src={plant2}></img>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Description;
