import React from 'react';
import ReactDOM from 'react-dom';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

class App extends React.Component {
    render() {
        return (
            <SortingVisualizer></SortingVisualizer>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)