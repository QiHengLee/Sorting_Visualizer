import React from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "../SortingAlgorithm/mergeSort";
import { getBubbleSortAnimations } from "../SortingAlgorithm/bubbleSort";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      //   length: Math.floor(window.innerWidth / 4.2),
      length: 150,
      height: Math.floor(window.innerHeight) - 60,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    console.log(this.state.length);
    for (let i = 0; i < this.state.length; i++) {
      array.push(randomRange(5, this.state.height));
    }
    this.setState({ array });
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("bar");
        const isColorChange = i % 4 === 0 || i % 4 === 1;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 4 === 0 ? "red" : "green";
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        } else {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }, i);
    }
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "green";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i);
      }
    }
    console.log("done");
  }

  render() {
    const { array } = this.state;
    return (
      <>
        <div className="container">
          {array.map((value, idx) => (
            <div key={idx} className="bar" style={{ height: value }}></div>
          ))}
        </div>
        <button onClick={() => this.resetArray()}>Generate Array</button>
        <button onClick={() => this.mergeSort()}>MergeSort</button>
        <button onClick={() => this.bubbleSort()}>BubbleSort</button>
        <button onClick={() => this.resetArray()}>QuickSort</button>
        <button onClick={() => this.resetArray()}>HeapSort</button>
      </>
    );
  }
}

export default SortingVisualizer;

function randomRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
