import { useState } from "react";
import { InputCep, InputCnpj, InputCpf, InputDate, InputTime } from "../Input";

export default function App() {
  const [items, setItems] = useState({
    cep: "",
    cpf: "",
    cnpj: "",
    date: "",
    time: ""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setItems({ ...items, [name]: value });
  }
  return (
    <div className="container mt-2">
      <h1>Inputs Mask</h1>
      <div className="mt-2">
        <InputCep name="cep" value={items.cep} onChange={handleChange} />
      </div>
      <div className="mt-2">
        <InputCpf name="cpf" value={items.cpf} onChange={handleChange} />
      </div>
      <div className="mt-2">
        <InputCnpj name="cnpj" value={items.cnpj} onChange={handleChange} />
      </div>
      <div className="mt-2">
        <InputDate name="date" value={items.date} onChange={handleChange} />
      </div>
      <div className="mt-2">
        <InputTime name="time" value={items.time} onChange={handleChange} />
      </div>
      <div className="mt-2">{JSON.stringify(items)}</div>
    </div>
  );
}
