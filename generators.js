const friends = ["Dal", "Flynn", "Mark", "Godkimchi", "Japan Guy"];

function* friendTeller() {
  for (const friend of friends) {
    yield friend;
  }
}
// forEach는 yield와 호환이 되지 않는다.

const friendLooper = friendTeller();

console.log(friendLooper);
