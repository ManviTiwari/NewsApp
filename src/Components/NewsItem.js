import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
         <div className="card crd" >
            <img src={imageUrl ? imageUrl:"https://www.bollyinside.com/wp-content/uploads/2021/12/Elon-Musk-rejects-mounting-criticism-that-his-satellites-are-obstructing.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem