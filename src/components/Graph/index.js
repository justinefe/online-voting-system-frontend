/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';

// let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
	render() {
		const options = {
			animationEnabled: true,
			height: 260,
			// backgroundColor: 'red',
			// colorSet: this.props.color, 
			// title:{
			// 	text: this.props.text,
			// 	// textAlign: this.props.textAlign
			// },
			axisX: {
				valueFormatString: 'MMM'
			},
			axisY: {
				// title: 'Sales (in USD)',
				// prefix: '$',
				includeZero: false
			},
			data: [{
				yValueFormatString: '$#,###',
				xValueFormatString: 'MMMM',
				type: 'column',
				dataPoints: [
					{ label: "Apple",  y: 10, color: "blue"  },
					{ label: "Orange", y: 15, color: "blue"  },
					{ label: "Banana", y: 25, color: "blue"  },
					{ label: "Mango",  y: 30, color: "blue"  },
					{ label: "Grape",  y: 28, color: "blue"  }
				]
			}]
		};
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Graph;           