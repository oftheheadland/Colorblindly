const makeCssStyles = type =>
  `#rainbow{-webkit-filter:url(#${type});-moz-filter:(#${type});-ms-filter:(#${type});-o-filter:(#${type});filter:(#${type});}`;
const makeSVGFilter = (type, filterValues) =>
  `<svg id="colorblind-filters" style="display: none"> <defs> <filter id="${type}"> <feColorMatrix type="matrix" values="${filterValues}" in="SourceGraphic" /> </filter> </defs> </svg>`;
// global to hold the innerhtml of the colorblind filters. each filter has a filterSVG and filterStyles
const filters = {
  achromatomalySVG: makeSVGFilter(
    "achromatomaly",
    "0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0"
  ),
  achromatomalyStyles: makeCssStyles("achromatomaly"),

  achromatopsiaSVG: makeSVGFilter(
    "achromatopsia",
    "0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0"
  ),
  achromatopsiaStyles: makeCssStyles("achromatopsia"),

  deuteranomalySVG: makeSVGFilter(
    "deuteranomaly",
    "0.8,0.2,0,0,0 0.258,0.742,0,0,0 0,0.142,0.858,0,0 0,0,0,1,0"
  ),
  deuteranomalyStyles: makeCssStyles("deuteranomaly"),

  deuteranopiaSVG: makeSVGFilter(
    "deuteranopia",
    "0.625,0.375,0,0,0 0.7,0.3,0,0,0 0,0.3,0.7,0,0 0,0,0,1,0"
  ),
  deuteranopiaStyles: makeCssStyles("deuteranopia"),

  protanomalySVG: makeSVGFilter(
    "protanomaly",
    "0.817,0.183,0,0,0 0.333,0.667,0,0,0 0,0.125,0.875,0,0 0,0,0,1,0"
  ),
  protanomalyStyles: makeCssStyles("protanomaly"),

  protanopiaSVG: makeSVGFilter(
    "protanopia",
    "0.567,0.433,0,0,0 0.558,0.442,0,0,0 0 0.242,0.758,0,0 0,0,0,1,0"
  ),
  protanopiaStyles: makeCssStyles("protanopia"),

  tritanomalySVG: makeSVGFilter(
    "tritanomaly",
    "0.967,0.033,0,0,0 0,0.733,0.267,0,0 0,0.183,0.817,0,0 0,0,0,1,0"
  ),
  tritanomalyStyles: makeCssStyles("tritanomaly"),

  tritanopiaSVG: makeSVGFilter(
    "tritanopia",
    "0.95,0.05,0,0,0 0,0.433,0.567,0,0 0,0.475,0.525,0,0 0,0,0,1,0"
  ),
  tritanopiaStyles: makeCssStyles("tritanopia")
};

function applyFilter(filter) {
  // ignore the normal filter create a fake event so that removeFilter
  // temporarily disables the currently selected event (since this originates from hovering over normal)
  if (filter === "normal")
    return removeFilter({ target: { id: window.selectedFilter } });

  // remove any currently applied filters
  if (
    document.getElementById("styleID") &&
    document.getElementById("filterID")
  ) {
    document.getElementById("styleID").remove();
    document.getElementById("filterID").remove();
  }
  stylingID = document.createElement("style");
  stylingID.id = "styleID";
  document.body.appendChild(stylingID);

  filterID = document.createElement("div");
  filterID.id = "filterID";
  filterID.setAttribute(
    "style",
    "height: 0; padding: 0; margin: 0; line-height: 0;"
  );
  document.body.appendChild(filterID);

  // get the SVG and styles from the filters object in the global scope
  filterID.innerHTML = filters[filter + "SVG"];
  stylingID.innerHTML = filters[filter + "Styles"];
  // scrollBy event to force an update to the dom, fixes an issue where the SVG filter does not apply until the screen changes
  setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
  }, 1);
}

// checks for a valid filter name and calls the applyFilter() function to add the filter to the popup
function selectFilter(evt) {
  if (!evt) return;

  const filter = getID(evt.target);
  console.log("applying filter ", filter);
  if (!filter) return;
  applyFilter(filter);
}

function getID(element) {
  let filterID = element.id.replace("option-", "");
  // return ID if it exists OR if the element is a child of the div (get its parent)
  return !!filterID ? filterID : getID(element.parentNode);
}

// remove the currently rendered filter from the popup
function removeFilter(evt) {
  if (!evt) return;

  const filter = getID(evt.target);
  console.log("removing filter ", filter);
  if (!filter) return;

  stylingID = document.getElementById("styleID");
  filterID = document.getElementById("filterID");
  if (stylingID && filterID) {
    stylingID.remove();
    filterID.remove();
  }
}

// get all divs containing that match the querySelector pattern below
const options = document.querySelectorAll('[id^="option-"]');

// iterate through all of the divs containing the radio buttons and labels
options.forEach(option => {
  option.addEventListener("mouseover", selectFilter, false);
  option.addEventListener(
    "mouseout",
    evt => {
      removeFilter(evt);
      // re-apply the currently selected filter
      if (window.selectedFilter) applyFilter(window.selectedFilter);
    },
    false
  );
});
