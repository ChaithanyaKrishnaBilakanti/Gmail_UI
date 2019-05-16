import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import {View, Text, TextInput, Alert } from 'react-native';
import {Header, Body, Left, Icon, Right, List, ListItem } from 'native-base';
import Toast, {Duration} from 'react-native-easy-toast';

class ComposeMail extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            receiverId: '',
            subject: '',
        }
        this.callBack = this.callBack.bind(this);
        this.sendingMail = this. sendingMail.bind(this);
    }

    callBack()
    {
        this.refs.toast.show('Saving in drafts', 300,()=>{
            this.props.navigation.goBack();
        });
    }

    sendingMail()
    {
        this.refs.toast.show('Sending Mail',500,()=>{
            this.props.navigation.navigate('Home',{sent:'sent'});
        });

        //this.props.navigation.navigate('Home',{sent:'sent'});
    }

    render()
    {
        return(
            <View style={{backgroundColor: 'white', flex:1}}>
                <Header androidStatusBarColor= '#f4511ef0' style={{backgroundColor: '#f4511e', justifyContent: 'center'}}>
                    <Left style={{flexDirection: 'row', position: 'absolute', left: 10, justifyContent: 'center'}}>
                        <Icon name='arrow-back' style={{color: 'white'}} 
                        onPress={()=>this.callBack()} />
                        <Text style={{fontSize: 22, color: 'white', marginLeft: 30}}>Compose</Text>
                    </Left>
                    <Right style={{flexDirection: 'row' ,justifyContent: 'center', position: 'absolute', right: 15}}>
                        <Icon name='attachment' type="MaterialCommunityIcons" style={{marginRight:25, color: 'white', fontSize: 22,}} />
                        <Icon name='md-send' onPress={()=>this.sendingMail()}
                         type="Ionicons" style={{marginRight:15,color: 'white', fontSize: 22,}} />
                        <Icon name='dots-vertical' type="MaterialCommunityIcons" style={{color: 'white', fontSize: 22}} />
                    </Right>
                </Header>

                <View>
                    <List>
                        <ListItem style={{ marginLeft: 0, paddingRight: 0}}>
                            <View style={{flexDirection: 'row', marginLeft: 0, flex: 1, paddingRight: 0, paddingVertical: 0.5}}>
                                <View style={{flexDirection: 'row', marginLeft: 0, flex: 8, alignItems:'center'}}>
                                    <Text style={{color: 'grey', marginLeft: 15}}>From</Text>
                                    <Text style={{marginLeft: 25}} numberOfLines={1} >chaithanya.krishna@riktamtech.com</Text>
                                </View>
                                <View style={{flex: 2, alignItems: 'center'}}>
                                    <Icon style={{color: 'grey'}} name='keyboard-arrow-down' type='MaterialIcons'  />
                                </View>
                            </View>
                        </ListItem>
                        <ListItem style={{ marginLeft: 0, paddingRight: 0}}>
                            <View style={{flexDirection: 'row', marginLeft: 0, flex: 1, paddingRight: 0, paddingVertical: 0.5}}>
                                <View style={{flexDirection: 'row', marginLeft: 0, flex: 8, alignItems:'center'}}>
                                    <Text style={{color: 'grey', marginLeft: 15}}>To</Text>
                                    <TextInput 
                                    style={{marginLeft: 25, marginVertical: 0, paddingVertical: 0 }} numberOfLines={1} 
                                    onChangeText={(receiverId)=>this.setState({receiverId}) }/>
                                </View>
                                <View style={{flex: 2, alignItems: 'center'}}>
                                    <Icon style={{color: 'grey'}} name='keyboard-arrow-down' type='MaterialIcons'  />
                                </View>
                            </View>
                        </ListItem>
                        <ListItem style={{ marginLeft: 0, paddingRight: 0}}>
                            <View style={{flexDirection: 'row', marginLeft: 0, flex: 1, paddingRight: 0, paddingVertical: 0.5}}>
                                <View style={{flexDirection: 'row', marginLeft: 0, flex: 8, alignItems:'center'}}>
                                    <TextInput
                                    multiline={true} 
                                    placeholder='Subject'
                                    style={{marginLeft: 15, marginVertical: 0, paddingVertical: 0 }} numberOfLines={1} 
                                    onChangeText={(subject)=>this.setState({subject}) }/>
                                </View>
                            </View>
                        </ListItem>
                        <ListItem style={{ marginLeft: 0, paddingRight: 0, borderBottomWidth: 0}}>
                            <View style={{flexDirection: 'row', marginLeft: 0, flex: 1, paddingRight: 0, paddingVertical: 0.5}}>
                                <View style={{flexDirection: 'row', marginLeft: 0, flex: 8, alignItems:'center'}}>
                                    <TextInput 
                                    multiline={true}
                                    placeholder='Compose email'
                                    style={{marginLeft: 15, marginVertical: 0, paddingVertical: 0 }} numberOfLines={1} 
                                    onChangeText={(subject)=>this.setState({subject}) }/>
                                </View>
                            </View>
                        </ListItem>
                    </List>
                </View>

                <Toast ref="toast" />
            </View>
        );
    }
}

export default ComposeMail;