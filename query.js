const db = require('./db')
const { User, Task } = require('./models')

const findAllUsers = async () => {
    const users = await User.find()
    console.log('All users:', users)
}

const findAllTasks = async () => {
    const tasks = await Task.find()
    console.log('All tasks:', tasks)
}

const findOneWithTasks = async () => {
    const user1 = await User.findOne().populate('tasks')
    // Try to use the populate method here to load all of the tasks for a user
    // https://mongoosejs.com/docs/populate.html
    console.log(user1)
}

const run = async () => {
    try {
        // await findAllUsers()
        // await findAllTasks()
        await findOneWithTasks()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

run()