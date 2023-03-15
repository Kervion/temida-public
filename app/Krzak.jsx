"use client";
import { useState } from "react";

function Krzak({ DATA }) {
  const [newData, setNewData] = useState(DATA);

  const moveUp = (node) => {
    console.log(node);
  };

  const Tree = ({ nodes, master }) => {
    return (
      <ul class="">
        {nodes.map((node, index) => (
          <li key={node.uid} class="pl-5 py-1 pr-5">
            <div class={master ? "flex text-3xl my-3" : "flex"}>
              <div>&#9679; {node.uid}</div>
              <div class="mx-3">{node.name}</div>
              {index > 0 && (
                <>
                  <div class="hover:text-orange-100 cursor-pointer" onClick={() => moveUp(node)}>
                    &#9650;
                  </div>
                </>
              )}
            </div>
            {node.children?.length > 0 && <Tree nodes={node.children} master={false} />}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div class="p-10">
      <Tree nodes={newData} master={true} />
    </div>
  );
}
export default Krzak;
