import React from "react";

function Calculator() {
  const [value, setValue] = React.useState("0");
  const [clear, setClear] = React.useState(false);
  const [keys, setKeys] = React.useState([
    {
      value: "C",
      classCSS: "rounded-full bg-zinc-600 text-white",
      name: "clear",
    },
    {
      value: "+/-",
      classCSS: "rounded-full bg-zinc-600 text-white",
      name: "abs",
    },
    {
      value: "%",
      classCSS: "rounded-full bg-zinc-600 text-white",
      name: "porc",
    },
    {
      value: "÷",
      classCSS: "rounded-full bg-orange-500 text-white",
      name: "divs",
    },
    {
      value: "7",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "siete",
    },
    {
      value: "8",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "ocho",
    },
    {
      value: "9",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "nueve",
    },
    {
      value: "×",
      classCSS: "rounded-full bg-orange-500 text-white",
      name: "mult",
    },
    {
      value: "4",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "cuatro",
    },
    {
      value: "5",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "cinco",
    },
    {
      value: "6",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "seis",
    },
    {
      value: "-",
      classCSS: "rounded-full bg-orange-500 text-white",
      name: "rest",
    },
    {
      value: "1",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "uno",
    },
    {
      value: "2",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "dos",
    },
    {
      value: "3",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "tres",
    },
    {
      value: "+",
      classCSS: "rounded-full bg-orange-500 text-white",
      name: "mas",
    },
    {
      value: "0",
      classCSS: "rounded-full bg-zinc-700 text-white col-span-2",
      name: "cero",
    },
    {
      value: ".",
      classCSS: "rounded-full bg-zinc-700 text-white",
      name: "pnt",
    },
    {
      value: "=",
      classCSS: "rounded-full bg-orange-500 text-white",
      name: "igual",
    },
  ]);

  function addCommasToNumberText(inputText: string): string {
    // Eliminar todas las comas existentes en el texto
    let textWithoutCommas = inputText.replace(/,/g, "");

    // Validar que el texto contenga al menos tres dígitos y quitar un cero al principio si existe
    if (/^0\d+/.test(textWithoutCommas)) {
      textWithoutCommas = textWithoutCommas.replace(/^0/, "");
    }

    // Validar que el texto contenga al menos tres dígitos después de quitar el cero
    if (textWithoutCommas.length < 3) {
      return textWithoutCommas;
    }

    // Dividir el texto en grupos de tres dígitos desde el final hacia el principio
    const reversedText = textWithoutCommas.split("").reverse().join("");
    const groups = reversedText.match(/\d{1,3}/g);

    // Unir los grupos con comas y revertir el resultado para obtener el formato correcto
    if (groups) {
      const formattedText = groups.join(",").split("").reverse().join("");
      return formattedText;
    } else {
      return textWithoutCommas; // Si no se encontraron grupos de tres dígitos, devolver el texto original
    }
  }

  function typeNumber(value: any) {
    const newValue = value.nativeEvent.srcElement.innerText;

    console.log("typeNumber", value.nativeEvent.srcElement.innerText);

    if (newValue === "C") {
      setValue("0");
      setClear(false);
      return;
    } else if (newValue.includes("+", "-", "÷", "×", "=")) {
      setClear(true);
      console.log("includes");
    } else {
      setClear(true);
      setValue((prevValue: string) =>
        addCommasToNumberText(prevValue + newValue)
      );
    }
  }

  return (
    <div className="bg-black h-screen flex flex-col justify-center p-40">
      {/* make a calculator */}
      <div>
        <h1 className="text-white text-4xl font-light text-end my-2">
          {value}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-1 ">
        {
          // @ts-ignore
          keys.map((key) => (
            <button
              key={key.name}
              className={key.classCSS}
              onClick={typeNumber}
            >
              {key.value}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Calculator;
