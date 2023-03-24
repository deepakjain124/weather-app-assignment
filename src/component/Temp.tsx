import React, { useState } from "react";
import { Card, Input, Button, message } from "antd";
import './style.css'
import axios from "axios";
import TempView from "./TempView";

interface Props {
}

const Temp: React.FC<Props> = (props: Props) => {
    const [cityname, setCityName] = useState<any>(null)
    const [data, setdata] = useState<any>(null)
    const handleSearch = () => {
        const apiKey = "f47f6c067edbce9a7f7ef968c7d4f5ba"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`        
        axios.get(url).then(res => {
            setdata(res.data)
            setCityName("")  
        }).catch((err) => {
            if (err.response) {
                message.error(err.response.data.message)
            }
        })
    }
    return (
        <>
            <div className="card-container">
                <Card >
                    <h3 className="header-name">Weather App</h3>
                    <div className="search-box" >
                        <Input placeholder="cityname" value={cityname} onChange={(e: any) => setCityName(e.target.value)} />
                        <Button type="primary" disabled={cityname ? false : true} onClick={() => handleSearch()}>Search</Button>
                    </div>
                    {!data?
                    <h1 className="not-found">Not Data Found</h1>
                    :
                    <TempView data={data}/>
                    }
                    
                </Card>
            </div>
        </>
    );
};

export default Temp;