# Key takeaways

## React Element

- React elements is the smallest building blocks of react application and are plain JavaScript Objects that describe what you want to see on the screen. This is the part which we can see on the screen.

- Elements are plain JavaScript Objects that are lightweight compare to Real DOM which contains propertly like `type` ('div', 'Child') and `props` (attributes and children)

- Elements are immutable. When you update the UI new elements are created and the component will re-render. 

- Elements are created by `JSX` or `React.createElement()` method.

## Components

- Components are the fundamental building blocks of react applications allowing developer to break complex UI to smaller, more manageble unit which are also independdent, reusable. 

## Re-rendering 

- Rerendering is just React calling the Component's function.

- A component re-renders when its elements obejct changes, as determined by `Object.is` comparison of it before and after re-render.

- When elements are passed as props to a component, and this component trigger a re-render through a state update, elmenets that are passed through props won't re-render.

- `children` are just props and behave like anyh other props when they are passed vis `JSX` nesting syntax

```
<Parent>
<Child />
</Parent>

// the same as:
<Parent children={<Child />} />
```