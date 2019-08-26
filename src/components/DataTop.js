import React, { Component, Fragment } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class DataTop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
    }
  }



  getItems() {
    fetch('http://localhost:3000/data-top')
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getItems()
  }

  static getData(items, filterValue) {
    const sortedItems = items.filter(item => item.metric === filterValue).sort((a, b) => (a.uplift > b.uplift ? 1 : -1));

    return sortedItems[0]

  }

  render() {
    const items = this.state.items;
    const FILTER_VALUES = {
      SPEND: 'Spend',
      UNITS: 'Units',
      VISITS: 'Visits',
      TOTAL_CUSTS: 'Total_custs'
    }

    const upliftData = [];
    const percentUplift = [];

    const spendData = DataTop.getData(items, FILTER_VALUES.SPEND);
    const unitsData = DataTop.getData(items, FILTER_VALUES.UNITS);
    const visitsData = DataTop.getData(items, FILTER_VALUES.VISITS);
    const customersData = DataTop.getData(items, FILTER_VALUES.TOTAL_CUSTS);

    if (spendData) {
      upliftData.push(spendData.uplift);
      percentUplift.push(spendData.percent_uplift * 100)
    }

    if (unitsData) {
      upliftData.push(unitsData.uplift);
      percentUplift.push(unitsData.percent_uplift * 100)
    }

    if (visitsData) {
      upliftData.push(visitsData.uplift);
      percentUplift.push(visitsData.percent_uplift * 100)
    }

    if (customersData) {
      upliftData.push(customersData.uplift);
      percentUplift.push(customersData.percent_uplift * 100)
    }

    //@todo remove hardcoded values
    const data = {
      labels: ['Spend', 'Units', 'Visits', 'Total customers'],
      datasets: [
        {
          label: 'uplift',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: upliftData
        },
        {
          label: '% uplift',
          backgroundColor: 'rgba(46, 204, 113, 0.2)',
          borderColor: 'rgba(46, 204, 113, 0.4)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(46, 204, 113, 0.2)',
          hoverBorderColor: 'rgba(46, 204, 113, 1)',
          data: percentUplift
        }
      ]
    };

    return (
      <Fragment>
        <h3>Top line values for each metric</h3>
        <HorizontalBar data={data} />
      </Fragment>
    )
  }

}

export default DataTop;