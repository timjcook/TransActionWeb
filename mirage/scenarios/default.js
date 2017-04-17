export default function(server) {

  let category1 = server.create('category', {
    name: 'Coffee'
  });

  let category2 = server.create('category', {
    name: 'Lunch'
  });

  let category3 = server.create('category', {
    name: 'Entertainment'
  });

  server.createList('transaction', 25, {
    category: category1
  });
  server.createList('transaction', 25, {
    category: category2
  });
  server.createList('transaction', 25, {
    category: category3
  });
}
