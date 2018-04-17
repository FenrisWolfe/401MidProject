# Midterm Review
## .env
This wasn't a requirement, but consider creating a file called `sample.env`
demonstrating what `.env` properties your app requires. This makes it much
easier for third-parties to clone your repo, set it up and get it running
quickly. Without a file like this other users have to search through your
app to find out exactly what properties to configure in their own `.env`.

## Starting Server
I'm able to start your app after finding and configuring `.env` properties.

## Running Tests
Your tests fire up, some run fine, then a lot hang and wait until everything
times out.

Tests run with these results:

```
Test Suites: 6 failed, 2 passed, 8 total
Tests:       49 failed, 8 passed, 57 total
```

If I run something like the user test by itself, it runs fine, but all
together they seem to get messed up.

## Style
The structure of `server.js` is clean and simple.

## Routing
It's weird to have so many different routers mapped to the exact same
route.

```js
app.use('/api', shipRouter);
app.use('/api', userRouter);
app.use('/api', crewRouter);
app.use('/api', engineRouter);
app.use('/api', supplyRouter);
app.use('/api', powerRouter);
```

It would be better to write the entire URL path here in the server, and leave
each router only reacting to requests made to it's own root like this:

```js
app.use('/api/ships', shipRouter);
app.use('/api/users', userRouter);
app.use('/api/crew', crewRouter);
app.use('/api/engines', engineRouter);
app.use('/api/supplies', supplyRouter);
app.use('/api/power', powerRouter);
```

Notice `"ship"` was removed:

```js
router.route('/')
  .get(bearerMiddleware, (req, res) => {
		...
  })
  .post(bearerMiddleware, (req, res) => {
		...
  });

router.route('/:_id')
  .get((req, res) => {...}
```

## Mongoose
Good use of mongoose methods like `.populate()`, `findByIdAndUpdate` and `findByIdAndDelete`.

```js
Ship.find()
	.populate('crew')
	.populate('engine')
	.populate('power')
	.populate('supply')
	.then(ships => res.json(ships))
	.catch(err => res.send(err));
```

Good job using built-in Mongoose properties like constraining model number
properties between a min and a max, requiring true, using ObjectId refs, making
array properties. Very impressive!

Good job finding and using enums:

```js
const crewSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true, enum: ['officer', 'enlisted'] },
  ship: { type: mongoose.Schema.Types.ObjectId, ref: 'Ship'}
});
```

## Auth
Goose job creating a `bearerMiddleware`.

Excellent job making sure to save only the hashed password.

# Overall
Overall excellent work! Way to create lots of models and find out how to
configure all your routes to make them all work together.

