import * as ActionTypes from '../../../constants';

export function toggleSketch() {
  return {
    type: ActionTypes.TOGGLE_SKETCH
  };
}

export function startSketch() {
  return {
    type: ActionTypes.START_SKETCH
  };
}

export function stopSketch() {
  return {
    type: ActionTypes.STOP_SKETCH
  };
}

export function setSelectedFile(fileId) {
  return {
    type: ActionTypes.SET_SELECTED_FILE,
    selectedFile: fileId
  };
}

export function dispatchConsoleEvent(...args) {
  return {
    type: ActionTypes.CONSOLE_EVENT,
    event: args[0].data
  };
}

export function newFile() {
  return {
    type: ActionTypes.SHOW_MODAL
  };
}

export function closeNewFileModal() {
  return {
    type: ActionTypes.HIDE_MODAL
  };
}

export function expandSidebar() {
  return {
    type: ActionTypes.EXPAND_SIDEBAR
  };
}

export function collapseSidebar() {
  return {
    type: ActionTypes.COLLAPSE_SIDEBAR
  };
}

export function expandConsole() {
  console.log('expand console!');
  return {
    type: ActionTypes.EXPAND_CONSOLE
  };
}

export function collapseConsole() {
  return {
    type: ActionTypes.COLLAPSE_CONSOLE
  };
}

