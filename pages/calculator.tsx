import React from "react";

function Calculator() {
    const [value, setValue] = React.useState('0');
    const [clear, setClear] = React.useState(false);
    const [operator, setOperator] = React.useState([

    ]);

    function addCommasToNumberText(inputText: string): string {
        // Eliminar todas las comas existentes en el texto
        let textWithoutCommas = inputText.replace(/,/g, '');
      
        // Validar que el texto contenga al menos tres dígitos y quitar un cero al principio si existe
        if (/^0\d+/.test(textWithoutCommas)) {
          textWithoutCommas = textWithoutCommas.replace(/^0/, '');
        }
      
        // Validar que el texto contenga al menos tres dígitos después de quitar el cero
        if (textWithoutCommas.length < 3) {
          return textWithoutCommas;
        }
      
        // Dividir el texto en grupos de tres dígitos desde el final hacia el principio
        const reversedText = textWithoutCommas.split('').reverse().join('');
        const groups = reversedText.match(/\d{1,3}/g);
      
        // Unir los grupos con comas y revertir el resultado para obtener el formato correcto
        if (groups) {
          const formattedText = groups.join(',').split('').reverse().join('');
          return formattedText;
        } else {
          return textWithoutCommas; // Si no se encontraron grupos de tres dígitos, devolver el texto original
        }
    }

    function typeNumber(value:any) {
        const newValue = value.nativeEvent.srcElement.innerText;

        console.log("typeNumber", value.nativeEvent.srcElement.innerText);

        if(newValue === "C") {
            setValue('0');
            setClear(false);
            return;
        }else if (newValue.includes('+','-', '÷', '×', '=')){
            setClear(true);
            console.log("includes");
            
        }else{
            setClear(true);
            setValue((prevValue:string) => addCommasToNumberText(prevValue + newValue))
        }
    }

    return (
        <div className="bg-black h-screen p-2 flex flex-col justify-center">
            {/* make a calculator */}
            <div>
                <h1 className="text-white text-4xl font-light text-end my-2">{value}</h1>
            </div>
            <div className="grid grid-cols-4 gap-1 ">
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">{clear ? 'C' : 'AC'}</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">+/-</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">%</button>
                <button onClick={typeNumber} id='÷' className="rounded-full bg-orange-500 text-white">÷</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">7</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">8</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">9</button>
                <button onClick={typeNumber} id='×' className="rounded-full bg-orange-500 text-white">×</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">4</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">5</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">6</button>
                <button onClick={typeNumber} id='-' className="rounded-full bg-orange-500 text-white">-</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">1</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">2</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">3</button>
                <button onClick={typeNumber} id='+' className={''}>+</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white col-span-2">0</button>
                <button onClick={typeNumber} className="rounded-full bg-zinc-700 text-white">.</button>
                <button onClick={typeNumber} className="rounded-full bg-orange-500 text-white">=</button>
                
            </div>

        </div>
    );
}

export default Calculator;