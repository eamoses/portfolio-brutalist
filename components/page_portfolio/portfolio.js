class Portfolio extends SPA {
  html() {
    return /*html*/`
      <div id="portfolio" class="centered">
          <div>${this._component('Navbar')}</div>
          <div class="wholepage">
          <div class="linkContainer centered"> 
          <div>
          EMILY'S <a href="https://github.com/eamoses" class="centered large-font-size no-padding" target="_blank"> GITHUB</a>
          </div>
          <div class="image">
          <a href="https://eamoses.github.io/widget-dashboard/" target="_blank">
          widget dashboard</a>
          </div>
          <div class="image">
          <a href="https://eamoses.github.io/index/projects/drag-n-drop/index.html" target="_blank">
          drag 'n drop photo website</a>
          </div>
          <div class="image">
          <a href="https://protected-sea-74069.herokuapp.com/" target="_blank">
          lost pet app</a>
          </div>
          <div class="image">
          <a href="https://graph-sense.herokuapp.com/" target="_blank">
          graphsense</a>
          </div>
          <div class="image">
          <a href="https://whispering-fortress-13524.herokuapp.com/" target="_blank">
          vagabond app</a>
          </div>
          <div class="image">
          <a href="https://github.com/eamoses/run-tracker-python" target="_blank">
          python run tracker</a>
          </div>
          <div class="image">
          <a href="https://digestibleplastic.com/" target="_blank">
          digestible plastic</a>
          </div>
          </div>
          <div class="codepen centered">EMILY'S <a href="https://codepen.io/emilyannemoses/" class="centered large-font-size no-padding" target="_blank"> CODEPEN</a>
          <iframe height="450" style="width: 100%;margin-top: 25px;" scrolling="no" title="HTML5 AudioAPI Example using vanilla JavaScript" src="//codepen.io/emilyannemoses/embed/QoyGZo/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href='https://codepen.io/emilyannemoses/pen/QoyGZo/'>HTML5 AudioAPI Example using vanilla JavaScript</a> by Emily Anne Moses
          (<a href='https://codepen.io/emilyannemoses'>@emilyannemoses</a>) on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
          <div>${this._component('Footer')}</div>
          </div>
          </div>
      </div>
    `
  }
}