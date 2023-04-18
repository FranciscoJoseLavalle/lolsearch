import axios from 'axios';
import { useEffect, useState } from 'react';
import './User.css';
import Loader from '../Loader/Loader';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const User = ({ user, api_key }) => {
    const [userLeagues, setUserLeagues] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        if (user?.id) {
            axios.get(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${user.id}?api_key=${api_key}`)
                .then(res => {
                    setUserLeagues(res.data);
                    setLoading(false);
                })
        }
    }, [user])
    return (
        <>
            {
                loading
                    ? <Loader />
                    : <div className='user'>
                        <LazyLoadImage
                            src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${user.profileIconId}.png`}
                            alt={`${user.name} icon`}
                            effect="blur"
                            width={100}
                            height={100}
                        />
                        <div>
                            <h3>{user.name}</h3>
                            {userLeagues[0]?.rank
                                && <><p>{`${userLeagues[0]?.tier} ${userLeagues[0]?.rank}`}</p>
                                    <small>{`${userLeagues[0]?.wins}W ${userLeagues[0]?.losses}L ${(userLeagues[0]?.wins / (userLeagues[0]?.wins + userLeagues[0]?.losses) * 100).toFixed(2)}% winrate`}</small></>
                            }

                            <small>Nivel {user.summonerLevel}</small>

                        </div>
                    </div>
            }
        </>
    )
}

export default User