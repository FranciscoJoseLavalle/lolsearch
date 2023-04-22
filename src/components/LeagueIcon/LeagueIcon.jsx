import './LeagueIcon.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LeagueIcon = ({ league, route }) => {
    switch (league) {
        case 'IRON':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
                    alt={`${league} icon`
                    }
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
        case 'DIAMOND':
            return (
                <LazyLoadImage
                    className='leagueicon'
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
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
                    src={`${route}/emblem-${league.toLowerCase()}.png`}
                    alt={`${league} icon`}
                    effect="blur"
                    width={30}
                    height={30}
                />
            )
    }
}

export default LeagueIcon