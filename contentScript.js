chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    const domInfo = {
      show_whitespace_changes_checked: document.querySelector('[data-testid="show-whitespace"]').checked,
      show_one_file_at_a_time_checked: document.querySelector('[data-testid="file-by-file"]').checked,
    };

    sendResponse(domInfo);
    return;
  }

  switch (msg.action) {
    case "TOGGLE_FILE_BROWSER":
      toggleFileBrowser();
      sendResponse({ result: "ok" })
      break;
    case "CLICK_EXPAND_ALL_FILES":
      clickExpandAllFiles();
      sendResponse({ result: "ok" })
      break;
    case "CLICK_LIST_VIEW":
      clickListView();
      sendResponse({ result: "ok" })
      break;
    case "CLICK_TREE_VIEW":
      clickTreeView();
      sendResponse({ result: "ok" })
      break;
    case "CLICK_INLINE":
      clickInline();
      sendResponse({ result: "ok" })
      break;
    case "CLICK_SIDE_BY_SIDE":
      clickSideBySide();
      sendResponse({ result: "ok" })
      break;
    case "TOGGLE_SHOW_WHITE_SPACE_CHANGES":
      toggleShowWhiteSpaceChanges();
      sendResponse({ result: "ok" })
      break;
    case "TOGGLE_SHOW_ONE_FILE_AT_A_TIME":
      toggleShowOneFileAtATime();
      sendResponse({ result: "ok" })
      break;
    default:
      sendResponse({ result: "INVALID_ACTION" })
  }
});

function toggleFileBrowser() {
  document.getElementsByClassName('js-toggle-tree-list')[0].click();
}

function clickExpandAllFiles() {
  document.getElementsByClassName('inline-parallel-buttons')[0].children[1].click();
}

function clickListView() {
  document.getElementsByClassName('js-list-view')[0].click();
}

function clickTreeView() {
  document.getElementsByClassName('js-tree-view')[0].click();
}

function clickInline() {
  document.getElementsByClassName('js-inline-diff-button')[0].click();
}

function clickSideBySide() {
  document.getElementsByClassName('js-parallel-diff-button')[0].click();
}

function toggleShowWhiteSpaceChanges() {
  document.querySelector('[data-testid="show-whitespace"]').click();
}

function toggleShowOneFileAtATime() {
  document.querySelector('[data-testid="file-by-file"]').click();
}
