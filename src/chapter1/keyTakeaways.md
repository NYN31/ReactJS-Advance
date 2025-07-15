# Key Takeaways

- Re-rendering is how React updates compone nts with new data. Without re-renders, there will be no interactivity in our apps.

- State update is the initial source of all re-renders.

- If a components re-render is triggered, all nested components inside that component will be re-rendered.

- In re-render cycle props change doesn't matter: components will re-render even if the don't have any props.

- To prevent unnecessary re-renders, use `moving state down` pattern.

- State update in a hook will trigger re-render of a component that uses this hook, even the return state is not used.
