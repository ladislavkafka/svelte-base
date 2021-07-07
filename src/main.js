import MyComponent from './MyComponent.svelte';
window.MyComponent = function (options) {
	return new MyComponent(options);
};
