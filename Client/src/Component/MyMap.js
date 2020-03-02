import React, {useState} from "../../node_modules/@types/react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps";

function Map(){
    const [info, setInfo] = useState(null);
  return(
    <GoogleMap
       defaultZoom={15}
       defaultCenter={{ lat: 21.109550, lng: 105.446000}}
    >
        <Marker
           position={{ lat: 21.109550, lng: 105.446000}}
           onClick={()=>setInfo("Hello")}
        ></Marker>
        {
            info &&(
                <InfoWindow
                position={{ lat: 21.109550, lng: 105.446000}}
                onCloseClick={()=>setInfo(null)}
            >
                <h2>Helloe</h2>
            </InfoWindow>
            )
        }
    </GoogleMap>
  )
}

const MyMap = withScriptjs(withGoogleMap(Map));
export default MyMap;
// import GoogleMapReact from 'google-map-react';
// import React from "react";

// function MyMap(){
//     return(
//         <GoogleMapReact
//         bootstrapURLKeys={{ key:"AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8"}}
//         defaultCenter={{ lat: 21.109550, lng: 105.446000}}
//         defaultZoom={10}
//       >
//       </GoogleMapReact>
//     )
// };
// export default MyMap;