import React from "react";
import GoogleMapReact from 'google-maps-react';

const Map = ()=>{
    
    const coordinates = {
        lat:0,
        lng:0
    };
    
    return (
        <div className="">
            <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyCVdvG_RGYUALeiYNiKPztrbwsqNCyD0JQ'}}
                defaultCenter={coordinates}
                center= {coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={""}
                onChange={""}
                onChildClick={""}
                google={""}
            >


            </GoogleMapReact>


        </div>
    );
}

export default Map;