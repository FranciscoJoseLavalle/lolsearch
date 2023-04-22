import React from 'react'
import LeagueIcon from '../LeagueIcon/LeagueIcon'

const UserLeague = ({ league, text, route }) => {
    return (
        <div>
            <p><LeagueIcon league={league.tier} route={route} />{`${league.tier} ${league.rank} ${league.leaguePoints} PL ${text}`}</p>
            <small>{`${league?.wins}W ${league?.losses}L ${(league?.wins / (league?.wins + league?.losses) * 100).toFixed(2)}% winrate`}</small>
        </div>
    )
}

export default UserLeague