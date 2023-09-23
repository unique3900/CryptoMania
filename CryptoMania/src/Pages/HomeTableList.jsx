import React, { useContext, useEffect, useState } from 'react'
import { List, ListItem, Card } from "@material-tailwind/react";
import { Currency } from '../Global/Context';
import axios from 'axios';
import { CoinList } from '../Setup/api';
const HomeTableList = () => {
    const { currency, setCurrency } = useContext(Currency);
    const [coins, setCoins] = useState([]);
    const fetchCoins = async() => {
        const { data } = await axios.get(CoinList(currency),{
            cors: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type"
            }
            
        });
        
        setCoins(data);
    }
    useEffect(() => {

        fetchCoins();
        console.log(coins)
    }, [currency])
    
    return (
      <div className=" mt-3 bg-black  w-full overflow-hidden">
                 <Card className=" bg-black ">
          <h2 className="text-center text-4xl  text-yellow-500 font-mono font-bold ">Trending Coins</h2>
                <List className='w-[98%] flex gap-3 justify-center'>
                 
                    {
                        coins.slice(0,10).map((item, index) => (
                            <ListItem className=' bg-yellow-500 py-3 px-2  text-black font-bold flex flex-row justify-between  items-center'>
                        
                            <div className="flex flex-row gap-2">
                                <img className='w-8 h-8' src={item.image} alt="" />
                                <p className="font-bold text-lg capitalize">{item.name}</p>
                            </div>
                            <div className="">
                                    <p className="font-bold text-lg text-black ">{currency} {item.current_price }</p>
                            </div>
                            
                        </ListItem>
                        ))
                    }


      </List>
    </Card> 
      </div>

  )
}

export default HomeTableList
