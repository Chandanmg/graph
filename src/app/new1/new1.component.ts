import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {
  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("new1", am4charts.XYChart);

// Add data
chart.data = [{
  average: 280,
    bname: 'Sales',
    peak: 313,
    total: 347
    },
    {
    average: 390,
    bname: 'R & D',
    peak: 421,
    total: 485
    },
    {
    average: 258,
    bname: 'Operations',
    peak: 285,
    total: 297
    },
    {
    average: 167,
    bname: 'Marketing',
    peak: 198,
    total: 213
    },
    {
    average: 118,
    bname: 'Accounts',
    peak: 147,
    total: 172
  }];
  
  

// Create axes
// let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = "bname";
// categoryAxis.numberFormatter.numberFormat = "#";
// categoryAxis.renderer.inversed = true;
// categoryAxis.renderer.grid.template.location = 0;
// categoryAxis.renderer.cellStartLocation = 0.1;
// categoryAxis.renderer.cellEndLocation = 0.9;

// let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis()); 
// //valueAxis.renderer.opposite = true;

// // Create series
// function createSeries(field, name, color) {
//   let series = chart.series.push(new am4charts.ColumnSeries());
//   series.dataFields.valueY = field;
//   series.dataFields.categoryX = "bname";
//   series.name = name;
//   series.columns.template.tooltipText = "{bname}: [bold]{valueY}[/]";
//   series.columns.template.height = am4core.percent(100);
//   series.columns.template.adapter.add('stroke', (fill, target) => {
//     return am4core.color(color);
//   });
//   series.columns.template.adapter.add('fill', (fill, target) => {
//       return am4core.color(color);
//     });
//   series.sequencedInterpolation = true;
  

//   let valueLabel = series.bullets.push(new am4charts.LabelBullet());
//   valueLabel.label.text = "{valueX}";
//   valueLabel.label.horizontalCenter = "left";
//   valueLabel.label.dx = 10;
//   valueLabel.label.hideOversized = false;
//   valueLabel.label.truncate = false;

//   let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
//   //categoryLabel.label.text = "{name}";
//   //categoryLabel.label.horizontalCenter = "right";
//   categoryLabel.label.dx = -10;
//   categoryLabel.label.fill = am4core.color("#fff");
//   categoryLabel.label.hideOversized = false;
//   categoryLabel.label.truncate = false;
// }

// createSeries("average", "Average","#45becf");
// createSeries("peak", "Peak","#5975f3");
// createSeries("total", "Total","#1715f3");


      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "bname";
      //categoryAxis.renderer.opposite = true;
      categoryAxis.numberFormatter.numberFormat = "#";
      //categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;
      
      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      //valueAxis.renderer.inversed = true;
      valueAxis.title.text = "Hours of Usage";
      valueAxis.renderer.minLabelPosition = 0.01;
    
      
      // Create series
      let series1 = chart.series.push(new am4charts.ColumnSeries());
      series1.dataFields.valueY = "average";
      series1.dataFields.categoryX = "bname";
      series1.name = "Average";
      //series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible  = false;
      series1.fill=am4core.color("#45becf")
      series1.columns.template.adapter.add('stroke', (fill, target) => {
            return am4core.color("#45becf");
          });
          series1.sequencedInterpolation = true;
      
      let series2 = chart.series.push(new am4charts.ColumnSeries());
      series2.dataFields.valueY = "peak";
      series2.dataFields.categoryX = "bname";
      series2.name = 'Peak';
      //series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";
      series2.fill=am4core.color("#5975f3")
      series2.columns.template.adapter.add('stroke', (fill, target) => {
            return am4core.color("#5975f3");
          });
          series2.sequencedInterpolation = true;
      
      let series3 = chart.series.push(new am4charts.ColumnSeries());
      series3.dataFields.valueY = "total";
      series3.dataFields.categoryX = "bname";
      series3.name = 'Total';
      //series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "{name} in {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";
      series3.fill=am4core.color("#1715f3")
      series3.columns.template.adapter.add('stroke', (fill, target) => {
            return am4core.color("#1715f3");
          });
          series3.sequencedInterpolation = true;
      
      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";
      
      
      // let hs1 = series1.segments.template.states.create("hover")
      // hs1.properties.strokeWidth = 5;
      // series1.segments.template.strokeWidth = 1;
      
      // let hs2 = series2.segments.template.states.create("hover")
      // hs2.properties.strokeWidth = 5;
      // series2.segments.template.strokeWidth = 1;
      
      // let hs3 = series3.segments.template.states.create("hover")
      // hs3.properties.strokeWidth = 5;
      // series3.segments.template.strokeWidth = 1;
      
      // Add legend
      chart.legend = new am4charts.Legend();
      

    }); // end am4core.ready()    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
