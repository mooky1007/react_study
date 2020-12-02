import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location:{state:{year,title,summary,poster,genres}}} = this.props;
        if(this.props.location.state){
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
                <p>{summary}</p>
            </div>
            )
        }else{
            return null;
        }
    }
}

export default Detail;