const members = require('../../../app/schemas/User')

const users = [
    { id: 1, name: 'name', email: 'email' },
    { id: 2, name: 'name', email: 'email' }
]


var fakeDatabase: any = {};


const root = {
    quoteOfTheDay: ({ par }) => {
        return Math.random() < 0.5 ? 'Take it easy' + par : 'Salvation lies within';
    },

    list: () => {

        return members.users.find()
    },

    user: () => {

        return users[0]
    },


    createUser: ({ name, email }) => {
        return members.users.create({ name, email })
    },
    hello(): string {
        return 'Hello world!';
    },





    setMessage: ({ message }) => {
        fakeDatabase.message = message;
        return message;
    },
    getMessage: () => {
        return fakeDatabase.message;
    }

};




export { root }