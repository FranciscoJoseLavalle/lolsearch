import moment from 'moment'
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Participant from '../Participant/Participant'
import "react-lazy-load-image-component/src/effects/blur.css";
import 'moment/locale/es';

const HistoryMatch = ({ el, user, summonersID }) => {
    const [showSummoners, setShowSummoners] = useState(false);
    return (
        <div>
            <div className='history__gameinfo'>
                {el.info.gameMode === "CLASSIC"
                    && <p>Grieta del Invocador 5v5 {el.info.queueId === 440 && "| Flex"} {el.info.queueId === 420 && "| SoloQ"}</p>}
                {el.info.gameMode === "ARAM"
                    && <p>Abismo de los Lamentos 5v5</p>}
                <small>{moment(el.info.gameEndTimestamp).fromNow()}</small>
                <small>
                    {Math.trunc((el.info.gameDuration / 60))} minutos {el.info.gameDuration % 60} segundos
                </small>
                <button onClick={() => setShowSummoners(!showSummoners)}>{showSummoners === false ? <p>Ver todos</p> : <p>Cerrar</p>}</button>
            </div>
            {
                el.info.participants.map((participant, i) => (
                    showSummoners
                        ? <Participant key={i} participant={participant} user={user} summonersID={summonersID} />
                        : <div key={i} onClick={() => setShowSummoners(true)}>
                            {
                                participant.summonerName === user.name
                                && <Participant key={i} participant={participant} user={user} summonersID={summonersID} />
                            }
                        </div>
                ))
            }
        </div>
    )
}

export default HistoryMatch