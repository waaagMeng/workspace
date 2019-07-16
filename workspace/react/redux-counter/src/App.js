import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class Count extends React.Component {
  state = {}
  handleIn = () => {
      // store.dispatch({type: 'INCREMENT'})
      this.props.increment();
  }
  handleDE = () => {
      // store.dispatch({type: 'DECREMENT'})
      this.props.decrement();
  }
  handleAddFilm = () => {
      // store.dispatch({
      //     type:'ADD_FILM',
      //     film: {name:'123'}
      // })
      this.props.addFilm();
  }
  render() {
    console.log(this.props);
    const {count,films} = this.props;
      return (
          <div>
              {/* 多个reducer组合在一起 count就是一个对象了 所以.count */}
              count: {count}  
              <button onClick={this.handleIn}>+</button>
              <button onClick={this.handleDE}>-</button>
              <button onClick={this.handleAddFilm}>添加电影</button>
              {
                  //.map((film,i) => (<li></li>)) 要return
                  films.map((film,i) => {
                      return (
                          <li key={i}>{film.name}</li>
                      )
                  })
              }
          </div>
      )
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    films: state.films
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    foo: () => {console.log('foo')},
    increment: () => {
      dispatch({type: 'INCREMENT'})
    },
    decrement: () => {
      dispatch({type: 'DECREMENT'})
    },
    addFilm: () => {
      dispatch({
        type: 'ADD_FILM',
        film: {name: '123'}
    })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);
