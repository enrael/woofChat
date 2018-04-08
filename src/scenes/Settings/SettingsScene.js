//@flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types'

type Props = {
	+navigation: any,
}

class SettingsScene extends Component<Props, void> {
	render() {
		return <Text>No hay configuración que mostrar</Text>
	}
}

SettingsScene.navigationOptions = {
	title: 'Setting'
};

SettingsScene.propTypes  = {
	navigation: PropTypes.object.isRequired,
};

export default SettingsScene;