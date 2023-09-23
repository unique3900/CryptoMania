import React, {
    useContext,
    useState
} from 'react'
import {
    currency,
    navitem
} from '../Items'
import {
    Link
} from 'react-router-dom'
import {
    GiHamburgerMenu
} from 'react-icons/gi';
import {
    AiOutlineClose
} from 'react-icons/ai';
import { Currency } from '../Global/Context';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const { currency, setCurrency } = useContext(Currency);
    return (
        <div className='capitalize relative flex flex-row justify-between gap-10 px-5 py-3 place-items-center'>
            <div className="flex gap-2">
                <Link to={'/'}
                    className='text-yellow-500 font-bold text-3xl'>Crypto
                    <span className='text-cyan-500'>Mania</span>
                </Link>
                <p className="font-bold text-md text-yellow-500">{currency}</p>
            </div>


            <div className="hidden lg:flex flex-row gap-5 text-lg">
                {
                navitem.map((items) => (
                    <Link key={
                            items.id
                        }
                        className='hover:scale-105 transition-transform'
                        to={
                            `/${
                                items.title
                            }`
                    }>
                        {
                        items.title
                    }</Link>
                ))
            } </div>
            {
            navState == false ? <GiHamburgerMenu className='lg:hidden w-8 h-8 cursor-pointer'
                onClick={
                    () => {
                        setNavState(!navState)
                        console.log(navState)
                    }
                }/> : <AiOutlineClose className='lg:hidden w-8 h-8 cursor-pointer'
                onClick={
                    () => {
                        setNavState(!navState)
                        console.log(navState)
                    }
                }/>
        }
            {
            navState && (
                <div className={
                    navState ? "bg-white z-10 w-[400px] absolute top-12 text-black right-8 text-center flex flex-col gap-5 text-lg" : ""
                }>
                    {
                    navitem.map((items) => (
                        <Link key={
                                items.id
                            }
                            className='hover:scale-105 transition-transform'
                            to={
                                `/${
                                    items.title
                                }`
                        }>
                            {
                            items.title
                        }</Link>
                    ))
                } </div>
            )
        } </div>
    )
}

export default Navbar
