type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  { id: nextOrderId++, name: "Margherita", price: 8 },
  { id: nextOrderId++, name: "Pepperoni", price: 10 },
  { id: nextOrderId++, name: "Hawaiian", price: 10 },
  { id: nextOrderId++, name: "Veggie", price: 9 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };

  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: "Meat Feast", price: 12 });
addNewPizza({ name: "Vegan", price: 11 });
addNewPizza({ name: "BBQ Chicken", price: 12 });

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }

  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);

  if (!order) {
    console.error(`Order with id ${orderId} not found`);
    return;
  }

  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter `identifier` must be a string or a number");
  }
}

/*
addNewPizza([{ id: 5, name: "Meat Feast", price: 12 }]);
addNewPizza([{ id: 6, name: "Vegan", price: 11 }]);
addNewPizza([{ id: 7, name: "BBQ Chicken", price: 12 }]);

placeOrder("Meat Feast");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cahInRegister);
console.log("Order queue: ", orderQueue);
*/
console.log("Menu: ", menu);
