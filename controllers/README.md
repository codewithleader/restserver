# Regular expression
- Comes natively in Javascript for string searching. So we can use the RegExp constructor to create a regular expression. No need to import RegExp module

Example:
```
  const regex = new RegExp(term, 'i');
```
With mongoose:
```
  const users = await User.find({
    $or: [{ name: regex }, { email: regex }],
    $and: [{ state: true }],
  });
```