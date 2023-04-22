import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './User.css';
import Loader from '../Loader/Loader';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LeagueIcon from '../LeagueIcon/LeagueIcon';
import UserLeague from '../UserLeague/UserLeague';
import { Link } from 'react-router-dom'
import { ModalContext } from '../../context/ModalContext';

const User = ({ user, api_key, isPlaying, live }) => {
    const { watchHistory } = useContext(ModalContext);
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
                        <div className='user__info'>
                            <LazyLoadImage
                                src={`http://ddragon.leagueoflegends.com/cdn/13.7.1/img/profileicon/${user.profileIconId}.png`}
                                alt={`${user.name} icon`}
                                effect="blur"
                                width={100}
                                height={100}
                            />
                            <div>
                                <h3>{user.name}</h3>
                                <small>Nivel {user.summonerLevel}</small>
                                {isPlaying
                                    && <>{live === undefined && <Link className='user__info-watch' to={`/user/${user.name}/live`}>Ver partida actual</Link>}</>}
                                {live === 'live' && <Link className='user__info-watch' to={`/user/${user.name}`}>Ver historial</Link>}

                            </div>
                        </div>
                        <div className="user__leagues">
                            {userLeagues.map((league, i) => (
                                league.queueType === "RANKED_SOLO_5x5"
                                    ? <UserLeague key={i} league={league} text={"SoloQ"} route={live === undefined ? '../img' : live === 'live' && '../../img'} />
                                    : <UserLeague key={i} league={league} text={"Flex"} route={live === undefined ? '../img' : live === 'live' && '../../img'}  />
                            ))}
                        </div>
                    </div>
            }
        </>
    )
}

export default User