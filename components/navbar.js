class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!-- <div class="top-menu"> -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center logo-wrap">
          <div id="fh5co-logo">
            <a href="index.html">Concept Foods<span>.</span></a>
          </div>
        </div>
        <div class="col-xs-12 text-center menu-1 menu-wrap">
          <ul>
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li class="has-dropdown">
              <a href="gallery.html">Gallery</a>
              <ul class="dropdown">
                <li><a href="#">Events</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Coffees</a></li>
              </ul>
            </li>
            <li><a href="reservation.html">Reservation</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- </div> -->
        `;
  }
}

customElements.define('navbar-component', Navbar);
