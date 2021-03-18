import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bb-button',
  styleUrl: 'bb-button.scss',
  shadow: true,
})
export class Button {
  /**
   * Color
  */
  @Prop({mutable: true}) variant: string = 'primary';

  /**
   * Size 
  */
  @Prop({mutable: true}) size: string;

  /**
   * Full Width 
  */
  @Prop({mutable: true}) full: boolean = false;

  render() {
    return (
      <button class={`bb-button ${this.variant == '' ? 'primary' : this.variant} ${this.size === 'medium' ? '' : this.size} ${this.full ? 'full' : ''}`}>
        <slot></slot>
      </button>
    );
  }

}
