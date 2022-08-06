const setDomInfo = info => {
  document.getElementById('show_whitespace_changes').checked = info.show_whitespace_changes_checked;
  document.getElementById('show_one_file_at_a_time').checked = info.show_one_file_at_a_time_checked;
}

window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { from: 'popup', subject: 'DOMInfo' },
      setDomInfo);
  });
});

document.getElementById("toggle_file_browser").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "TOGGLE_FILE_BROWSER" }, (response) => {
    });
  });
};

document.getElementById("expand_all_files").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "CLICK_EXPAND_ALL_FILES" }, (response) => {
    });
  });
};

document.getElementById("list_view").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "CLICK_LIST_VIEW" }, (response) => {
    });
  });
};

document.getElementById("tree_view").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "CLICK_TREE_VIEW" }, (response) => {
    });
  });
};

document.getElementById("inline").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "CLICK_INLINE" }, (response) => {
    });
  });
};

document.getElementById("toggle_file_browser").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "TOGGLE_FILE_BROWSER" }, (response) => {
    });
  });
};

document.getElementById("side_by_side").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "CLICK_SIDE_BY_SIDE" }, (response) => {
    });
  });
};

document.getElementById("show_whitespace_changes").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "TOGGLE_SHOW_WHITE_SPACE_CHANGES" }, (response) => {
    });
  });
};

document.getElementById("show_one_file_at_a_time").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "TOGGLE_SHOW_ONE_FILE_AT_A_TIME" }, (response) => {
    });
  });
};

