import React, { Component } from 'react';
import './App.css';
import MovieRow from "./MovieRow"
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }

     const movies = [
      {id:0 , poster_src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/l3JgqdqILmpSq5VFZA69mP6bmME.jpg", title:"movie1", overview:"movie1Overview"},
      {id:1 , poster_src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/4iOIdI4AYGPFCpsWNLRqtPj9KPM.jpg", title:"movie2", overview:"movie2Overview"},
    ]

    
    let movieRows = []
    movies.forEach((movie)=>{
    console.log(movie.title);
    const movieRow = <MovieRow movie={movie}/>
    movieRows.push(movieRow)
    })

    this.state ={rows:movieRows} 

    this.performSearch()
  }

  performSearch(whatYouSearch){
    const urlString = "https://api.themoviedb.org/3/search/movie?query=marvel&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+whatYouSearch
      $.ajax({
        url:urlString,
        success:(searchResult)=>{
          const result=searchResult.results
          let movieRows= []

           result.forEach((movie)=>{
             movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
             console.log(movie.title)
             const mRow = <MovieRow movie = {movie}/>
             movieRows.push(mRow)
           })

           this.setState({
             rows:movieRows
           })

          console.log("fetch is successed")
        },
        error: (xhr,status,err)=>{
          console.error("Failed to fetch data")
        }

      })

      
  }

  ChangeHandler (event){
    var whatYouSearch=event.target.value
    var boundObject = this
    boundObject.performSearch(whatYouSearch)
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <h1 >MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="input-search" onChange={this.ChangeHandler.bind(this)} placeholder="Enter Your Search"></input>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
