import React, { Component } from "react";

class CardBook extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            className="card-img"
            src={this.props.book.Book_image}
            alt="Card image cap"
            height={200}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.book.Book_Name}</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBook;
