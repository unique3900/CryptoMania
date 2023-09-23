import React, {
    useContext,
    useState
} from 'react'
import {
    Select
} from 'antd';
import {
    currency
} from '../Items';
import {
    Currency
} from '../Global/Context';


const SubNav = () => {
    const {
        currency,
        setCurrency
    } = useContext(Currency);

    return (
        <div className='flex justify-end px-8 py-3'>
            <div className="flex flex-row gap-2 items-center">
                <p className="text-lg font-bold text-yellow-500">Currency</p>
                <select onChange={(e) => {
                   setCurrency(e.target.value)
                }} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                     <option value="USD" selected>USD</option>
                    <option value="NPR" selected>NPR</option>
                    <option value="INR" selected>INR</option>
                </select>
            </div>

        </div>
    )
}

export default SubNav
