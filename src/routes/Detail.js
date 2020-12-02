import React from 'react';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location:{state}} = this.props;
        if(this.props.location.state){
            return(
                <div className="movie">
                <img src={state.poster} alt={state.title}/>
                <ul>
                    {state.genres.map((genre,idx) => {
                        return (
                        <li key={idx}>{genre}</li>
                        )
                    })
                    }
                </ul>
                <h4>{state.title} ({state.year})</h4>
                <p>{state.summary}</p>
            </div>
            )
        }else{
            return null;
        }
    }
}

export default Detail;