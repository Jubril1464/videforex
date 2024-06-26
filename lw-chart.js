const { createChart } = LightweightCharts;

!(function () {
  class t extends HTMLElement {
    static get observedAttributes() {
      return ["type", "autosize"];
    }
    static getChartSeriesConstructorName(t) {
      return `add${t.charAt(0).toUpperCase() + t.slice(1)}Series`;
    }
    constructor() {
      super(),
        (this.chart = void 0),
        (this.series = void 0),
        (this.__data = []),
        (this._resizeEventHandler = () => this._resizeHandler());
    }
    connectedCallback() {
      this.attachShadow({ mode: "open" }),
        this._upgradeProperty("type"),
        this._upgradeProperty("autosize"),
        this._tryLoadInitialProperty("data");
      const t = document.createElement("div");
      t.setAttribute("class", "chart-container");
      const e = document.createElement("style");
      (e.textContent =
        "\n:host {\n display: block;\n}\n :host[hidden] {\n display: none;\n }\n.chart-container {\n height: 100%;\n width: 100%;\n }\n "),
        this.shadowRoot.append(e, t),
        (this.chart = createChart(t)),
        this.setTypeAndData();
      [
        "options",
        "series-options",
        "pricescale-options",
        "timescale-options",
      ].forEach((t) => {
        this._tryLoadInitialProperty(t);
      }),
        this.autosize &&
          window.addEventListener("resize", this._resizeEventHandler);
    }
    _tryLoadInitialProperty(t) {
      if (this.hasAttribute(t)) {
        const s = this.getAttribute(t);
        let i;
        try {
          i = JSON.parse(s);
        } catch (e) {
          return void console.error(
            `Unable to read attribute ${t}'s value during initialisation.`
          );
        }
        (this[
          t
            .split("-")
            .map((t, e) =>
              e < 1 ? t : `${t.charAt(0).toUpperCase()}${t.slice(1)}`
            )
            .join("")
        ] = i),
          this.removeAttribute(t);
      }
    }
    setTypeAndData() {
      this.series && this.chart && this.chart.removeSeries(this.series),
        (this.series =
          this.chart[t.getChartSeriesConstructorName(this.type)]()),
        this.series.setData(this.data);
    }
    _upgradeProperty(t) {
      if (this.hasOwnProperty(t)) {
        const e = this[t];
        delete this[t], (this[t] = e);
      }
    }
    disconnectedCallback() {
      this.chart && (this.chart.remove(), (this.chart = null)),
        window.removeEventListener("resize", this._resizeEventHandler);
    }
    set type(t) {
      this.setAttribute("type", t || "line");
    }
    get type() {
      return this.getAttribute("type") || "line";
    }
    set autosize(t) {
      Boolean(t)
        ? this.setAttribute("autosize", "")
        : this.removeAttribute("autosize");
    }
    get autosize() {
      return this.hasAttribute("autosize");
    }
    set data(t) {
      let e = t;
      ("object" == typeof e && Array.isArray(e)) ||
        ((e = []), console.warn("Lightweight Charts: Data should be an array")),
        (this.__data = e),
        this.series && this.series.setData(this.__data);
    }
    get data() {
      return this.__data;
    }
    set options(t) {
      this.chart && this.chart.applyOptions(t);
    }
    get options() {
      return this.chart ? this.chart.options() : null;
    }
    set seriesOptions(t) {
      this.series && this.series.applyOptions(t);
    }
    get seriesOptions() {
      return this.series ? this.series.options() : null;
    }
    set priceScaleOptions(t) {
      this.chart && this.chart.priceScale().applyOptions(t);
    }
    get priceScaleOptions() {
      return this.series ? this.chart.priceScale().options() : null;
    }
    set timeScaleOptions(t) {
      this.chart && this.chart.timeScale().applyOptions(t);
    }
    get timeScaleOptions() {
      return this.series ? this.chart.timeScale().options() : null;
    }
    attributeChangedCallback(t, e, s) {
      if (!this.chart) return;
      const i = null !== s;
      switch (t) {
        case "type":
          (this.data = []), this.setTypeAndData();
          break;
        case "autosize":
          i
            ? (window.addEventListener(
                "resize",
                () => this._resizeEventHandler
              ),
              this._resizeEventHandler())
            : window.removeEventListener("resize", this._resizeEventHandler);
      }
    }
    _resizeHandler() {
      const t = this.shadowRoot.querySelector("div.chart-container");
      if (!this.chart || !t) return;
      const e = t.getBoundingClientRect();
      this.chart.resize(e.width, e.height);
    }
  }
  window.customElements.define("lightweight-chart", t);
})();
