// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit2-04-PWA/sw.js", {
    scope: "/ICS2O-Unit2-04-PWA/",
  })
}

/**
 * This function calculates the area of a triangle
 */
function enterClicked() {
  //input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  //process
  const area = (base * height) / 2

  //output
  document.getElementById("area-of-triangle").innerHTML =
    "The area of the triangle is " + area + " cm²."
}
