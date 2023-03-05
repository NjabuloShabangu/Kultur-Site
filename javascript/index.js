/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

function initMap() {
  let location = { lat: 38.648760, lng: -90.256440 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location
    }
  );

  const marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

window.initMap = initMap;

// end of copyrighted content
