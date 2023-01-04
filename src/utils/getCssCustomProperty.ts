export const getCssCustomProperty = (propertyName: string) =>
	getComputedStyle(document.documentElement).getPropertyValue(propertyName);
