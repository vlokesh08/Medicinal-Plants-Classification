import React, { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import plants from "../pages/JsonFiles/Plants.json";

const TeachableMachine = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/nDSqcyEQN/";
  let model: any, labelContainer: any, maxPredictions: any;
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [check, setCheck] = useState(false);
  const [val, setVal] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = async () => {
    // ... your model initialization logic ...
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const predict = async () => {
    setIsLoading(true); // Set loading state to true before prediction

    try {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
      }

      if (!model) {
        console.log("Model is not initialized yet");
        return;
      }

      let answer = "";
      let maximum = 0;

      const prediction = await model.predict(imageRef.current);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ": " + prediction[i].probability.toFixed(2);

        if (prediction[i].probability > maximum) {
          maximum = prediction[i].probability;
          answer = prediction[i].className;
        }
      }

      setVal(answer);
      labelContainer.childNodes[0].innerHTML = answer;

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <section className="px-40">
        <div className="mb-24 text-center">
          <h3 className="block antialiased font-sans font-semibold relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-black">
            We’ve got answers
          </h3>
          <h1 className="block antialiased font-sans relative my-5 text-center text-4xl font-bold leading-tight tracking-normal text-black md:text-5xl">
            Predict the Plant
          </h1>
          <p className="block antialiased font-sans relative my-5 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-gray-600 md:text-xl lg:max-w-4xl">
            Check out what other people are usually interested in!
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-4 lg:col-span-6">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <div>
              {imageSrc && <img className="w-[320px] h-[320px]" src={imageSrc} alt="Uploaded" ref={imageRef} />}
            </div>
            <div id="label-container"></div>
            {isLoading ? (
              <button type="button" disabled className="loading-button">
                Loading...
              </button>
            ) : (
              <button type="button" onClick={predict}>Predict</button>
              )}
              <div>
                {check && (
                  plants
                    .filter((plant) =>
                      plant.plant_name.toLowerCase().includes(val.toLowerCase())
                    )
                    .map((plant) => (
                      <div key={plant.id}>
                        <h1>{plant.plant_name}</h1>
                        <p>{plant.description}</p>
                      </div>
                    ))
                )}
                {check && plants.length === 0 && (
                  <div>
                    <h1>Not Found</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default TeachableMachine;
  