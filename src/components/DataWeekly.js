import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2';

class DataWeekly extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }



  getItems() {
    fetch('http://localhost:3000/data-weekly')
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getItems()
  }



  addDifference() {
    const items = this.state.items;

    items.map(item => item.difference = item.exposed - item.controlled)

    return items;

  }

  createDataForChart() {
    const items = this.addDifference();
    const differenceObject = {
      aisle: [],
      brand: [],
      offer: [],
      unknown: [],
    }
    // eslint-disable-next-line
    items.map(item => {
      switch (item.product) {
        case 'Aisle':
          differenceObject.aisle.push(item.difference);
          break;
        case 'Brand':
          differenceObject.brand.push(item.difference);
          break;
        case 'Offer':
          differenceObject.offer.push(item.difference);
          break;
        default:
          differenceObject.unknown.push(item.difference);
          break;

      }
    })

    return differenceObject;
  }

  createLabelsAndAddData() {
    const datasets = this.createDataForChart();

    //@todo remove hardcoded values
    const data = {
      labels: ['2017-08-30', '2017-09-06', '2017-09-13', '2017-09-20', '2017-09-27', '2017-10-04', '2017-10-11', '2017-10-18', '2017-10-25', '2017-11-01', '2017-11-08', '2017-11-15', '2017-11-22', '2017-11-29', '2017-12-06', '2017-12-13', '2017-12-20', '2017-12-27', '2018-01-03', '2018-01-10', '2018-01-17', '2018-01-24'],
      datasets: [
        {
          label: 'Aisle',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(207, 0, 15, 0.4)',
          borderColor: 'rgba(207, 0, 15, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(207, 0, 15, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(207, 0, 15, 1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datasets.aisle
        },
        {
          label: 'Brand',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(46, 204, 113, 0.4)',
          borderColor: 'rgba(46, 204, 113, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(46, 204, 113, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(46, 204, 113, 1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datasets.brand
        },
        {
          label: 'Offer',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(240, 255, 0, 0.5)',
          borderColor: 'rgba(240, 255, 0, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(240, 255, 0, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(240, 255, 0, 1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: datasets.offer
        },
      ]
    };

    return data;
  }


  render() {
    const data = this.createLabelsAndAddData();

    return (
      <Fragment>
        <h3>Difference between exposed/control results per week per product</h3>
        <Line
          data={data}
        />
      </Fragment>


    )
  }
}

export default DataWeekly;