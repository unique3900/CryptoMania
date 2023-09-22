import React, {
    useState
} from 'react'
import {
    navitem
} from '../Items'
import {
    Link
} from 'react-router-dom'
import {
    GiHamburgerMenu
} from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [navState, setNavState] = useState(false);
    return (
        <div className='relative flex flex-row justify-between gap-10 px-5 py-3 place-items-center'>
            <Link to={'/'}
                className='text-yellow-500 font-bold text-3xl'>Crypto
                <span className='text-cyan-500'>Mania</span>
            </Link>

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
                navState==false ? <GiHamburgerMenu className='lg:hidden w-8 h-8 cursor-pointer'
                onClick={
                    () => {
                        setNavState(!navState)
                        console.log(navState)
                    }
                } /> : <AiOutlineClose className='lg:hidden w-8 h-8 cursor-pointer'
                    onClick={
                        () => {
                            setNavState(!navState)
                            console.log(navState)
                        }} />
            }
            {
            navState && (
                <div className={
                    navState ? " absolute top-9 right-8 flex flex-col gap-5 text-lg" : ""
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
