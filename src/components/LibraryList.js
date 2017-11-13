import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import ListItem from './ListItem';
import * as actions from './../actions';


class LibraryList extends Component {
  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4b4a1310f1f32db76ad377720216c66e&language=en-US&page=1')
    .then((hasil) => this.props.libraryMovie(hasil.data.results));//dispatch, hasil -> action -> reducer
  }

  getDataSource() {
    if (this.props.movies.length > 0) {
      // console.log(this.props.movies);
      const ds = new ListView.DataSource({ 
        rowHasChanged: () => (r1, r2) => r1 !== r2 } //fungsi didalemnya rowhaschange, ketika row1 (sblm) tidak sama row2 (sesudah) berubah susunannya
      ); //local scope, buat datasource

      this.sumberData = ds.cloneWithRows(this.props.movies); //clonewithRows: convert data ke datasource

      return (
        <ListView 
          dataSource={this.sumberData}
          renderRow={(library) => <ListItem key={library.id} hasil={library} />} //mau ditampilin seperti apa
        />
      );
    }
  }

 render() {
      return (
        <View>
        { this.getDataSource() }
        </View>
      );
    }
 }

const mapStateToProps = (state) => {
  return { movies: state.Libraries };
};

export default connect(mapStateToProps, actions)(LibraryList);