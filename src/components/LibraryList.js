import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({ 
      rowHasChanged: () => (r1, r2) => r1 !== r2 } //fungsi didalemnya rowhaschange, ketika row1 (sblm) tidak sama row2 (sesudah) berubah susunannya
    ); //local scope, buat datasource

    this.sumberData = ds.cloneWithRows(this.props.data); //clonewithRows: convert data ke datasource
  }

 render() {
      return (
        <ListView 
          dataSource={this.sumberData}
          renderRow={(library) => <ListItem key={library.id} hasil={library} />} //mau ditampilin seperti apa
        />
      );
    }
 }

const mapStateToProps = (state) => {
 return { data: state.Libraries };
};

export default connect(mapStateToProps)(LibraryList);