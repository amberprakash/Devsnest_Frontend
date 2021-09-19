const updatePlace = (place)=>{
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData = (place) =>{
    return {
        type: "UPDATE_PLACE_DATA",
        payload: place,
    };
};

export {updatePlace,updatePlaceData};