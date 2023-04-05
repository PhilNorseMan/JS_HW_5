/*Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.*/

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const anyPhoto = products.filter((product) => {
    return product.photos !== undefined && product.photos.length > 0;
});

/*const anyPhoto = products.filter(({ photos }) => (photos || []).length);*/

console.log(anyPhoto);

/*const photoResult = {};
for (let i = 0; i < anyPhoto.length; i++) {
    for (let j = 0; j < anyPhoto[i].photos.length; j++) {
        photoResult[i] = anyPhoto[i];
    }
}
console.log(photoResult);*/

console.log(products.sort((a, b) => a.price > b.price ? 1 : -1));