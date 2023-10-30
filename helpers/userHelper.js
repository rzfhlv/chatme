const users = [];

// Join user to chat
function newUser(id, username, room) {
    const user = { id, username, room };

    let check = checkExistingUser(username);
    if (check == undefined) {
        users.push(user);
    } else {
        const index = users.findIndex(user => user.username === username);
        users[index] = user;
    }
    
    return user;
}

// Check existing user
function checkExistingUser(username) {
    return users.find(user => user.username === username);
}

// Get current user
function getActiveUser(id) {
    return users.find(user => user.id === id);
}

// Users leave chat
function exitRoom(id) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getIndividualRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    newUser,
    getActiveUser,
    exitRoom,
    getIndividualRoomUsers,
};