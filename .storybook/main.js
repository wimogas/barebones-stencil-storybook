module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    {
      name:'@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        controls: false,
      }
    },
    '@storybook/addon-notes', 
    '@storybook/addon-knobs',
    '@storybook/addon-info',
  ]
};