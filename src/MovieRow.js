import React, { Component } from 'react'


 class MovieRow extends Component {
     constructor(props){
         super(props)
     }
    render() {
        return (
            <div className="movierow">
                <table key={this.props.movie.id}>
                    <tbody>
                    <tr>
                        <td>
                        <img alt="poster" width="400" src={this.props.movie.poster_src}/>
                        </td>
                        <td style={{width:"400px"}}>
                         {this.props.movie.title}
                        <p>{this.props.movie.overview}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MovieRow 