const app = require('./routes');
const db = require('./db')

const dbSync = async () => {
  await db.sync()
}

dbSync();

console.log('here')

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${PORT}`);
});
