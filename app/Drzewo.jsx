"use client";
import { useState } from "react";

function Drzewo({ DATA }) {
  const [newData, setNewData] = useState(DATA);

  const moveUp = (uid) => {
    const index1 = newData.findIndex((item) => item.uid === uid);
    const index2 = findPrevious(index1);
    swapElements(index1, index2);
  };

  function findPrevious(index) {
    const parentUid = newData[index].parentUid;
    for (let i = index - 1; i >= 0; i--) {
      if (newData[i].parentUid === parentUid) {
        return i;
      }
    }
  }

  function swapElements(index1, index2) {
    const newArray = [...newData];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    setNewData(newArray);
  }

  const Tree = ({ nodes, parentUid }) => {
    const filteredNodes = nodes.filter((node) => node.parentUid === parentUid);
    return (
      <ul className="">
        {filteredNodes.map((node, index) => (
          <li key={node.uid} className="pl-5 py-1 pr-5">
            <div className={node.parentUid === null ? "flex text-3xl my-3" : "flex"}>
              <div>&#9679; {node.uid}</div>
              <div className="mx-3">{node.name}</div>
              {index > 0 && (
                <div className="hover:text-orange-100 cursor-pointer" onClick={() => moveUp(node.uid)}>
                  &#9650;
                </div>
              )}
            </div>

            <Tree nodes={nodes} parentUid={node.uid} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-10">
      <Tree nodes={newData} parentUid={null} />
    </div>
  );
}
export default Drzewo;
