# Key takeaways

- If a component render another component which is controlled by props, we can pass whole component as a props instead leaving the configuration concerns to the consumer. 

```
const Button = ({ icon }) => {
return <button>Submit {icon}</button>;
};
// large red Error icon
<Button icon={<Error color="red" size="large" />} />;
```

- If a component that has elements as a props rendered conditionally, then even if those are created ouside of the component/condition, they will only be rendered when the conditional component is rendered.

```
const App = () => {
// footer will be rendered only when the dialog itself renders
// after isDialogOpen is set to "true"
const footer = <Footer />;
return isDialogOpen ? (
<ModalDialog footer={footer} />
) : null;
};
```