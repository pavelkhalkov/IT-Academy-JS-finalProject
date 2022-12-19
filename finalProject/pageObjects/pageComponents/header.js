const BasePage = require('../BasePage');

class Header extends BasePage {
  get lamodaLogo() {
    return '._root_8m6xk_2';
  }

  get MenubarTab() {
    return '._bottomRow_ruiv4_20';
  }

  get clothesMenubarTab() {
    return '//a[@href="/c/477/clothes-muzhskaya-odezhda/?sitelink=topmenuM&l=3"]';
  }

  get accessoriesMenubarTab() {
    return '//a[@href="/c/559/accs-muzhskieaksessuary/?sitelink=topmenuM&l=5"]';
  }

  get sportMenubarTab() {
    return '//a[@ href="/home-sport-men/?sitelink=topmenuM&l=8"]';
  }

  get menSection() {
    return '._link_1o7df_16._link_1o7df_16:nth-child(2)';
  }

  get cityСonfigurationButton() {
    return '._message_kn91o_11';
  }

  get loginToApplicationButton() {
    return '._root_1gjtp_2>a:nth-child(1)';
  }

  get loginButton() {
    return '.x-button_intrinsic-width._submit_3z173_25';
  }
}

module.exports = Header;
