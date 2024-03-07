import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private isDark = false;

  constructor(
    rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Toggles the theme of the application between dark and light.
   *
   * @return {void}
   */
  toggleTheme() {
    this.isDark = !this.isDark;
    const theme = this.isDark ? 'theme-alternate' : 'theme-primary';
    this.renderer.setAttribute(document.body, 'class', theme);
  }

  /**
   * Check if the current theme is dark.
   *
   * @return {boolean} the boolean value indicating whether the theme is dark
   */
  isDarkTheme() {
    return this.isDark;
  }
}
