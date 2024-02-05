import { useState } from "react";
import './App.css'
import logo from './assets/unilag-logo.png'

function App() {
  const [hw, setHw] = useState({
    v1: "",
    v2: "",
    v3: "",
    f1: 1,
    f2: 2,
    f3: 1,
  });
  const [lw, setLw] = useState({
    v1: "",
    v2: "",
    v3: "",
    v4: "",
    f1: 1,
    f2: 3,
    f3: 3,
    f4: 1,
  });
  const [SD, setSD] = useState({ mhw: "", mlw: "", M: "", R: ""})

  const [shw, setShw] = useState({ v1: "", v2: "", v3: "", f1: 1, f2: 2, f3: 1 });
  const [slw, setSlw] = useState({
    v1: "",
    v2: "",
    v3: "",
    v4: "",
    f1: 1,
    f2: 3,
    f3: 3,
    f4: 1,
  });
  const [SEC, setSEC] = useState({ mhw: "", mlw: "", m: "", r: "" });

  const [D, setD] = useState("")

  const clear = () => {
    setHw({ v1: "", v2: "", v3: "", f1: 1, f2: 2, f3: 1 });
    setLw({ v1: "", v2: "", v3: "", v4: "", f1: 1, f2: 3, f3: 3, f4: 1 });
    setShw({ v1: "", v2: "", v3: "", f1: 1, f2: 2, f3: 1 });
    setSlw({ v1: "", v2: "", v3: "", v4: "", f1: 1, f2: 3, f3: 3, f4: 1 });
    setSD({ mhw: "", mlw: "", M: "", R: "" });
    setSEC({ mhw: "", mlw: "", m: "", r: "" });
    setD("")
  }

  const handleSD = () => {
    let mhw = ((hw.v1 * hw.f1) + (hw.v2 * hw.f2) + (hw.v3 * hw.f3))/4
    let mlw = ((lw.v1 * lw.f1) + (lw.v2 * lw.f2) + (lw.v3 * lw.f3) + (lw.v4 * lw.f4))/8
    let M = (mhw + mlw) / 2
    let R = mhw - mlw
    mhw = Number(mhw.toFixed(3));
    mlw = Number(mlw.toFixed(3));
    M = Number(M.toFixed(3));
    R = Number(R.toFixed(3));
    setSD({ ...SD, mhw: mhw, mlw: mlw, M: M, R: R })
    return { mhw: mhw, mlw: mlw, M: M, R: R };
  }

  const handleSEC = () => {
    let mhw = (shw.v1 * shw.f1 + shw.v2 * shw.f2 + shw.v3 * shw.f3)/4;
    let mlw = (slw.v1 * slw.f1 + slw.v2 * slw.f2 + slw.v3 * slw.f3 + slw.v4 * slw.f4)/8;
    let M = (mhw + mlw) / 2;
    let R = mhw - mlw;
    mhw = Number(mhw.toFixed(3));
    mlw = Number(mlw.toFixed(3));
    M = Number(M.toFixed(3));
    R = Number(R.toFixed(3));
    setSEC({ ...SD, mhw: mhw, mlw: mlw, m: M, r: R });
    return { mhw: mhw, mlw: mlw, m: M, r: R };
  };

  const handleAll = () => {
    const { sd_mhw, sd_mlw, M, R } = handleSD();
    const { mhw, mlw, m, r } = handleSEC()
    let D = m - ((M * r) / R)
    D = Number(D.toFixed(3));
    setD(D)
  }

  return (
    <>
      <div className="responsive bg-white mx-auto shadow-md my-4 overflow-x-hidden">
        {/* HEADER */}
        <div className="border-b">
          <div className="flex justify-center items-center">
            <img src={logo} alt="unilag_logo" className="w-[50px]" />
            <h2 className="uppercase text-2xl text-center py-2">
              Datum-Calculator
            </h2>
          </div>

          <h3 className="uppercase text-xl text-center">Group 9</h3>
        </div>
        {/* HEADER */}

        {/* MAIN */}
        <div className="px-6 py-4">
          {/* STANDARD PORT */}
          <div>
            <div className="flex justify-between items-center">
              <h4 className="uppercase text-xl my-4">Standard Port</h4>
              <button
                onClick={handleSD}
                className="bg-[#345] text-white w-[6em] h-[2.5em] p-2 rounded-md capitalize"
              >
                compute
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {/* H.w */}
              <div className="flex items-center gap-x-2">
                <label htmlFor="HW" className="">
                  H.W
                </label>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 1"
                    value={hw?.v1}
                    onChange={(e) => setHw({ ...hw, v1: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 1"
                    value={hw.f1}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 2"
                    value={hw?.v2}
                    onChange={(e) => setHw({ ...hw, v2: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 2"
                    value={hw.f2}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 3"
                    value={hw?.v3}
                    onChange={(e) => setHw({ ...hw, v3: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 3"
                    value={hw.f3}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
              </div>
              {/* H.W */}
              {/* L.W */}
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                <label htmlFor="LW" className="">
                  L.W
                </label>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 1"
                    value={lw?.v1}
                    onChange={(e) => setLw({ ...lw, v1: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 1"
                    value={lw.f1}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 2"
                    value={lw?.v2}
                    onChange={(e) => setLw({ ...lw, v2: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 2"
                    value={lw.f2}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 3"
                    value={lw?.v3}
                    onChange={(e) => setLw({ ...lw, v3: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 3"
                    value={lw.f3}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 4"
                    value={lw?.v4}
                    onChange={(e) => setLw({ ...lw, v4: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 3"
                    value={lw.f4}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
              </div>
              {/* L.W */}
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="range">MHW</label>
                  <input
                    type="number"
                    id="mhw"
                    value={SD?.mhw}
                    disabled
                    className="w-[70px] p-1"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="mlw">MLW</label>
                  <input
                    type="number"
                    id="mlw"
                    value={SD?.mlw}
                    disabled
                    className="w-[70px] p-1"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="range">R</label>
                  <input
                    type="number"
                    placeholder="Range"
                    id="range"
                    value={SD?.R}
                    disabled
                    className="w-[70px] p-1 border"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="mean">M</label>
                  <input
                    type="number"
                    placeholder="Mean"
                    id="mean"
                    value={SD?.M}
                    disabled
                    className="w-[70px] p-1 border"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* STANDARD PORT */}

          {/* SECONDARY PORT */}
          <div>
            <div className="flex justify-between items-center">
              <h4 className="uppercase text-xl my-4">Secondary Port</h4>
              <button
                onClick={handleSEC}
                className="bg-[#345] text-white w-[6em] h-[2.5em] p-2 rounded-md capitalize"
              >
                compute
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {/* H.w */}
              <div className="flex items-center gap-x-2">
                <label htmlFor="HW" className="">
                  H.W
                </label>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 1"
                    value={shw?.v1}
                    onChange={(e) => setShw({ ...shw, v1: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 1"
                    value={shw.f1}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 2"
                    value={shw?.v2}
                    onChange={(e) => setShw({ ...shw, v2: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 2"
                    value={shw.f2}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 3"
                    value={shw?.v3}
                    onChange={(e) => setShw({ ...shw, v3: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 3"
                    value={shw.f3}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
              </div>
              {/* H.W */}
              {/* L.W */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <label htmlFor="LW" className="">
                  L.W
                </label>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 1"
                    value={slw?.v1}
                    onChange={(e) => setSlw({ ...slw, v1: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 1"
                    value={slw.f1}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 2"
                    value={slw?.v2}
                    onChange={(e) => setSlw({ ...slw, v2: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 2"
                    value={slw.f2}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 3"
                    value={slw?.v3}
                    onChange={(e) => setSlw({ ...slw, v3: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 3"
                    value={slw.f3}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="value 4"
                    value={slw?.v4}
                    onChange={(e) => setSlw({ ...slw, v4: e.target.value })}
                    required
                    className="outline-none border p-1 w-[75px]"
                  />
                  <input
                    type="number"
                    placeholder="factor 3"
                    value={slw.f4}
                    disabled
                    className="outline-none border p-1 w-8"
                  />
                </div>
              </div>
              {/* L.W */}
              <div className="flex flex-wrap gap-2">
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="range">MHW</label>
                  <input
                    type="number"
                    id="mhw"
                    value={SEC?.mhw}
                    disabled
                    className="w-[70px] p-1"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="mlw">MLW</label>
                  <input
                    type="number"
                    id="mlw"
                    value={SEC?.mlw}
                    disabled
                    className="w-[70px] p-1"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="r">r</label>
                  <input
                    type="number"
                    placeholder="Range"
                    id="r"
                    value={SEC?.r}
                    disabled
                    className="w-[70px] p-1 border"
                  />
                </div>
                <div className="flex gap-x-1 items-center">
                  <label htmlFor="m">m&apos;</label>
                  <input
                    type="number"
                    placeholder="Mean"
                    id="m"
                    value={SEC?.m}
                    disabled
                    className="w-[70px] p-1 border"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SECONDARY PORT */}
        </div>
        {/* MAIN */}

        {/* FOOTER */}
        <div className="px-6 py-4 bg-[#345] flex justify-between items-center">
          <div className="flex gap-x-2">
            <button
              onClick={clear}
              className="bg-red-500 text-white w-[4em] h-[2.5em] p-2 rounded-md capitalize"
            >
              clear
            </button>
            <button
              onClick={handleAll}
              className="bg-white text-[#345] w-[6em] h-[2.5em] p-2 rounded-md capitalize"
            >
              compute
            </button>
          </div>
          <div className="flex items-center gap-x-2 text-white">
            <label htmlFor="d">DTUM</label>
            <input
              type="number"
              id="d"
              value={D}
              disabled
              className="w-[70px] p-1 bg-white text-black"
            />
          </div>
        </div>
        {/* FOOTER */}
      </div>
    </>
  );
}

export default App
