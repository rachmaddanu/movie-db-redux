import { Text, View, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions'; //manggil lbh dr 1 return

class ListItem extends Component {
    pressed() {                
        this.props.selectMovie(this.props.hasil.id); //dispatch
        console.log(this.props.idx, this.props.hasil.id);
    }
    
    renderLogic() {
        if (this.props.idx === this.props.hasil.id) {
            return (
                <Text style={styles.fontDetail}>{this.props.hasil.overview}</Text> 
            );
        }
    }

    render() {
        console.log(this.props.hasil);
        // console.log(toString(this.props.hasil));
        return (
            <TouchableHighlight onPress={this.pressed.bind(this)}>
            <View>
                <View style={styles.titlebg}>              
                    <Text style={styles.titleStyle}>{this.props.hasil.original_title}</Text>             
                </View>
                <View style={styles.detailbg}>
                    {this.renderLogic()} 
                </View>
            </View>
            </TouchableHighlight>
        );
    }
}
   
const styles = {
    titleStyle: {
        padding: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    },
    titlebg: {
        backgroundColor: 'green',
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#ddd'
    },
    detailbg: {
        backgroundColor: 'gray',
    },
    fontDetail: {
        padding: 5,
        fontSize: 15
    }
};

const mapStateToProps = (state) => {
    return { data: state.Libraries, idx: state.selected };
};
   
export default connect(mapStateToProps, actions)(ListItem);