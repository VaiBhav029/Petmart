import bcrypt from 'bcryptjs'

const user = [
    {
        name:'admin user',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'john doe',
        email:'john@example.com',
        password:bcrypt.hashSync('123456',10)
    },
    {
        name:'jane dow',
        email:'jane@example.com',
        password:bcrypt.hashSync('123456',10)
    }
]
export default user