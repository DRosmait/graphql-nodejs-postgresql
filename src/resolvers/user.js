export default {
    Query: {
        me: (parent, args, { me }) => me,
        
        user: (parent, { id }, { models }) => models.users[id],

        users: (parent, args, { models }) => Object.values(models.users),
    },

    User: {
        // username: ({ username }) => username === 'Vasya Pupkin' ? 'nobody' : username,
        messages: ({ id }, { models }) => Object.values(models.messages).filter(m => m.userId === id),
    },
};