import { Fredericka_the_Great } from "next/font/google";
const font = Fredericka_the_Great({ subsets: ["latin"], weight: ["400"], display: "swap" });

import Drzewo from "./Drzewo";
import Krzak from "./Krzak";

const DATA = [
  { uid: "1", parentUid: null, name: "Node 1" },
  { uid: "2", parentUid: "1", name: "Node 1.1" },
  { uid: "3", parentUid: "2", name: "Node 1.1.1" },
  { uid: "4", parentUid: "1", name: "Node 1.2" },
  { uid: "5", parentUid: "4", name: "Node 1.2.1" },
  { uid: "6", parentUid: null, name: "Node 2" },
  { uid: "7", parentUid: "6", name: "Node 2.1" },
];

const DATAX = [
  {
    uid: "1",
    name: "Node 1",
    children: [
      {
        uid: "2",
        name: "Node 1.1",
        children: [{ uid: "3", name: "Node 1.1.1" }],
      },
      {
        uid: "4",
        name: "Node 1.2",
        children: [{ uid: "5", name: "Node 1.2.1" }],
      },
    ],
  },
  {
    uid: "6",
    name: "Node 2",
    children: [{ uid: "7", name: "Node 2.1" }],
  },
];

const App = () => {
  return (
    <div class="flex flex-col h-screen items-center bg-gradient-to-br from-sky-900  to-amber-600 text-slate-800 ">
      <div className={font.className}>
        <h1 class="text-6xl text-orange-200 pt-[100px] pb-[30px]">Temida : tree & moveUp</h1>
      </div>
      <div class="flex">
        <div>
          <div className={font.className}>
            <h1 class="text-3xl text-orange-200 text-center">v1</h1>
          </div>
          <Drzewo DATA={DATA} />
        </div>
        <div>
          <div className={font.className}>
            <h1 class="text-3xl text-orange-200 text-center">v2</h1>
          </div>
          <Krzak DATA={DATAX} />
        </div>
      </div>
    </div>
  );
};

export default App;
