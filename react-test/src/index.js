import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Include global styles
import './styles/style.less';

// Get DOM element to put UI inside
const root = document.querySelector('#root');

// Prepare method to build UI from not cached file
const buildUI = () => <AppContainer component={ require('./ui/index.js').default } />;

// Prepare method to render UI
const renderUI = () => render(buildUI(), root);

// Render UI for first time
renderUI();

// Update UI after change
if (module.hot) {
    module.hot.accept('./ui/index.js', renderUI);
}
