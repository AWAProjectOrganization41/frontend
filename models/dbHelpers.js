/*const db = require("../dbConfig");

module.exports = {
    add,
    find,
    findById,
    remove,
    update,
    addMessage,
    findLessonMessages
};

async function add(lesson) {
    return await db("restaurants").insert(lesson, ['id', 'name'])
    //const [id] = await db("lessons").insert(lesson);
    //return this.findById(id);
}

function find() {
    return db("restaurants");
}

function findById(id) {
    return db("restaurants")
    .where({ id })
    .first();
}

function remove(id) {
    return db("restaurants")
    .where({ id })
    .del();
}

function update(id, changes) {
    return db("restaurants")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id)
    })
}

function findMessageById(id) {
    return db("messages").where({ id }).first();
}

async function addMessage(message, lesson_id) {
    return await db("messages")
    .where({ lesson_id })
    .insert(message,['id'])
    //const [id] = await db("messages").where({ lesson_id }).insert(message);
    //return findMessageById;
}

function findLessonMessages(lesson_id) {
    return db("restaurants as l")
    .join("messages as m", "l.id", "m.lesson_id")
    .select(
        "l.id as LessonID",
        "l.name as LessonName",
        "m.id as MessageID",
        "m.sender",
        "m.text"
    )
    .where({ lesson_id });
}

function removeMessage(id) {
    return db("messages").where({ id }).del();
}*/