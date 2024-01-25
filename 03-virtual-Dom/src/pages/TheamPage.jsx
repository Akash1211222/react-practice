import React, { useEffect } from "react";
import { TheamProvider } from "../Context/theamContext";
import TheamButton from "../components/TheamBtn/TheamButton";
import TheamCard from "../components/TheamCard/TheamCard";

const TheamPage = () => {
  const [theamMode, setTheamMode] = useState("light");
  const lightTheam = () => {
    setTheamMode("light");
  };
  const darkTheam = () => {
    setTheamMode("dark");
  };
  // actule change

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theamMode);
  }, [theamMode]);

  return (
    <TheamProvider value={{ theamMode, lightTheam, darkTheam }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <TheamButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <TheamCard />
          </div>
        </div>
      </div>
    </TheamProvider>
  );
};

export default TheamPage;
