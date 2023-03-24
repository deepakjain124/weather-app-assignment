import React from "react";

interface Props {
    data: any;
}
const TempView: React.FC<Props> = ({ data }: Props) => {
    const date=new Date()
    const sunrise=new Date(data?.sys?.sunrise * 1000)
    const sunset=new Date(data?.sys?.sunset * 1000)

    return (
        <>
           <div className="card-data">
            <div className="box">
                <p>{data.name}, {data.sys.country} , Weather</p>
                <p>As of {date.toDateString()}</p>
                <h1>{data?.main?.temp}</h1>
                <p>{data.weather[0]?.main}</p>
            </div>
</div>
<div className="details-grid">
  <div className="detail">
    <p>High/Val</p>
    <p>{data?.main?.temp_max}</p>
  </div>
  <div className="detail">
    <p>Wind</p>
    <p>{data?.wind?.speed ? `${data.wind.speed} km/hr` : "-"}</p>
  </div>
  <div className="detail">
    <p>Humidity</p>
    <p>{data?.main?.humidity + " %"?? "-"}</p>
  </div>
  <div className="detail">
    <p>Wind Direction</p>
    <p>{data?.wind?.deg ?data?.wind?.deg + " deg": "-"}</p>
  </div>
  <div className="detail">
    <p>Pressure</p>
    <p>{data?.main?.pressure + " hPs" ?? "-"}</p>
  </div>
  <div className="detail">
    <p>Sunrise</p>
    <p>{sunrise.toLocaleTimeString("en-US") ?? "-"}</p>
  </div>
  <div className="detail">
    <p>Visibility</p>
    <p>{data?.visibility/1000 +" Km" ?? "-"}</p>
  </div>
  <div className="detail">
    <p>Sunset</p>
    <p>{sunset.toLocaleTimeString("en-US") ?? "-"}</p>
  </div>
</div>
        </>
    );
};

export default TempView;