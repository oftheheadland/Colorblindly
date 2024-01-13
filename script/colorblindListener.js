//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

// stores the currently selected filter so that when the user stops hovering
// over options, the currently selected filter will still be applied to the popup
window.selectedFilter = null;

/**
 * get the selected filter on popup open
 */
window.onload = function() {
  if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function(result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input
 */
function setSelected(value) {
  try {
    chrome.storage.local.set({ key: value }, function() {
      document.getElementById(value).checked = true;
    });
  } catch {}
}

async function injectFilter(fileName) {
  const tab = await chrome.tabs.query({ active: true });
  if (tab.length === 0) return;
  chrome.scripting.executeScript({
    target: {tabId: tab[0].id},
    files: [fileName]
  });

  /* All tabs at once method. Requires permission to every domain. 
  Better to restrict to current tab. */ 

  // const tabs = await chrome.tabs.query({});
  // console.log('all tabs:',tabs)
  // tabs.forEach(tab => {
  //   console.log('tab...', tab)
  //   chrome.scripting.executeScript({
  //     target: {tabId: tab.id},
  //     files: [fileName]
  //   });
  // });

}

document.querySelectorAll(['[id^="radio"]']).forEach(radioButton => {
  const filter = radioButton.parentElement.id.replace("option-", "");
  radioButton.addEventListener("click", function() {
    // page-specific filters
    setSelected(radioButton.id);
    injectFilter(`filters/${filter}.js`);
    // popup-specific filters
    applyFilter((window.selectedFilter = filter));
  });
});
