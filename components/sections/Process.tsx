import Image from "next/image";
import React from "react";

const Process = () => {
  const prodessData = [
    {
      id: 1,
      step: "Step 1.",
      title: "User experience & brand strategy preparing.",
      desc: "Diseñador Gráfico y Digital y además como greate idea in front of the gráficos.",
    },
    {
      id: 2,
      step: "Step 2.",
      title: "Core resources preparing for the post-launch.",
      desc: "Diseñador Gráfico y Digital y además como greate idea in front of the gráficos.",
    },
    {
      id: 3,
      step: "Step 3.",
      title: "Common UI/UX layers and patterns creating.",
      desc: "Diseñador Gráfico y Digital y además como greate idea in front of the gráficos.",
    },
  ];
  return (
    <div className="d-flex flex-column text-center px-0 w-100 pt-5 mt-5">
      <h2>Process</h2>
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-3 w-100 left-right-space pb-5 mb-5 process-styles">
        {prodessData.map((item) => (
          <div key={item.id} className="col p-4 text-start">
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
