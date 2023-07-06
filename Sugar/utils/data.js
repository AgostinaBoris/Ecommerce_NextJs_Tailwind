import bcrypt from 'bcryptjs';

const data = {
    // objeto data contiene dos propiedades: usuarios y productos.
    users: [
        {
            name: 'Agostina',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Aldana',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],




    products: [
        {
            name: 'Hard Candy Sticks',
            slug: 'hard-candies',
            category: 'candies',
            image: '/images/pic40.jpg',
            price: 28.99,
            brand: 'Gilliam',
            description: 'Assorted sticks in one box is no longer an option.',
            countInStock: 20 ,
            rating: 3.5,
            numReviews: 7 ,
        },

        {
            name: 'Gummy Teeth Candy',
            slug: 'gummy-teeth',
            category: 'candies',
            image: '/images/pic19.avif',
            price: 24.99,
            brand: 'Gummy',
            description: 'These little gummy worms are cute and come in colors that are vibrant!',
            countInStock: 40 ,
            rating: 4.2 ,
            numReviews: 8,
        },
        {
            name: 'Gummy worms',
            slug: 'gummy-worm',
            category: 'candies',
            image: '/images/pic22.avif',
            price: 22.99,
            brand: 'Gummy',
            description: 'Are you an early bird?',
            countInStock: 30,
            rating: 5,
            numReviews: 8,
        },
        {
            name: 'Gummy Strawberries',
            slug: 'gummy-strawberrie',
            category: 'candies',
            image: '/images/pic12.avif',
            price: 24.99,
            brand: 'Gummy',
            description: 'Strawberry gummy candy brings summer vibes to bulk displays with its fruity aroma and red and green colors',
            countInStock: 76,
            rating: 4.5,
            numReviews: 10,
        },
        {
            name: 'Candy Hearts',
            slug: 'hard-heart-candies',
            category: 'candies',
            image: '/images/pic28.avif',
            price: 27.99,
            brand: 'Ddl',
            description: 'Individually wrapped vanilla caramels!',
            countInStock: 40,
            rating: 4.8,
            numReviews: 9,
        },
        {
            name: 'Rainbow Whirly Pops',
            slug: 'rainbow-pops',
            category: 'pops',
            image: '/images/pic25.avif',
            price: 2.93,
            brand: 'whirly pop',
            description: 'Diameter: 3 Inches Total Length: 7 Inches',
            countInStock: 50,
            rating: 5,
            numReviews: 15,
        },
        {
            name: 'Gummy Teddy Bears',
            slug: 'gummy-bears',
            category: 'candies',
            image: '/images/pic3.avif',
            price: 20.93,
            brand: 'whirly pop',
            description: 'Diameter: 3 Inches Total Length: 7 Inches',
            countInStock: 50,
            rating: 5,
            numReviews: 15,
        },
        {
            name: 'Rainbow gummy candies',
            slug: 'gummy-rainbow',
            category: 'candies',
            image: '/images/pic13.avif',
            price: 2.93,
            brand: 'whirly pop',
            description: 'Diameter: 3 Inches Total Length: 7 Inches',
            countInStock: 50,
            rating: 5,
            numReviews: 15,
        },
    ]
}

export default data;