# Many ways of doing

Brief : Create a function and return first parameter if between 0 to 9 or
return 1

The test is :

```javascript
fn(0) === 0
fn(5) === 5
fn(10) === 10
fn(15) === 10
```

Exemple :

```javascript
const fn = (nb) => (nb < 9 ? nb : 10)
```

Run tests :

```bash
npm i
npm run test
```
