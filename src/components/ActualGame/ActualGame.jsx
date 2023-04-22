import React, { useContext, useEffect, useState } from 'react'
import './ActualGame.css';
import summoners from '../../utilities/summoners.json';
import champs from '../../utilities/champs.json';
import ActualGameParticipant from '../ActualGameParticipant/ActualGameParticipant';
import Loader from '../Loader/Loader';
import { ModalContext } from '../../context/ModalContext';

const ActualGame = ({ live }) => {
    const { matchInfo, user, findActualGame, isPlaying } = useContext(ModalContext);
    const [champsID, setChampsID] = useState([])
    let champsArray = Object.entries(champs.data);

    const [summonersID, setSummonersID] = useState([])
    let summonersArray = Object.entries(summoners.data);

    useEffect(() => {
        setChampsID([]);
        if (matchInfo.participants) {
            if (champsID.length === 0 && summonersID.length === 0) {
                champsArray.forEach(el => {
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
            }
        } else {
            findActualGame(user.id)
        }

    }, [])
    useEffect(() => {
        if (matchInfo.participants) {
            if (champsID.length === 0 && summonersID.length === 0) {
                setChampsID([]);
                champsArray.forEach(el => {
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
            }
        }

    }, [matchInfo])

    if (isPlaying === false) {
        return (
            <p style={{
                textAlign: "center"
            }}>El jugador no se encuentra en partida.</p>
        )
    }
    if (!matchInfo.participants) {
        return (
            <Loader />
        )
    }
    return (
        <div className='actualgame'>
            {matchInfo.gameMode === 'ARAM' && <p>Abismo de los lamentos 5v5</p>}
            {matchInfo.gameMode === 'CLASSIC' && <p>Grieta del Invocador 5v5 {matchInfo.gameQueueConfigId === 440 && "| Flex"} {matchInfo.gameQueueConfigId === 420 && "| SoloQ"}</p>}
            <div className='actualgame__container'>
                {matchInfo.participants.map((participant, i) => (
                    participant.teamId === 100 &&
                    <ActualGameParticipant key={i} summonersID={summonersID} participant={participant} champsID={champsID} />
                )
                )}
            </div>
            <div className='actualgame__container'>
                {matchInfo.participants.map((participant, i) => (
                    participant.teamId === 200 &&
                    <ActualGameParticipant key={i} summonersID={summonersID} participant={participant} champsID={champsID} />
                )
                )}
            </div>
        </div>
    )
}

export default ActualGame