import './History.css';
import summoners from '../../utilities/summoners.json';
import { useContext, useEffect, useState } from 'react';
import HistoryMatch from '../HistoryMatch/HistoryMatch';
import { ModalContext } from '../../context/ModalContext';

const History = ({ user, findMatches }) => {
    const { history } = useContext(ModalContext);
    const [summonersID, setSummonersID] = useState([])
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
            }}>
                <option value="10">Cantidad de partidas</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            {history.map((el, i) =>
                <HistoryMatch key={i} el={el} user={user} summonersID={summonersID} />
            )}
        </div>
    )
}

export default History