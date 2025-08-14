const cartService = require('./services/cart.js');
const { createItem } = require('./services/item.js');

(async () => {
  const myCart = [];
  const myWishList = [];

  const item1 = await createItem("Hotwheels", 10.00, 1);
  const item2 = await createItem("Boneco de Ação", 40.00, 2);
  const item3 = await createItem("Tênis", 120.00, 1);
  //aqui você pode adicionar mais itens ao carrinho
  await cartService.addItem(myCart, item1);
  await cartService.addItem(myCart, item2);
  await cartService.addItem(myCart, item3);

  //exibição carrinho
  console.log("🧺 Bem vindo ao seu carrinho!\n");
  await cartService.removeItem(myCart, 1);
  await cartService.displayCart(myCart);

  //console.log("\n Item deletado: Boneco de Ação");
  //await cartService.deleteItem(myCart, "Boneco de Ação");

  console.log("\n o TOTAL do carrinho é: ");
  await cartService.calculateTotal(myCart);
})();
