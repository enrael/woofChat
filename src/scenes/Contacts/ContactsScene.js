//@flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types'

type Props = {
	+navigation: any,
}

class ContactsScene extends Component<Props, void> {
	render() {
		return <Text>No hay contactos que mostrar</Text>
	}
}

ContactsScene.navigationOptions = {
	title: 'Contactos'
};

ContactsScene.propTypes  = {
	navigation: PropTypes.object.isRequired,
};

export default ContactsScene;
