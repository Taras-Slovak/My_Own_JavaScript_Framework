class Dom {
  constructor(selector) {
    // #app
    this.$el = typeof selector ==='string'
      ? document.querySelector(selector)
      : selector;
  }
  html(html) {
    if (typeof html==='string') {
      this.$el.innerHTML = html;
      return this;
    }
    return this.$el.outerHTML.trim();
  }
  clear() {
    this.html('');
    return this;
  }
}


// event.target
export function $(selector) {
  return new Dom(selector);
}
$.create =(tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return el;
};
