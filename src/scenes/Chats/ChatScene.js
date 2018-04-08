//@flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types'

type Props = {
	+navigation: any,
}

class ChatScene extends Component<Props, void> {
	render() {
		return <Text>No hay chats que mostrar</Text>
	}
}

ChatScene.navigationOptions = {
	title: 'Chats'
};

ChatScene.propTypes  = {
	navigation: PropTypes.object.isRequired,
};

export default ChatScene;
