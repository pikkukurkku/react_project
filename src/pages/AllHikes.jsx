import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import beersJSON from "./../assets/beers.json";
import axios from "axios";

const BE_URL = "https://json-server.adaptable.app/hikes"

function AllHikes () {
    const [hikes, setHikes] = useState([])
    

    function getAllHikes () {
        axios
        .get(BE_URL)
        .then((response) => setHikes(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllHikes();
    }, []);




    return (
        <div className="all-hikes">
        {hikes && hikes.map((hike, i)=> {
            return (
                <div key={i}>
                    <p>{hike.nameOfHike}</p>
                    <p>{hike.nmountain.Range}</p>
                </div>
            )
        })}

        </div>
    )
}

export default AllHikes;

