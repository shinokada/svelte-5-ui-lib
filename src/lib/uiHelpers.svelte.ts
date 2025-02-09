export function uiHelpers(initialValue: boolean = false) {
  let isOpen: boolean = $state(initialValue);

  function toggle() {
    isOpen = !isOpen;
    // console.log('toggled', isOpen);
  }

  function close() {
    isOpen = false;
    // console.log('closed', isOpen);
  }

  function open() {
    isOpen = true;
    // console.log('opened', isOpen);
  }

  return {
    get isOpen() {
      return isOpen;
    },
    set isOpen(value: boolean) {
      isOpen = value;
    },

    toggle,
    close,
    open
  };
}

export function clickOutside(element: HTMLElement, callbackFunction?: () => void) {
  function onClick(event: MouseEvent) {
    if (typeof callbackFunction === "function") {
      const targetNode = event.target as Node | null;
      if (!element.contains(targetNode)) {
        callbackFunction();
      }
    } else {
      console.error("Callback function is not a function");
    }
  }

  document.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction: () => void) {
      if (typeof newCallbackFunction === "function") {
        callbackFunction = newCallbackFunction;
      } else {
        console.error("New callback function is not a function");
      }
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    }
  };
}

let n = Date.now();

export function idGenerator() {
  return (++n).toString(36);
}
