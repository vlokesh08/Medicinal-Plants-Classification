import  { useEffect, useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import { log } from 'console';

const TeachableMachine = () => {
    const URL = "https://teachablemachine.withgoogle.com/models/nDSqcyEQN/";
    let model :any , labelContainer :any , maxPredictions :any ;
    const imageRef = useRef(null);
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const init = async () => {
        
        
    };

    const handleImageUpload = (e:any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const predict = async () => {

        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }
        console.log("Model is initialized");

        if (!model) {
            console.log('Model is not initialized yet');
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
            // console.log(prediction[i].className);
        }
        labelContainer.childNodes[0].innerHTML = answer;
    };

    return (
        <div>
            <div>Teachable Machine Image Model</div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="small_size">Small file input</label>
<input className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />

            <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
  <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" ></input>
            {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}
            <div>
                {imageSrc && <img src={imageSrc} alt="Uploaded" ref={imageRef} />}
            </div>
            <div id="label-container"></div>
            <button type="button" onClick={predict}>Predict</button>
        </div>
    );
};

export default TeachableMachine;
