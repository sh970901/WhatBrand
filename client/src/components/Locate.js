import React from 'react'
import "../App.css"

const Locate = ({ panTo, place, getPlace }) => {

    function myLocate() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const myLat = position.coords.latitude
                const myLng = position.coords.longitude
                getPlace({ myLat, myLng })
                panTo({ lat: myLat, lng: myLng })
            }
        )
    }
    return (
        <div>
            <button className="locate" onClick={myLocate}>
            </button>
        </div>
    )
}

export default Locate