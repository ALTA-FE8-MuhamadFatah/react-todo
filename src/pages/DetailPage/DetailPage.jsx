import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
    const location = useLocation()
    return (
        <>
            {location.state.content} <br/>
            {location.state.id} <br />
            {location.state.url} <br />
            {location.state.description}
        </>
    )
}

export default DetailPage