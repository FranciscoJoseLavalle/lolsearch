import React, { useEffect, useState } from 'react'
import LeagueIcon from '../LeagueIcon/LeagueIcon'

const UserLeague = ({ league, text, route }) => {
    const [promo, setPromo] = useState([]);
    useEffect(() => {
        let array = [];
        if (league?.miniSeries) {
            for (let i = 0; i < league.miniSeries.progress.length; i++) {
                array.push(league.miniSeries.progress[i])
            }
        }
        setPromo(array);
    }, [])
    return (
        <div>
            <p><LeagueIcon league={league.tier} route={route} />{`${league.tier} ${league.rank} ${league.leaguePoints} PL ${text} `}{promo.map(progress => progress === 'N' ? ' - ' : progress)}</p>

            <small>{`${league?.wins}W ${league?.losses}L ${(league?.wins / (league?.wins + league?.losses) * 100).toFixed(2)}% winrate`}</small>
        </div>
    )
}

export default UserLeague

