import { useState, useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import plants from "../pages/JsonFiles/Plants.json";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TeachableMachine = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/5vNutzwIt/";
  let model: any, labelContainer: any, maxPredictions: any;
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const [check, setCheck] = useState(false);
  const [val, setVal] = useState<any>("");
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState("");

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
        if (prediction[i].probability > maximum) {
          maximum = prediction[i].probability;
          answer = prediction[i].className;
        }
      }

      const response = await axios.post("http://localhost:3000/model", {
        name: answer,
      });

      setDetails(response.data.message.content);

      setVal(answer);
      // labelContainer.childNodes[0].innerHTML = answer;
      setCheck(true);
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Picture</Label>
              <Input
                id="picture"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <div className="m-5 p-4">
              {imageSrc && (
                // <img
                //   className="w-[320px] h-[320px]"
                //   src={imageSrc}
                //   alt="Uploaded"
                //   ref={imageRef}
                // />
                <AspectRatio ratio={16 / 9} className="bg-muted">
                    <img
                      src={imageSrc}
                      alt="Photo by Drew Beamer"
                      className="rounded-md object-cover"
                      ref={imageRef}
                    />
                  </AspectRatio>
              )}
            </div>
            <div id="label-container"></div>
            <div className="m-5 p-4">

              {isLoading ? (
                <button type="button" disabled className="loading-button">
                  Loading...
                </button>
              ) : (
                <Button type="button" onClick={predict}>
                  Predict
                </Button>
              )}
            </div>
          </div>
        </div>
      <div className="m-3">
        {check &&
          plants
            .filter((plant) =>
              plant.plant_name.toLowerCase().includes(val.toLowerCase())
            )
            .map((plant) => (
              <div key={plant.id} className="">
                <h1 className=" font-bold">The Plant in the Picture is {plant.plant_name.toUpperCase()}</h1>
                {/* <p className="text-justify">{plant.description}</p> */}
              </div>
            ))}
        {check && plants.length === 0 && (
          <div>
            <h1>Not Found</h1>
          </div>
        )}
      <div className=" w-hscreen">
        <p className="text-justify">{details}</p>
      </div>
      </div>

      </section>
    </div>
  );
};

export default TeachableMachine;
