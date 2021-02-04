import React, { Component } from "react";
import axios from "axios";
import CardBook from "./card.jsx";
import NavBar from "./Navbar";
import "./css/card.css";
class Fetch extends Component {
  state = {
    users: [], //contain user informations
    books: [], //books and other field
  };
  fetch = async () => {
    try {
      const response = await axios.get(
        "https://mybestbook.herokuapp.com/allbooks"
      );
      console.log(response.data);
      this.setState({ books: response.data });
      console.log(this.state.books);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.fetch}
          className="btn btn-success m-2"
        >
          Get Books
        </button>
        <div className="row">
          {this.state.books.map((book) => (
            <div className="col-md-4 m-20">
              <div className="book">
                <div className="card">
                  <img
                    className="card-img"
                    src={book.Book_image}
                    alt="Card image cap"
                    height={250}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.Book_Name}</h5>
                    <a href="#" className="btn btn-primary">
                      Book Description
                    </a>
                    <a className="btn btn-primary">Read the book</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Fetch;
