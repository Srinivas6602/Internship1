import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SearchScreen from '../../src/components/Search';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

storiesOf('Search screen', module)
  .add('index', () => (
    <Provider store={store} >
      <SearchScreen />
    </Provider>
  ));

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
