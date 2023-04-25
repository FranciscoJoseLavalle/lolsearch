import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../context/ModalContext'
import champs from '../../utilities/champs.json';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './UserBestChamps.css'

const UserBestChamps = () => {
    const { bestChamps } = useContext(ModalContext);
    const [champsID, setChampsID] = useState([])
    let champsArray = Object.entries(champs.data);
    useEffect(() => {
        setChampsID([]);
        champsArray.forEach(el => {
            if (el[1].key == 222) {
                console.log(el[1].id);
            }
            bestChamps.forEach(element => {
                if (element.championId == el[1].key) {
                    setChampsID(test => [...test, { id: el[1].id, points: element.championPoints, level: element.championLevel }])
                }
            })
        })
    }, [bestChamps])
    return (
        <div className='bestChamps'>
            {champsID.map((champ, i) =>
                <div className='bestChamp' key={i}>
                    <LazyLoadImage
                        key={i}
                        src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${champ.id}.png`}
                        alt={champ.id}
                        effect="blur"
                        width={40}
                        height={40}
                    />
                    <small className='bestChamp__level'>{champ.level}</small>
                    {/* <small>{champ.points}</small> */}
                    <small>{Math.round(champ.points / 100) / 10}k</small>
                    {/* <small>{(champ.points).toString().length > 3 ? `${(champ.points).toString()[0]}${(champ.points).toString()[1]}${(champ.points).toString()[3]}k` : champ.points}</small> */}
                </div>
            )}
        </div>
    )
}

export default UserBestChamps