import React, { useEffect, useState } from 'react'
import './ActualGame.css';
import summoners from '../../utilities/summoners.json';
import champs from '../../utilities/champs.json';
import ActualGameParticipant from '../ActualGameParticipant/ActualGameParticipant';

const ActualGame = ({ matchInfo }) => {
    const [champsID, setChampsID] = useState([])
    let champsArray = Object.entries(champs.data);

    const [summonersID, setSummonersID] = useState([])
    let summonersArray = Object.entries(summoners.data);

    useEffect(() => {
        setChampsID([]);
        champsArray.forEach(el => {
            if (el[1].key == 222) {
                console.log(el[1].id);
            }
            matchInfo.participants.forEach(element => {
                if (element.championId == el[1].key) {
                    setChampsID(test => [...test, { name: el[1].id, key: el[1].key }])
                }
            })
        })

        setSummonersID([]);
        summonersArray.forEach(el => {
            setSummonersID(test => [...test, { id: el[1].id, key: el[1].key }])
        })
    }, [])

    return (
        <div className='actualgame'>
            {matchInfo.gameMode === 'ARAM' && <p>Abismo de los lamentos 5v5</p>}
            {matchInfo.gameMode === 'CLASSIC' && <p>Grieta del Invocador 5v5</p>}
            <div className='actualgame__container'>
                {matchInfo.participants.map((participant, i) => <ActualGameParticipant key={i} summonersID={summonersID} participant={participant} champsID={champsID} />)}
            </div>
        </div>
    )
}

export default ActualGame