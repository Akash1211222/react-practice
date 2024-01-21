import React, { useState, useCallback, useEffect, useRef } from "react";

const Pass = () => {
  const [length, setLength] = useState(7);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+=-[]{}|;:'/.`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const passCopy = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, []);

  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow]);

  return (
    <>
      <h1 className=" text-4xl bg-red-400 text-center">PASS GENERATOR</h1>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-slate-500 py-6 ">
        <h2 className=" text-white text-center py-2">
          Pass Gen ( {password} )
        </h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className=" outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly={true}
            type="text"
          />
          <button
            className="outline-none bg-blue-200  px-3 py-0.5 shrink-0"
            onClick={passCopy}
          >
            COPY
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pass;
