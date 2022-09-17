import { useState } from "react";
import InputCep from "../componentes/InputCep";
import InputCidades from "../componentes/InputCidades";
import InputEstados from "../componentes/Inputestados";
import { CepContextProvider } from "../providers/CepContext";
import cometobrasil from "../componentes/cometobrasil.png";

export default function() {

    return <>
        <img src={cometobrasil} width="200" height="300"></img>
        <h1>Cadastro: Dados de Endereço</h1>
        <CepContextProvider>
        <InputCep/>
        <InputEstados />
        <InputCidades />
        </CepContextProvider>
    </>
}