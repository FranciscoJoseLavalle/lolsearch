import moment from 'moment'
import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Participant from '../Participant/Participant'
import "react-lazy-load-image-component/src/effects/blur.css";

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

//     < div >
// {
//     participant.summonerName === user.name && <div className='participant' style={{
//         backgroundColor: participant.win ? '#44a' : '#a44',

//     }}>
//         <div>
//             <div className='participant__champ'>
//                 <LazyLoadImage
//                     src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/${participant.championName === "FiddleSticks" ? "Fiddlesticks" : participant.championName}.png`}
//                     alt={participant.championName}
//                     effect="blur"
//                     width={45}
//                     height={45}
//                 />
//                 <p>{participant.champLevel}</p>
//             </div>
//             <div className="participant__spells">
//                 <LazyLoadImage
//                     src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/${summoners[0]}.png`}
//                     alt={summoners[0]}
//                     effect="blur"
//                     width={25}
//                     height={25}
//                 />
//                 <LazyLoadImage
//                     src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/spell/${summoners[1]}.png`}
//                     alt={summoners[1]}
//                     effect="blur"
//                     width={25}
//                     height={25}
//                 />
//             </div>
//             <div className='participant__summoner'>
//                 <p>{participant.summonerName}</p>
//                 <small>Nivel {participant.summonerLevel}</small>
//             </div>
//             <p>{`${participant.kills}/${participant.deaths}/${participant.assists}`}</p>
//         </div>
//         <div className='participant__items'>
//             {items.map((item, i) => item !== 0 && <Item key={i} itemName={item} />)}
//         </div>
//         <button onClick={() => setShowSummoners(true)}>VER TODOS</button>
//     </div>
// }
//                             </ >