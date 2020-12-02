import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

function Movies({id, year, title, summary, poster, genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title}/>
            <ul>
                {genres.map((genre,idx) => {
                    return (
                    <li key={idx}>{genre}</li>
                    )
                })
                }
            </ul>
            <h4>{title} ({year})</h4>
            <p>{summary.length < 60 ? summary.slice(0,60) : `${summary.slice(0,60)}...`}</p>
        </div>
    )
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(propTypes.string).isRequired
}

export default Movies