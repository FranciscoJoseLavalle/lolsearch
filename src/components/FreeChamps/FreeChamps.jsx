import axios from 'axios';
import React, { useEffect, useState } from 'react'
import champs from '../../utilities/champs.json';
import './FreeChamps.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FreeChamps = ({ api_key }) => {
    const [freeChamps, setFreeChamps] = useState([]);
    const [champsID, setChampsID] = useState([])
    let champsArray = Object.entries(champs.data);
    useEffect(() => {
        axios.get(`https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${api_key}`)
            .then(res => {
                setFreeChamps(res.data.freeChampionIds)
            })
    }, [])
    useEffect(() => {
        setChampsID([]);
        champsArray.forEach(el => {
            if (el[1].key == 222) {
                console.log(el[1].id);
            }
            freeChamps.forEach(element => {
                if (element == el[1].key) {
                    setChampsID(test => [...test, el[1].id])
                }
            })
        })
    }, [freeChamps])
    return (
        <div className='free'>
            <p>Rotación gratuita semanal</p>
            <div className='freechamps'>
                {champsID.map((champ, i) =>
                    <LazyLoadImage
                        key={i}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${champ}.png`}
                        alt={champ}
                        effect="blur"
                        width={40}
                        height={40}
                    />
                )}
            </div>
        </div>
    )
}

export default FreeChamps