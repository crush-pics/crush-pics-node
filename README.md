# Crush.pics Node Client Library

This is the [node.js](http://nodejs.org/) Library for integrating with Crush.pics API. Sign up for a Crush.pics account [here](https://app.crush.pics).

## Installation

Install the latest version of the library with the following command:

```
$ npm i @crush-pics/crush-pics
```

Then require the library:

```
var CrushPics = require('@crush-pics/crush-pics');
```

## Documentation

The full documentation can be found [here](https://docs.crush.pics)

## Get started

In order to perform API calls you need to configure your client - provide your private API token:

```javascript
var CrushPics = require('@crush-pics/crush-pics');

CrushPics.configure({
  api_token: '<your API key>'
});

```

#### Dashboard

Get information about your account and quota consumption report

```javascript
var type = 'week'; # also supports 'month' & 'six_months'

CrushPics.dashboard.get({ report_type: type }).request(function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
```

Consumption report comes in [ApexCharts.js](https://apexcharts.com/) compatible format.

Example:

```javascript
var renderChart = function(data) {
  // ApexCharts.js initialization options
  var options = {
    chart: {
      height: 350,
      width: '100%',
      type: 'bar',
      stacked: true,
    }
  }
  var report = data.stats.consumption;
  var values = $.map(report.series, function(p, k) {
    return p
  });
  
  options.series = $.map(report.series, function(v, k) {
    return {
      name: window.i18n.origins[k], // customize labels
      data: v
    }
  });
  
  options.xaxis.categories = report.columns;

  var chart = new ApexCharts(
    document.querySelector("#consumption-chart"),
    options
  );

  chart.render();
}

CrushPics.dashboard.get({ report_type: 'week' }).request(function(error, result) {
  if (error) {
    console.log(error);
  } else {
    renderChart(result);
  }
});
```
