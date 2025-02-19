// components/TattooForm.jsx
import React, { useState } from "react";
import StyleSelector from "./StyleSelector";
import ThemeSelector from "./ThemeSelector";
import SizeSelector from "./SizeSelector";

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const TattooForm = () => {
    const [style, setStyle] = useState("Minimalism");
    const [theme, setTheme] = useState("Animals");
    const [size, setSize] = useState("Medium");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
  
    const generateTattoo = async () => {
      setLoading(true);
      setImage(null);
      
      const prompt = `A tattoo design in ${style} style, theme: ${theme}, size: ${size}, black ink only.`;
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "dall-e-2",
          prompt: prompt,
          n: 1,
          size: "256x256",
          // size: "1024x1024",
        }),
      });
      
      const data = await response.json();
      setImage(data.data[0].url);
      setLoading(false);
    };
  
    return (
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Tattoo Generator</h1>
        <div className="flex gap-4 mb-4">
          <StyleSelector value={style} onChange={(e) => setStyle(e.target.value)} />
          <ThemeSelector value={theme} onChange={(e) => setTheme(e.target.value)} />
          <SizeSelector value={size} onChange={(e) => setSize(e.target.value)} />
        </div>
        <button 
          onClick={generateTattoo} 
          className="bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Tattoo"}
        </button>
        {image && (
          <>
            <img 
              src={image} 
              alt="Tattoo" 
              className="mt-4 w-64 h-64 border rounded cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
            {lightboxOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 p-4" onClick={() => setLightboxOpen(false)}>
                <img src={image} alt="Tattoo Full Size" className="max-w-full max-h-full rounded-lg" />
                <a 
                  href={image} 
                  target="_blank"
                  download="tattoo.png" 
                  className="absolute bottom-5 right-5 bg-white text-black px-4 py-2 rounded shadow-lg">
                  Download
                </a>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  export default TattooForm;