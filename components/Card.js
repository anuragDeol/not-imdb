import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.item.Poster}`} className="poster"/>
            <div className="card--content">
                <div className="card--content--header">
                {
                    props.item.imdbRating>9 
                    ? 
                    <React.Fragment>
                        <i className="fa-solid fa-star"  style={{color:'rgb(228,199,103)'}}></i>  <small>{props.item.imdbRating}</small>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <i className="fa-solid fa-star"></i>  <small>{props.item.imdbRating}</small>
                    </React.Fragment>
                }
                </div>
                <div className="card--content--main">
                    <h1 className="title">{props.item.Title}</h1>
                    <small className="release-date">{props.item.Released}</small>
                    <p className="director">Director: <b>{props.item.Director}</b></p>
                    <p className="movie-plot">{props.item.Plot}</p>
                </div>
            </div>
        </div>
    )
}