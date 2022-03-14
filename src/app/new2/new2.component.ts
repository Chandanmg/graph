import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.scss']
})
export class New2Component implements OnInit {

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

      let chart = am4core.create("new2", am4charts.XYChart);

      chart.paddingRight = 20;

      chart.data = [{
        "day": "sunday",
        "ahour": 1,
        "phour": 1,
      }, {
        "day": "monday",
        "ahour": 4,
        "phour": 6,
      }, {
        "day": "tuesday",
        "ahour": 2,
        "phour": 3,
      }, {
        "day": "wednesday",
        "ahour": 3,
        "phour": 4,
      }, {
        "day": "thursday",
        "ahour": 5,
        "phour": 1,
      }, {
        "day": "friday",
        "ahour": 3,
        "phour": 2,
      }, {
        "day": "saturday",
        "ahour": 1,
        "phour": 2,
      },];
      
      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "day";
      //categoryAxis.renderer.opposite = true;
      
      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      //valueAxis.renderer.inversed = true;
      valueAxis.title.text = "Place taken";
      valueAxis.renderer.minLabelPosition = 0.01;
    
      
      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "ahour";
      series1.dataFields.categoryX = "day";
      series1.name = "Ahour";
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible  = false;
      series1.fill=am4core.color("#45becf");
      series1.stroke = am4core.color("#45becf");
      
      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "phour";
      series2.dataFields.categoryX = "day";
      series2.name = 'Phour';
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";
      series2.fill=am4core.color("#5975f3");
      series2.stroke=am4core.color("#5975f3");
      
      // let series3 = chart.series.push(new am4charts.LineSeries());
      // series3.dataFields.valueY = "uk";
      // series3.dataFields.categoryX = "year";
      // series3.name = 'United Kingdom';
      // series3.bullets.push(new am4charts.CircleBullet());
      // series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      // series3.legendSettings.valueText = "{valueY}";
      
      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";
      
      
      let hs1 = series1.segments.template.states.create("hover")
      hs1.properties.strokeWidth = 5;
      series1.segments.template.strokeWidth = 1;
      
      let hs2 = series2.segments.template.states.create("hover")
      hs2.properties.strokeWidth = 5;
      series2.segments.template.strokeWidth = 1;
      
      // let hs3 = series3.segments.template.states.create("hover")
      // hs3.properties.strokeWidth = 5;
      // series3.segments.template.strokeWidth = 1;
      
      // Add legend
      chart.legend = new am4charts.Legend();
      
    });
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
