import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import PersistedStore from "./PersistedStore";
import App from './App.js';

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient('https://aware-grouse-298.convex.cloud');

ReactDom.render(
    <ConvexProvider client={convex}>
        <Provider store={PersistedStore.getDefaultStore().store}>
            <App />
        </Provider>
    </ConvexProvider>, 
    document.getElementById('root')
);
