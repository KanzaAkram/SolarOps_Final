// import React, { useState } from "react";
// import styled from "styled-components";
// import "./Fault.css";
// import image1 from "../assets/fault/image-1.jpeg";
// import image2 from "../assets/fault/image-2.png";
// import image3 from "../assets/fault/image-3.png";
// import image4 from "../assets/fault/image-4.png";
// import { fetchFaultPrediction } from "../helper/helper";

// // Styled components for fancy upload UI and prediction card
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const UploadButton = styled.label`
//   display: inline-block;
//   padding: 0.8rem 1.5rem;
//   color: black;
//   background-color: #ffd966;
//   font-weight: bold;
//   border-radius: 8px;
//   cursor: pointer;
//   margin-top: 1.5rem;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #ff4500;
//   }
// `;

// const SubmitButton = styled.button`
//   padding: 0.8rem 1.5rem;
//   color: white;
//   background-color: #28a745;
//   font-weight: bold;
//   border-radius: 8px;
//   cursor: pointer;
//   margin-top: 1rem;
//   transition: background-color 0.3s ease;
//   border: none;

//   &:hover {
//     background-color: #218838;
//   }
// `;

// const Input = styled.input`
//   display: none;
// `;

// const Card = styled.div`
//   margin-top: 2rem;
//   padding: 3rem;
//   width: 90%;
//   max-width: 600px;
//   min-height: 400px;
//   background-color: #ffd966;
//   border-radius: 10px;
//   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
//   text-align: center;
// `;

// const ImagePreview = styled.img`
//   width: 100%;
//   border-radius: 10px;
//   margin-bottom: 4rem;
// `;

// const Title = styled.h2`
//   color: #333;
// `;

// const Confidence = styled.p`
//   font-size: 1rem;
//   font-weight: bold;
//   color: #28a745;
// `;

// const Recommendations = styled.div`
//   text-align: left;
//   margin-top: 1rem;
// `;

// const List = styled.ul`
//   margin: 0.5rem 0;
//   padding-left: 1.2rem;
//   list-style-type: square;
// `;

// const ListItem = styled.li`
//   font-size: 0.95rem;
//   color: #555;
// `;

// const InfoText = styled.div`
//   color: #ff7f50;
//   font-weight: bold;
//   margin-top: 1rem;
//   text-align: center;
// `;

// const PredictionCard = ({
//   image,
//   faultType,
//   confidence,
//   recommendations,
//   tips,
// }) => (
//   <Card>
//     <ImagePreview src={image} alt="Uploaded" />
//     <Title>Fault Type: {faultType}</Title>
//     <Confidence>Confidence: {(confidence * 100).toFixed(2)}%</Confidence>
//     <Recommendations>
//       <h4>Recommendations:</h4>
//       <List>
//         {recommendations.map((item, index) => (
//           <ListItem key={index}>{item}</ListItem>
//         ))}
//       </List>
//       <h4>Tips:</h4>
//       <List>
//         {tips.map((tip, index) => (
//           <ListItem key={index}>{tip}</ListItem>
//         ))}
//       </List>
//     </Recommendations>
//   </Card>
// );

// const Fault = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [predictionData, setPredictionData] = useState(null);
//   const [imageFile, setImageFile] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setSelectedImage(URL.createObjectURL(file));
//     setImageFile(file);
//   };

//   const handleSubmit = async () => {
//     if (!imageFile) {
//       console.error("No image selected");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", imageFile);

//     try {
//       const response = await fetchPrediction(formData);
//       setPredictionData({
//         faultType: response.predicted_class,
//         confidence: response.confidence,
//         recommendations: response.recommendations || [],
//         tips: response.tips || [],
//       });
//     } catch (error) {
//       console.error("Prediction failed:", error);
//     }
//   };

//   return (
//     <Container>
//       <div className="square-window">
//         <div className="inner-squares">
//           <div className="square">
//             <img src={image1} alt="Image 1" />
//             <InfoText>Please upload an image of the solar panel</InfoText>
//             <div className="arrow">&#8594;</div>
//           </div>
//           <div className="square">
//             <div className="arrow">&#8595;</div>
//             <img src={image2} alt="Image 2" />
//             <InfoText>Image uploaded</InfoText>
//           </div>
//           <div className="square">
//             <img src={image4} alt="Image 4" />
//             <InfoText>Get recommendations and tips</InfoText>
//             <div className="arrow">&#8593;</div>
//           </div>
//           <div className="square">
//             <img src={image3} alt="Image 3" />
//             <InfoText>
//               Prediction type and accuracy of faulty solar panel
//             </InfoText>
//             <div className="arrow">&#8592;</div>
//           </div>
//         </div>
//       </div>

//       <UploadButton htmlFor="file-upload">
//         Upload Your Faulty Solar Panel Image
//       </UploadButton>
//       <Input
//         type="file"
//         id="file-upload"
//         accept="image/*"
//         onChange={handleImageChange}
//       />

//       {selectedImage && (
//         <SubmitButton onClick={handleSubmit}>
//           Submit for Prediction
//         </SubmitButton>
//       )}

//       {selectedImage && predictionData && (
//         <PredictionCard
//           image={selectedImage}
//           faultType={predictionData.faultType}
//           confidence={predictionData.confidence}
//           recommendations={predictionData.recommendations}
//           tips={predictionData.tips}
//         />
//       )}
//     </Container>
//   );
// };

// export default Fault;





// // Fault.jsx
// import React, { useState } from "react";
// import styled from "styled-components";
// import { fetchPrediction } from "../helper/helper";

// // Styled components for layout and styling
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const UploadButton = styled.label`
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px 20px;
//   margin-top: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Input = styled.input`
//   display: none;
// `;

// const ImagePreview = styled.img`
//   width: 200px;
//   height: auto;
//   margin-top: 10px;
//   border-radius: 5px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
// `;

// const SubmitButton = styled.button`
//   background-color: #008CBA;
//   color: white;
//   padding: 10px 20px;
//   margin-top: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const InfoText = styled.p`
//   color: red;
//   margin-top: 10px;
// `;

// const PredictionCard = ({ image, faultType, confidence, recommendations, tips }) => (
//   <Card>
//     <ImagePreview src={image} alt="Predicted" />
//     <h3>Fault Type: {faultType}</h3>
//     <p>Confidence: {confidence}</p>
//     <h4>Recommendations:</h4>
//     <ul>
//       {recommendations.map((rec, index) => (
//         <li key={index}>{rec}</li>
//       ))}
//     </ul>
//     <h4>Tips:</h4>
//     <ul>
//       {tips.map((tip, index) => (
//         <li key={index}>{tip}</li>
//       ))}
//     </ul>
//   </Card>
// );

// const Card = styled.div`
//   margin-top: 20px;
//   padding: 15px;
//   color:black;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   width: 100%;
//   max-width: 400px;
//   background-color: #f9f9f9;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Fault = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [predictionData, setPredictionData] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [error, setError] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setSelectedImage(URL.createObjectURL(file));
//     setImageFile(file);
//     setError(null); // Reset error on image change
//   };

//   const handleSubmit = async () => {
//     if (!imageFile) {
//       setError("Please select an image to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", imageFile);

//     try {
//       const response = await fetchPrediction(formData);
//       setPredictionData({
//         faultType: response.predicted_class,
//         confidence: response.confidence,
//         recommendations: response.recommendations || [],
//         tips: response.tips || [],
//       });
//     } catch (error) {
//       console.error("Prediction failed:", error);
//       setError("Prediction failed: " + (error.message || "Unknown error"));
//     }
//   };

//   return (
//     <Container>
//       <UploadButton htmlFor="fileInput">Upload Image</UploadButton>
//       <Input
//         type="file"
//         id="fileInput"
//         accept="image/jpeg, image/png"
//         onChange={handleImageChange}
//       />
//       {selectedImage && <ImagePreview src={selectedImage} alt="Selected" />}
//       <SubmitButton onClick={handleSubmit}>Submit for Prediction</SubmitButton>
//       {error && <InfoText>{error}</InfoText>}
//       {predictionData && (
//         <PredictionCard
//           image={selectedImage}
//           faultType={predictionData.faultType}
//           confidence={predictionData.confidence}
//           recommendations={predictionData.recommendations}
//           tips={predictionData.tips}
//         />
//       )}
//     </Container>
//   );
// };

// export default Fault;

import React, { useState } from "react";
import styled from "styled-components";
import "./Fault.css";
import image1 from "../assets/fault/image-1 (1).jpeg";
import image3 from "../assets/fault/image-3.jpg";
import image4 from "../assets/fault/image-4 (1).png";
import { fetchFaultPrediction } from "../helper/helper"; // Ensure this path is correct

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

const UploadButton = styled.label.attrs({ className: 'specific-upload' })`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  color: black;
  background-color: #ffd966;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff4500;
    color: white;
    transform: scale(1.05);
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  color: white;
  background-color: green;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
  border: none;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #ff4500;
    transform: scale(1.05);
  }
`;

const Input = styled.input`
  display: none;
`;

const Card = styled.div`
  margin-top: 2rem;
  padding: 3rem;
  width: 90%;
  max-width: 600px;
  min-height: 400px;
  background-color: #ffd966;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: black;
  font-weight: bold;
  font-size: 1.6rem;
`;

const Confidence = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: green;
  margin-top: 1rem;
`;

const Recommendations = styled.div`
  text-align: left;
  margin-top: 1rem;
  color: #ff4500;
  font-weight: bold;
  font-size: 1.2rem;
`;

const List = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.2rem;
  list-style-type: square;
  color: black;
`;

const ListItem = styled.li`
  font-size: 0.95rem;
  color: black;
`;
const Heading = styled.h1`
  color: orange;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  animation: fadeInDown 0.5s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const StepImage = styled.div`
  position: relative;
  text-align: center;
  margin: 0 1rem;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid orange;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    color: orange;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const Arrow = styled.div`
  color: orange;
  font-size: 2rem;
  margin: 0 1rem;
  transform: rotate(90deg);
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0) rotate(90deg);
    }
    50% {
      transform: translateY(-10px) rotate(90deg);
    }
  }
`;

const InfoText = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
`;

const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };
const PredictionCard = ({
  image,
  faultType,
  confidence,
  recommendations,
  tips,
}) => (
  <Card>
    <ImagePreview src={image} alt="Uploaded" />
    <Title>Fault Type: {faultType}</Title>
    <Confidence>Confidence: {(confidence * 100).toFixed(2)}%</Confidence>
    <Recommendations>
      <h4>Recommendations:</h4>
      <List>
        {recommendations.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <h4>Tips:</h4>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index}>{tip}</ListItem>
        ))}
      </List>
    </Recommendations>
  </Card>
);

const Fault = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionData, setPredictionData] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
    setImageFile(file);
    setError(null);

    speakText("Image has been uploaded.");
  };

  const handleSubmit = async () => {
    if (!imageFile) {
      setError("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetchFaultPrediction(formData);
      if (response) {
        setPredictionData({
          faultType: response.predicted_class,
          confidence: response.confidence,
          recommendations: response.recommendations || [],
          tips: response.tips || [],
        });
        speakText(`The fault type is ${response.predicted_class} with a confidence of ${(response.confidence * 100).toFixed(2)}%.`);
      } else {
        throw new Error("Invalid response from server.");
      }
    } catch (error) {
      console.error(error);
      setError("Prediction failed: " + (error.message || "Unknown error"));
    }
  };

  return (
    <Container>
      <Heading>Solar Panel Fault Prediction</Heading>
      <StepContainer>
        <StepImage>
          <img src={image1} alt="Step 1" />
          <p>Step 1: Upload Image</p>
        </StepImage>
        <Arrow>→</Arrow>
        <StepImage>
          <img src={image3} alt="Step 2" />
          <p>Step 2: Get Predictions</p>
        </StepImage>
      </StepContainer>
      <UploadButton htmlFor="file-upload">
        Upload Your Faulty Solar Panel Image
      </UploadButton>
      <Input
        type="file"
        id="file-upload"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <SubmitButton onClick={handleSubmit}>
          Submit for Prediction
        </SubmitButton>
      )}
      {error && <InfoText>{error}</InfoText>}
      {selectedImage && predictionData && (
        <PredictionCard
          image={selectedImage}
          faultType={predictionData.faultType}
          confidence={predictionData.confidence}
          recommendations={predictionData.recommendations}
          tips={predictionData.tips}
        />
      )}
    </Container>
  );
};

export default Fault;
