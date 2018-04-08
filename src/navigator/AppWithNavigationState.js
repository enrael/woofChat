//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener,	createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import Chats from '../scenes/Chats/ChatScene';
import Contacts from '../scenes/Contacts/ContactsScene';
import Settings from '../scenes/Settings/SettingsScene';

export const Navigator = TabNavigator(
	{
		Chats: { screen: Chats },
		Contacts: { screen: Contacts },
		Settings: { screen: Settings },
	},
	{

	}
);

export const navMiddlewere = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

class AppNavigator extends Component {
	render() {
		return (
			<Navigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
				addListener,
			})}/>
		)
	}
}

const mapStateToProps = (state) => ({
	nav: state.nav
});

export default AppWithNavigationState = connect(mapStateToProps)(AppNavigator);
