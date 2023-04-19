import './History.css';
import Participant from '../Participant/Participant'
import moment from 'moment';
import summoners from '../../utilities/summoners.json';
import { useEffect, useState } from 'react';
import HistoryMatch from '../HistoryMatch/HistoryMatch';

const History = ({ history, user, findMatches, setLoading }) => {
    const [summonersID, setSummonersID] = useState([])
    const [showSummoners, setShowSummoners] = useState(false);
    let summonersArray = Object.entries(summoners.data);
    useEffect(() => {
        setSummonersID([]);
        summonersArray.forEach(el => {
            setSummonersID(test => [...test, { id: el[1].id, key: el[1].key }])
        })
    }, [])
    return (
        <div className='history'>
            <select onChange={(e) => {
                findMatches(user.puuid, e.target.value)
                setLoading(true);
            }}>
                <option value="10">Cantidad de partidas</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            {history.map((el, i) =>
                <HistoryMatch key={i} el={el} user={user} summonersID={summonersID}/>
            )}
        </div>
    )
}

export default History