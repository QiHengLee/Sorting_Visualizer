import React from "react";
import "./SortingVisualizer.css";
import { getMergeSortAnimations } from "../SortingAlgorithm/mergeSort";
import { getBubbleSortAnimations } from "../SortingAlgorithm/bubbleSort";
import { getQuickSortAnimations } from "../SortingAlgorithm/quickSort";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      width: Math.floor(window.innerWidth / 220),
      length: 150,
      height: Math.floor(window.innerHeight) - 70,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.length; i++) {
      array.push(randomRange(5, this.state.height));
    }
    this.setState({ array });
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
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

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
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
      }, i * 100);
    }
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
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
  }

  render() {
    const { array, width } = this.state;
    return (
      <>
        <Navbar id="navbar" bg="light">
          <Navbar.Brand>Pathfinding Visualizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link id="speedInfo">Speed : Average</Nav.Link>
              <Nav.Link onClick={() => this.mergeSort()}>MergeSort</Nav.Link>
              <Nav.Link onClick={() => this.bubbleSort()}>BubbleSort</Nav.Link>
              <Nav.Link onClick={() => this.quickSort()}>QuickSort</Nav.Link>
              <Nav.Link onClick={() => this.resetArray()}>HeapSort</Nav.Link>
              <NavDropdown title="Speed">
                <NavDropdown.Item>Slow</NavDropdown.Item>
                <NavDropdown.Item>Average</NavDropdown.Item>
                <NavDropdown.Item>Fast</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => this.resetArray()}>Regenerate</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="arrayContainer">
          {array.map((value, idx) => (
            <div
              key={idx}
              className="bar"
              style={{ height: value, width: width }}
            ></div>
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
