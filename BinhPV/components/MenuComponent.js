import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {
    constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <FlatList data={this.state.dishes}
        renderItem={({ item, index }) => this.renderMenuItem(item, index)}
        keyExtractor={(item) => item.id.toString()} />
    );
  }
  renderMenuItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
    <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
        <Avatar source={item.image} />
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
    );
  }
  onDishSelect(item) {
    this.setState({ selectedDish: item });
  }
}
export default Menu;