// TODO: in ../popup/popup.html add IDs to the divs in the form of id="option-[filterName]" to following the first few examples
// TODO: add the rest of the filters from the ../filters/ folder to the const filters{} objects below
// TODO: check for bugs and remove any unneeded code
// Extra: when you select an option in the popup, set that filter to be toggled on in the popup so that moving the mouse off of the option doesn't remove the filter from the popup

// global to hold the innerhtml of the colorblind filters. each filter has a filterSVG and filterStyles
const filters = {
  achromatomalySVG:
    '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatomaly"> <feColorMatrix type="matrix" values="0.618,0.320,0.062,0,0 0.163,0.775,0.062,0,0 0.163,0.320,0.516,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>',
  achromatomalyStyles:
    "html{-webkit-filter:url(#achromatomaly);-moz-filter:(#achromatomaly);-ms-filter:(#achromatomaly);-o-filter:(#achromatomaly);filter:(#achromatomaly);}",
  achromatopsiaSVG:
    '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="achromatopsia"> <feColorMatrix type="matrix" values="0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0.299,0.587,0.114,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter>  </defs> </svg>',
  achromatopsiaStyles:
    "html{-webkit-filter:url(#achromatopsia);-moz-filter:(#achromatopsia);-ms-filter:(#achromatopsia);-o-filter:(#achromatopsia);filter:(#achromatopsia);}"
};

function applyFilter(filter) {
  // ignore the normal filter
  if (filter === "normal") {
    removeFilter();
    return;
  }
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

  // if it's a child of the div
  if (!filterID) {
    filterID = getID(element.parentNode);
  }
  if (filterID) return filterID;
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
console.log(options);

// iterate through all of the divs containing the radio buttons and labels
options.forEach(option => {
  option.addEventListener("mouseover", selectFilter, false);
  option.addEventListener("mouseout", removeFilter, false);

  //   iterate through the children of the div and add listeners to the radio buttons and labels
  const children = option.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.addEventListener("mouseover", selectFilter, false);
    child.addEventListener("mouseout", removeFilter, false);
  }
});
