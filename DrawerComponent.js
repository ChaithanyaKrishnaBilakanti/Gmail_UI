import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Body, Left, Icon, Right, ListItem, SwipeRow, Content, Thumbnail, List} from 'native-base';

class DrawerComponent extends Component
{
    render()
    {
        return(
            <ScrollView style={{backgroundColor: 'white', flex:1}}>
            
                <View style={{height: 150, backgroundColor: 'green'}}>
                    <View style={{justifyContent: 'center', marginTop: 15, marginLeft: 15}}>
                        <Thumbnail style={{width: 60, height: 60, borderRadius: 30}} medium source={{uri:'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-1/p160x160/12974288_778567028944058_3789342080626989711_n.jpg?_nc_cat=107&_nc_ht=scontent.fhyd2-1.fna&oh=3f37442336190cb419073f1eb3b9fc1b&oe=5C77E0D9'}} />
                    </View>
                    <View style={{marginLeft: 15, position: 'absolute', bottom: 18}}>
                        <Text style={{color: 'white', fontSize: 15}}>Chaithanya Krishna</Text>
                        <Text style={{color: '#e6e6fa'}}>chaithanya.krishna@riktamtech.com</Text>
                    </View>
                </View>

                <View style={{}}>
                    

                    <List>
                        <ListItem style={{ marginLeft: 0}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft: 15}}>All  inboxes</Text>
                            </View>
                        </ListItem>
                        <ListItem style={{ marginLeft: 0}}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft: 15}}>Inbox</Text>
                            </View>
                        </ListItem>

                        <ListItem style={{ marginLeft: 0, flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Text style={{ marginLeft: 10,fontSize: 12 }}>All labels</Text>
                            <List>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAADb29vx8fH4+PimpqY0NDRhYWH7+/vp6ekkJCTX19e9vb3AwMBra2urq6s5OTnh4eEWFhaKiorIyMhHR0dYWFhPT0+goKCxsbEbGxsODg6CgoJ3d3e3t7eUlJQanjZNAAADEUlEQVRoge2a2XKDMAxFa5awZYNANpr0//+yZDdYjm2kyJ0p9z2cQbmSJZmvr0mTJk2a9DeUeWSf/KEDEXhj78XeG7sRjS902QpRemLHQojYE3vWsWd+0Jm4yE+Kx1e2n6DvruydD3Qobgo9sPd3to/ysr2zt/zoTDzE7/T4yeZ3evJkJ9zoV8j5g76S2Ctm9k5iM5eXspLYFe9BehCyDqzsXY/NGvSs7bFbTqevRF+cTt8N2IxBD8VQfAfpQWHzOT1R2Gw1PVLQQkRM7KHLOZ2+BNhLHrTqcj6nn0H2mYUNhZwp6FkFsiuOmg6HnCfoWw17fJ+eFoGd6lzDzmvLJxTpkH2G/0Z6Vechu0tb2L/UWsKFQOciSmkdGep8RKXkXfWLzb9HyDC5Bc3HyI1xCRltPoTe2Bzx9fED5GNtQb68+okcfVJzWqc5LbldWJM7hWo7OF5vMwtS3JofaqV2xE6EKNvMmQWKItt+RpE7FdhsOxZj0d3Jiss25FXOXNcqmJU7ZRakbOyxvqRoHqERyCyiIalcO5PXdKunH0f06MyCVLi8+hqRWZCib2u01UHtJtsS+4G9T2r93vRs+wZ6Ts62P9DJp2F42QCL2msuxY162ebSQxEv2zIzURLtCsJtVqJdtg0Xx+9FelVYOqFpv0TYm3E9UV4VurbLhJ9/BI5o0dJ9c6MNuXZ2obsU1/WqsTb3yD7/KODnry+BDTQNDVXrAndr37eROoUbGqqODdr65a9TGhwfcho05PKtXLIzaDVG43Qg5MPaAViOJOipMowCjb86PpAEXXH5BtrbpMqwTuH0gY+10+ViYLkNHh3Oek9M9H1B1u9t1vibo37I39fKfu3FB13ePMxM53IpBwn9Aakccpt/ULLcDBv0+mUyu42odJ9iuULV6rnxsF4OvlaSyAElfLyFSxf0qHI5LuiL+1/nVp2Du0lwi6ZkZJm4WQ41oFxv+G3X7j3dLgAwU+HlowrNhZZJ1+s2zFSYYOabFSro0dgN9E1Bgwh6jC2Lp/EDCn6W9fWJ+KRJkyb9O/0Cfiwfv56DLWkAAAAASUVORK5CYII='}}
                                        />
                                        <Text style={{marginLeft: 15}}>Starred</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9dIf-rbFq_W5iE4Y9zilucDICXd8N4In9Y6J63sxekypcLe5'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Important</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAY1BMVEX///8AAAAqKiqlpaXq6urz8/P29vbu7u78/Pze3t7b29v5+fnn5+ezs7PIyMh+fn5MTEy8vLwhISHQ0NCIiIgzMzNBQUGSkpJiYmIcHBw8PDxubm7CwsJUVFR4eHicnJwPDw8bJHzxAAAEAElEQVRoge1a2bKiMBA1hE0BEWRxQeH/v3KYMe3FdJAkJLk1VZw3FHK06fTpJbvdhg0b7KDd/xZzTy7n32HeE0JO3a9QeyM1aYrQPXNL/uFGA9fMZ8JQtq65PfJGHjllzskE94ND5jP5wOPojDmqP6lHR48dUd8Jj1vmxtk6xExI3btwNn8QUJOhcsB9ETGPeKa2mTPGVKE3bltNIthQuzTnuRu7asLMPYxv1q+uvLNliT3mnpFkfy+int/gNbXmbCmjuL8ug+zGcXutb4kamOA6Lhr+hed2HJ2JNJnE7OOD537aSNlANarphwe0yWyoCaz9+WlU8dx1ZpoZKHh5jnqP4y4zsykbqEaLvgkocvTepKPHbNVGIM0JcvSyMujooBriJbsTcnRj3KAa/cz3ZyRod0NqAiJ9mb0Dq4mh2gTs+cV7gpbnLk1sMjD317VCyqvJdX1tsidL5n5xZ8jR27XOxsxdLm3WuOMj+pCvi+jwEiXcRuDoa2qTAywidfOT577oq0nIzF3LxWUfqUlT6FLDfpX98UmPEnWqVxeBSOfSTyRITQYtNQmYIHoKzyQF7+jXSsPRwdxKATlGadNwV+YGkZ5TjTmcV9cmCXuuVGQeAyBSk4eamsBv1wiHWE2UUjZQDarOPIKWPDmVTtnA3Cct5t2uQKmLtJrAk6mvhSjNeBUdcrmITsHHPE3c+CT5r6PLcO/xcyZwOS5HVeQkhnBaVJN+eRFdLGwyVECawpKExstLaGE5mhZWeJ8Szg3ht6d6yCh6XVe5ZgO7e5C5V4SMJy4lGyzC1oE0ElRry5cBkNTp1EurSp8Ygq467x5lwUo9FYidUhn3FKszf7CXWt4c47JetXcWM8ccVKrDEGmyRivDhzck/4iofaPRIwVxlnbJoOX7wpotK+g1S2bLuLCqNQurlFVJckkYbk3q9/9BLWQST7PtWNiTizsRd+aGak1XMGJB97SQMpnvRh7ZOt/VQjRqWNscgsD7zdhRxdfqtYEZJjP2bf4f4LLNSBMQjD3bMDDcD/oBqMXMpuzwRMVUkxtSfFH0C1G1VLbGJljQDHviryxPzmbVwm/55OpmdpAB0YHbI4IJqXa7TYyQrfvZ6HUxsAJjT9XCzZAO/tyP52SoBK9snHoAY9fsOqA8r9fbOW0B0vxqwfmoVmisnfKYqkWKhu5NYW3oHrAA5olqBavH1qCQaw9IFSwfroBwgdozlubsb4RIh5gJrJ/QO4ho1yc5EkCF7+hWhsfbM0Cl4Klzc0CMN/aKwZMi6Aevy4OAU2O7OBP2RvpOoYfe4tEkAWCC0Ng8EiXEK2A+Ote8r9GFwzOePyjMHZJQxN3KCSgZuD1DvGHDhg0bNvwP+ANDQTBQB91BTgAAAABJRU5ErkJggg=='}}
                                        />
                                        <Text style={{marginLeft: 15}}>Sent</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'https://www.gstatic.com/images/icons/material/system/1x/outbox_black_20dp.png'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Outbox</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'https://www.gstatic.com/images/icons/material/system/1x/drafts_black_20dp.png'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Drafts</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'https://www.gstatic.com/images/icons/material/system/1x/mail_black_20dp.png'}}
                                        />
                                        <Text style={{marginLeft: 15}}>All mail</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu8SSxNntCeviAzMCx9c3ENs0t0LZiAShlg_QlOc_g32Dq-6xFw'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Spam</Text>
                                    </View>
                                </ListItem> 
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8BAQMAAAAhISEfHyDo6OgoKCjc3N1UVFRubm/39/daWlrt7e5ZWVrZ2dm4uLjT09NiYmJERETi4uN1dXVnZ2eNjY1MTEywsLCmpqaZmZoYGBr5+fm7u7wbGxs2NjYwMDIRERPLy8xFRUaSkpKFhYU1NTd7e3xA79nrAAAEwklEQVR4nO3d63aiMBQF4Hq0RfGKovVWL3Ss7/+GA+I4BkmAEJKQ7v37rJJvAeFi6Hl7azLeeng6U4cfOp+G60WjY2gykyUlEQBjYpLlxPRQ5bIq0j0pV6YHKxG/X9KXGsemx1s94/K+m3FoesBVc60GjIlX00OullmFQ/QupJnpQVdKvyowJrbqVPQq78JkJ3qmh10hl+rAmHgxPewKmUsJP00P+xHf90fCeB0p4Xkh/rMj39eAm22DIxVHAni/gxPnGGxnTTKj8FwDUD/pxs9hU9eVdc+c7TnxKHrrBnzRyQpeGqLTl2LfKLBj/z1CFIxUAqOuVbwk8aEaqQNu7Np/9xBtVAG3VgIT4tZtoDLi2lpgQlRw2ZhYDEyItV9i7Xs2A2Pibl9TKPUcpDN1n7lkHmX1pu5xGtgOrPuWrvoLJf2p9wprYD8wJi7lgaMW7MJkJ75LCzdtAMZE+ftTibeeJkJ9WaDfioM0OUxlX920YSZNIj+brtsBjImy99+r1ghlf2ANWyMMJYXLEq9o7chAUjg8dNuRg+ytqd+eSAoRBEEQxRm9WxbVwP3O9H1LJl3VwreeaVImHw0ITd9fM4EQQgjNB0IIITQfCCGE0HwghBBC89EsTJ+6Sw1MVaVWIVFvubrOSwycqBuswhKVyVuK+G9+8406hbT7ui2eWyyLRk6H6a3SK67cTW8bXQx4lfqEz7/dfYkHTsFjGeFUWElPa4AiTqVG4fypZioc9+fTOknhEgHmAyjO39QmJGI+NRcs9JOuXOZvWJuQXVMWCcYdZCr5Mxf7i27+mhd9wsynK/x/L1Chkl07st+ZFWaWr35yZ9zsqp5vvjDzpUjux4y6hC9ftnKXa75UDvnCzI8uuavrIIRQg5D/PxdcEbq/DyGEEEIImxfiagEhhBBCCCGEEEIIIYQQQgjh7xDiCRhCCCGEEEIIf8P10H2h+0cphBDaL8RMAyGEEEIIIYQQQtgGIe7aIITQvBDnIYQQQgghhBDiemhCmNt5DUIIrRK6fx5CCOHvux66L3T/KIUQQvuFmGkghBBCCOsL3Z9L7RO6/4wPYfuFmEshtH8uxT6EEEIIIYQQQgghhNBFoft33u4L3T9KIdQvdP9NFITtF7p/HkIIIYQQQgghhJx7mpeeXbn9tVLhrGTlS8+u3O5e+oRTtiq3R1pamem71uFXbphC033XBkyRqHce22UvvyNeWsl22Zvkb9hQ/8PcU+ZfJXMi8k/DbKXh/odsD0txZ8r+U6WwTSfT7ZJTqe08TI4+/z9QJIyPvkeluA9ph8aFHUs1CjvUTecQft/XR+XpXhkWVn4Y6CX7wZ8Z6Dy8Do6l+gHfKwtL48qxsJJOyoU/ohOnbKdmUlbJnP9qIpgmTYTGyoWhZcKVcqGwm7H+ZG+mFOS9XEt0TSHyi4dcNdxGuCbC3D6oyh+rhNsGhAuLDtPM7bCqWDSbUtgEMJlrLDESjRoRvl2sEaq/GKbxT3YI6aeBS0Uaz4qd2NA0kyaygPjyTkttNsaJROsmgeb3InWi4kHWi3cwaCTqNXgO/sv+Yuq6GG93tS8eoIIkb0+0I5NNDjTswHu87bH0+wg1OKL5Vp/vlsVmcDyctQjPh3m4keb9Bb0+qMW60BsXAAAAAElFTkSuQmCC'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Spam</Text>
                                    </View>
                                </ListItem>                                
                            </List>
                        </ListItem>

                        <ListItem style={{ marginLeft: 0, flexDirection: 'column', alignItems: 'flex-start'}}>
                            <Text style={{ marginLeft: 10,fontSize: 12 }}>Google apps</Text>
                            <List>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAbFBMVEX///8AAADr6+t9fX3w8PCLi4vl5eWjo6Pf39+QkJBGRkatra1VVVX19fXW1tbFxcVcXFwtLS28vLyDg4PZ2dnHx8cQEBCxsbHPz8/5+flOTk4WFhZwcHCfn59mZmZCQkIdHR0zMzM6Ojpubm6FoAtSAAADrElEQVR4nO3da1faQBCAYRaw3OWiFFC02v7//1hROM2uQzITEmbpeZ+PpUz3FUlCkh46HQAAAAAAOt31anK0WQ8bGTmcb04jV9tuIyNrWf8JicXmwpGbaTpyv21krVar53Qhn14uGPkiTnxbNbZmrdmTuJIPz481Rz7+PDfyadbo2ivdn1vIwaTWyEnZyPuG119qXbaSEO5qjLwrH7luvOGs0lfuYGQeKb/lCq62cZlVrSSEuXHktnpkv5WW785uUAqM2wHFxPd2YlIrxVLCq2lkTzOy3sbKSt7PpSwHLl3VxNBaUcFct5SeYWTF9vLkGnv1V91SLD9p5cRpa03mpRh2wI/akS1WHQ2//USP3pM/H6hHpkcpy9PI9NCs7jGeXrLFLHwoSF4C/Rsv2WIWXvRN/Ej7b7xB9O89FB+KtzcL9chF9LzoQOAheuiSzx86o3M/507ylhyrR46j50UPxccw9gM8q7gu3qs1Xxe/y6m7DHXUFVBHXQOoo67Ar647nwwi8UFhSd0yeeJZk6W2bpE8cX3RmaTZ6Ozp4eq6ukrqvlvqP2elRhWjM6gL0Wcwg91vxVIyqKt1QmJX9Uv5KYe68LYz1y2rp4ZM6sLSGrfXLSWPurC3xVVeBznKpM54DUWzRTnIpc50kUF9hjGXOtPlS+Wp74zqopNzFd61Q7Ops2w21UvJps5wFr6vnplPnf6AWnk9LeRUp78ribov1BlRJ6COuqL/uy66UKq4w0ohuktJeftIaKfuV/Fp6mPvUtENguPqv3/URl14uu8fDVW3Qyn0hqeRW80daUet1GWDOuryRB11eaKOujxRR12eqKMuT9RJdfvujxx1943UWf5HzzX1qBNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+qJNQ5486CXX+mqmzfP30NT00Ujce3eVoNK5Z18wXSF7XTv+iey+1Bn1cx/B9j5mYGupevBdrNjDU6b++PRez6qh/9tXzsmLbJ9/aVtOwxTxYea/XZGWLa+prha/jrjrndvNqHQjfyi+nZWdQMLuFLef0R724D/3B1Hv1pcaj+m1fdv1cGXcDAAAAAICb9RfKaFUlj09E2QAAAABJRU5ErkJggg=='}}
                                        />
                                        <Text style={{marginLeft: 15}}>Calendar</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf12MctWe9MsxyDYjBUFiwsvLxpXsBKAq6eiXICK0ApXzDXJ8QtA'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Contacts</Text>
                                    </View>
                                </ListItem>
                                
                            </List>
                        </ListItem>
                        <ListItem style={{ marginLeft: 0, flexDirection: 'column', alignItems: 'flex-start'}}>
                            <List>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'data:image/jpeg;base64,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'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Settings</Text>
                                    </View>
                                </ListItem>
                                <ListItem style={{ marginLeft: 0, borderBottomWidth: 0, paddingBottom:5}}>
                                    <View style={{flexDirection: 'row', marginLeft: 15}}>
                                        <Thumbnail
                                        style ={{height: 20, width:20}} 
                                        source={{uri:'data:image/jpeg;base64,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'}}
                                        />
                                        <Text style={{marginLeft: 15}}>Help & feedback</Text>
                                    </View>
                                </ListItem>
                                
                            </List>
                        </ListItem>

                    </List>
                </View>

            </ScrollView>
        );
    }
}

export default DrawerComponent;