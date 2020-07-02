import React from 'react';
import "./SortingVisualizer.css"

class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            length: Math.floor(window.innerWidth/4.5)
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.length; i++) {
            array.push(randomRange(5, 800));
        }
        this.setState({array})
    }

    render() {
        const {array} = this.state;

        return (
            <>
                <div className="container">
                    {array.map((value, idx) => (
                        <div className="bar" style={{height: value}}> 
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default SortingVisualizer;

function randomRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}