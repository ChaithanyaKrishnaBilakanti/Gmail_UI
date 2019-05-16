import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Header, Body, Left, Icon, Right, ListItem, SwipeRow, Content, Button, Thumbnail} from 'native-base';

class InboxRow extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            starType: 'EvilIcons',
            starColor: 'grey',
        }
        this.changeStar = this.changeStar.bind(this);
    }

    changeStar()
    {
        if(this.state.starColor == 'grey')
        this.setState({starColor:'gold',starType:'Entypo'});
        else
        this.setState({starColor:'grey',starType:'EvilIcons'});
    }

    render()
    {
        return(
            <SwipeRow
            style={{marginRight: 0, paddingRight: 0 }}
            right={-300}
                right={
                    <Button success onPress={()=>this.editStudent(item.id,item.name)}>
                        <Thumbnail sqare small source={{uri: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/write-128.png'}} />
                    </Button>
                }

                body=
                {
                <View style={{flexDirection: "row", flex: 1}} >

                    <View style={{flex: 2, alignItems: 'center'}}>
                    <View 
                    style={{ backgroundColor: this.props.tintColor,marginTop: 5, borderRadius: 20, width: 40, height: 40, justifyContent: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 30, color: 'white'}}>{this.props.ic}</Text>
                    </View>
                    </View>

                    <View style={{flex:8}}>

                    <View style={{flexDirection: 'row', height: 20}}>
                        <Text style={{ flex: 8, paddingLeft: 5}}>{this.props.sender}</Text>
                        <Text style={{ flex: 2}}>{this.props.dt}</Text>
                    </View>

                    <View style={{flexDirection: 'row', height: 40}}>
                        <View style={{ flex: 8, paddingLeft: 5}}>
                            <Text style={{color: 'grey'}}>{this.props.sub}</Text>
                            <Text numberOfLines={1} style={{color: 'grey'}}>{this.props.content}</Text>
                        </View>
                        <View style={{ flex: 1}}>
                        <Icon name='star' type={this.state.starType} 
                        style={{position:'absolute', bottom: 5, color: this.state.starColor}} 
                        onPress={()=>this.changeStar()}/>
                        </View>
                    </View>

                    </View>

                </View>
                }
            />
        );
    }
}

export default InboxRow;