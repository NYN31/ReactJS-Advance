# useCallback and useMemo

- There is a slight difference in the API. useCallback accepts the `function` that we want to memoize as the first argument, while useMemo accepts a `function` and memoizes its `return value`.

# When we actually memoized props

There are two major cases when we actually need to memoized props on a component.

1. The first one is when we have to pass a value in downstream component and used in a dependency in another hook.

```
const Parent = () => {
    // this needs to be memoized!
    // Child uses it inside useEffect
    const fetch = () => {};
    return <Child onMount={fetch} />;
};

const Child = ({ onMount }) => {
    useEffect(() => {
    onMount();
    Page 76}, [onMount]);
};
```

2. The second one is when a component is wrapped in ``React.memo``.

# What is React.memo

When a component's re-render is triggered by it's parents component, and the component is wrapped with `React.memo`, then only the component checked props and re-rendered when the component props are changed. Without changing props, the component will not re-render. 

# React.memo and props from props

- **Rule 1:** Never spread props that are commng from other components. Instead of spreading props it has to be something explicit like this.

```
// Not do this
const Component = (props) => {
    return <ChildMemo {...props} />;
};

// Do this
const Component = (props) => {
    return <ChildMemo some={prop.some} other={props.other} />;
};
```

- Avoid passing non-primitive props that are comming from other components. Even if any of those props are non-memoized objects or functions, memoization will break again.

- Avoid passing non-primitive values that are comming from custom hooks.


# Key takeaways

- React compares objects/arrays/functions by their reference, not their value. This comparision happens in hooks dependencies and in props of components wrapped in `React.memo`.

- The inline function passed as an argument to either useMemo or useCallback will be re-created on every re-render.

- Memoizing props on a component make sence only when:

    1. This component is wrapped in React.memo
    2. This component uses those props as dependecies in any of the hooks.
    3. This component passes those props down to other components, and they follow any of the above situation. 
    4. Memoizing all props on a component wrapped in React.memo is harder than it seems. Avoid passing non-primitive values that coming from other props or hooks to it.
    5.When memoizing props, remember that "children" is also a non-primitive prop that needs to be memoized.