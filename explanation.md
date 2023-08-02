- Store - a central storage
- Slice - a section of the store
  - Reducer - manipulate data in the slice
  - Action - function that calls the reducer
- Provider - A component that wraps around the entire app and gives access to all components
- Redux Hooks - useDispatch and useSelector

```javascript
const dispatch = useDispatch();

dispatch(action("hello"));
```
