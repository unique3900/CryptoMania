import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCoins } from '../Setup/api'
import { Currency } from '../Global/Context'
import { Link } from 'react-router-dom'

const Slider = () => {
    const { currency, setCurrency } = useContext(Currency);
    const [coins, setCoins] = useState([])
    const fetchCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency),{
            cors: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type"
            }
          });
        setCoins(data);
    }
    useEffect(() => {
        fetchCoins();
        console.log(coins);
    }, [currency])
    

    const items = coins.map((coin) => {
        return (
            <Link className='h-40 w-40 flex flex-col gap-2 justify-center items-center' to={`/coins/${coin.id}`}>
                <img className='w-14 h-14' src={coin.image} alt={coin.id} />
                <p className="text-sm text-white font-bold capitalize">{coin.symbol }</p>
                <p className="text-sm text-white font-bold capitalize">{ currency}-{coin.current_price }</p>
            </Link>
        )
    })
    const responsive = {
        //When small px
        0: {
            items:2
        },
        512: {
            items:4
        }
    }
  return (
    <div className=' w-[700px] overflow-hidden'>
          <AliceCarousel
              infinite
              autoPlay={true}
              mouseTracking
              autoPlayInterval={1000}
              animationDuration={1500}
              disableDotsControls={true}
              disableButtonsControls
              responsive={responsive}
              items={items}
          />
    </div>
  )
}

export default Slider
