import './LeagueIcon.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LeagueIcon = ({ league }) => {
    switch (league) {
        case 'IRON':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-iron.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'BRONZE':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-bronze.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'SILVER':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-silver.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'GOLD':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-gold.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'PLATINUM':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-platinum.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'DIAMOND':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-diamond.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'MASTER':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-master.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'GRANDMASTER':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-grandmaster.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'CHALLENGER':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src='./img/emblem-challenger.png'
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
    }
}

export default LeagueIcon