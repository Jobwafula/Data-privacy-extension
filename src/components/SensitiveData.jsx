import React from "react";

export default function SensitiveData() {
  const data = [
    {
      name: "healthStatus",
    },
    {
      name: "Race",
    },
    {
      name: "Maritial status",
    },
    {
      name: "Belief",
    },
    {
        name: "Biometric Data",
      },
  ];
  return (
    <div className="flex justify-start h-[120px]">
      <ul>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <li className="font-medium">{item.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
