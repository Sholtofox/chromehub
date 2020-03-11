import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewsThunk } from "../store/News";



class News extends Component {
    componentDidMount() {
        this.props.getData()
    }
    

    render() {
        console.log('on  props', this.props.News.articles)
        const sources = [
          "NBC News",
          "The Wall Street Journal",
          "Bbc.com",
          "Fox News",
          "The New York Times",
          "Al Jazeera English",
          "Nypost.com"
        ];


        return (
            <div className="news">
              {this.props.News.articles ? (
                this.props.News.articles.map(article => {
                  if (sources.includes(article.source.name))
                    return (
                      <div id="singlenews">
                        <div id="titlePic">
                          <h1 className="newsSource">{article.source.name}</h1>
                          <img
                            src={article.urlToImage}
                            height="35%"
                            width="35%"
                            className="newsImg"
                          />
                        </div>
                        <p>{article.description}</p>
                        <a href={article.url} className="linkStyler">Link to Article</a>
                      </div>
                    );
                })
              ) : (
                <p>loading</p>
              )}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getData: () => {
        dispatch(getNewsThunk())
    }

})

const mapStateToProps = state => ({
    News: state.News
})

const NewsComp = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsComp


