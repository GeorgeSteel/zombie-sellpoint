import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Cuenta extends Component {
    render() {
        return (
            <Fragment>
                <div className="flex justify-center mt-5">
                    <ul className="flex border-b">
                        <li className="-mb-px mr-1">
                            <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" to="#">Active</Link>
                        </li>
                        <li className="mr-1">
                            <Link className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="#">Cuenta #1</Link>
                        </li>
                        <li className="mr-1">
                            <Link className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="#">Cuenta #2</Link>
                        </li>
                        <li className="mr-1">
                            <Link className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" to="#">Cuenta #3</Link>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}
