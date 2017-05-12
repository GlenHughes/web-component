import createTarget from './createTarget'

export function WebComponent(name, options) {
  return function (target) {
    const f = createTarget(target)(options)

    if (options.extends) {
      customElements.define(name, f, {
        extends: options.extends
      });
    } else {
      customElements.define(name, f);
    }

    return f;
  }
}
