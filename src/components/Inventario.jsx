import React, { Component, Fragment } from 'react'

export default class Inventario extends Component {
    render() {
        return (
            <Fragment>
                <h2 class="flex justify-center text-3xl font-bold text-gray-800 mx-2 mb-3">Inventario</h2>
                <div class="container mx-auto flex md:flex-row-reverse flex-wrap my-5">
                    <div class="w-full md:w-1/12 bg-red-700 hover:bg-red-600 text-white font-bold rounded-full p-4 text-center">Eliminar</div>
                    <div class="w-full md:w-1/12 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full p-4 text-center">Editar</div>
                    <div class="w-full md:w-2/12 bg-green-400 p-4 text-center text-white rounded-full">$13</div>
                    <div class="w-full md:w-8/12 p-4 text-center text-black shadow-outline rounded-full">Coca</div>
                </div>
                <div class="container mx-auto flex md:flex-row-reverse flex-wrap my-5">
                    <div class="w-full md:w-1/12 bg-red-700 hover:bg-red-600 text-white font-bold rounded-full p-4 text-center">Eliminar</div>
                    <div class="w-full md:w-1/12 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full p-4 text-center">Editar</div>
                    <div class="w-full md:w-2/12 bg-green-400 p-4 text-center text-white rounded-full">$12</div>
                    <div class="w-full md:w-8/12 p-4 text-center text-black shadow-outline rounded-full">Pepsi</div>
                </div>
                <div class="container mx-auto flex md:flex-row-reverse flex-wrap my-5">
                    <div class="w-full md:w-1/12 bg-red-700 hover:bg-red-600 text-white font-bold rounded-full p-4 text-center">Eliminar</div>
                    <div class="w-full md:w-1/12 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full p-4 text-center">Editar</div>
                    <div class="w-full md:w-2/12 bg-green-400 p-4 text-center text-white rounded-full">$5</div>
                    <div class="w-full md:w-8/12 p-4 text-center text-black shadow-outline rounded-full">Bolillo</div>
                </div>
                <div class="container mx-auto flex md:flex-row-reverse flex-wrap my-5">
                    <div class="w-full md:w-1/12 bg-red-700 hover:bg-red-600 text-white font-bold rounded-full p-4 text-center">Eliminar</div>
                    <div class="w-full md:w-1/12 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full p-4 text-center">Editar</div>
                    <div class="w-full md:w-2/12 bg-green-400 p-4 text-center text-white rounded-full">$15</div>
                    <div class="w-full md:w-8/12 p-4 text-center text-black shadow-outline rounded-full">Sabritas</div>
                </div>
                <div class="container mx-auto flex md:flex-row-reverse flex-wrap my-5">
                    <div class="w-full md:w-1/12 bg-red-700 hover:bg-red-600 text-white font-bold rounded-full p-4 text-center">Eliminar</div>
                    <div class="w-full md:w-1/12 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full p-4 text-center">Editar</div>
                    <div class="w-full md:w-2/12 bg-green-400 p-4 text-center text-white rounded-full">$27</div>
                    <div class="w-full md:w-8/12 p-4 text-center text-black shadow-outline rounded-full">Pan Bimbo</div>
                </div>
            </Fragment>
        )
    }
}
