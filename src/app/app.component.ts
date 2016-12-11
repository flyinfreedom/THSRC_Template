/// <reference path="../../typings/index.d.ts" />
import { Component, ViewChild, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    $('[data-toggle="tooltip"]').tooltip();

    $(".sidebar-nav > li").click(function () {
      if ($(this).attr("class") != "sidebar-brand") {
        $(".sidebar-nav > .active").each(function () {
          $(this).removeClass('active');
        });

        $(this).addClass('active');
      }
    });
  }
}



