import React, { useState, useEffect } from "react";
import Axios from "axios"

export default function Edit(){
    const [values, setValues] = useState()
   
    useEffect(() => {
        Axios.get("http://127.0.0.1:3001/edit/1").then((response) => {
            response = response.data[0]
            
            setValues((prevValue) => ({
                ...prevValue,
               id: response.id,
               name: response.name,
               cost: response.cost,
               category: response.category,
            }))
           
        })
    }, [])

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
           [value.target.name]: value.target.value
        }))
    }

    const handleClickButton = () => {
        Axios.post("http://127.0.0.1:3001/update", {
            id: values.id,
            name: values.name,
            cost: values.cost,
            category: values.category,
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div>
            <input type="hidden" readOnly value={values ? values.id : ''}/>

            <div class="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
                <div class="w-full px-16 py-20 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
                    <div class="mb-4">
                        <h1 class="font-serif text-3xl font-bold underline decoration-gray-400">
                            Scrim shop - Editar jogo
                        </h1>
                    </div>

                    <div class="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
                        <div>
                            <label class="block text-sm font-bold text-gray-700" for="name">
                                Nome
                            </label>

                            <input
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                name="name"
                                value={values ? values.name : ''}
                                placeholder="Nome"
                                onChange={handleChangeValues}/>
                        </div>

                        <div class="mt-4">
                            <label class="block text-sm font-bold text-gray-700" for="cost">
                                Pre??o
                            </label>
                            <input
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                name="cost"
                                value={values ? values.cost : ''}
                                placeholder="R$ 0,00"
                                onChange={handleChangeValues}
                            />
                        </div>

                        <div class="mt-4">
                            <label class="block text-sm font-bold text-gray-700" for="category">
                                Categoria
                            </label>
                            <input
                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                type="text"
                                name="category"
                                value={values ? values.category : ''}
                                placeholder="Categoria"
                                onChange={handleChangeValues}
                            />
                        </div>

                        <div class="flex items-center justify-start mt-4 gap-x-2">
                            <button 
                                onClick={() => handleClickButton()}
                                class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                            >
                                Salvar
                            </button>
                            <a 
                                href="/"
                                class="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                            >
                                Cancelar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}