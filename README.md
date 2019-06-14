# validity-id

Performs calculations related to the Validity ID system

## Usage

```js
const {
  toValidityID,
  fromValidityID
} = require('validity-id');

const id = toValidityID('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 7944251);
// 0xffcc003ba136e33519d03cc616998d8b87ddf5ec8772b351b862eeb2d65b1640

const reversed = fromValidityID('0xffcc003ba136e33519d03cc616998d8b87ddf5ec8772b351b862eeb2d65b1640');

/*
{
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  blockNumber: 7944251
}
*/
```

## Author

Raymond Pulver IV

## License

MIT
