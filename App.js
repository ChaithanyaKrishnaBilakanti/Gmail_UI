import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Modal, TouchableOpacity, TextInput} from 'react-native';
import {Header, Body, Left, Icon, Right, ListItem, SwipeRow, Content, Drawer, Button} from 'native-base';
import InboxRow from './InboxRow';
import { createStackNavigator } from 'react-navigation';

import DrawerComponent from './DrawerComponent';
import ComposeMail from './ComposeMail';
import Toast, {Duration} from 'react-native-easy-toast';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class Home extends Component<Props> {
  constructor(props)
  {
    super(props);
    this.state = {
      composeModalVisible: false,
      addModalVisible: false,
    }
  }

  componentWillMount()
  {
    console.log("\n\n\n\n\n\nWill Mount\n\n\n\n\n\n");
  }

  componentDidMount()
  {
    console.log("\n\n\n\n\n\nDid Mount\n\n\n\n\n\n\n");
  }

  componentWillReceiveProps()
  {
    this.refs.toast.show('Mail sent', 500);
  }

  render() 
  {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    
    openDrawer = () => {
      this.drawer._root.open()
    };

    return (
      <Drawer
        type='displace'
        panOpenMask={.5}
        ref={(ref) => { this.drawer = ref; }}
        content={<DrawerComponent />}
        onClose={() => closeDrawer()}>
      <View style={{flex: 1, flexDirection: 'column', }}>
        <Header androidStatusBarColor= '#f4511ef0' style={{backgroundColor: '#f4511e', justifyContent: 'center'}}>
          <Left style={{flexDirection: 'row', position: 'absolute', left: 10, justifyContent: 'center'}}>
            <Icon name='menu' onPress={()=>openDrawer()} style={{color: 'white'}} />
            <Text style={{fontSize: 22, color: 'white', marginLeft: 30}}>Inbox</Text>
          </Left>
          <Right style={{justifyContent: 'center', position: 'absolute', right: 15}}>
            <Icon name='search' style={{color: 'white', fontSize: 22}} />
          </Right>
        </Header>

        <ScrollView style={{flex: 1, flexDirection: 'column' }}>          
          <InboxRow tintColor='green' ic='T'
           sender='Jogi Naidu' sub='UTR'
           content="Trained on automation stuff" dt='May 08, 2019'/>
          <InboxRow tintColor='orange' ic='S'
           sender='Soil.com' sub='Ck is buying a home'
           content='CK invites you for the grand ceremony of tedithouse opening' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
           <InboxRow tintColor='violet' ic='F'
           sender='Flipkart.com' sub='Amazing offers'
           content='This diwali flipkart is offering various deals only for you' dt='29 Oct'/>
        </ScrollView>
        <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('ComposeMail')}
          style={{justifyContent: 'center' ,width: 60, height: 60, borderRadius: 30, backgroundColor: '#f4511e', position:'absolute', bottom: 15, right: 20}}>
          <Icon style={{color:'white', textAlign:'center'}} name='pencil' type='MaterialCommunityIcons' />
        </TouchableOpacity>

        <Toast ref='toast' />
      </View>
      </Drawer>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    DrawerScreen: DrawerComponent,
    ComposeMail: ComposeMail,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
)

export default class App extends Component
{
  render()
  {
    return(
      <RootStack />
    )
  }
}
