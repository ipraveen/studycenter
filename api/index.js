let todoCount = 0;
const todos = [
    {
        id: todoCount++,
        description: "Start the session"
    },
    {
        id: todoCount++,
        description: "Talk about React@16 Context"
    }
];

function api(app) {
    app.get("/api/todos", function(req, res) {
        setTimeout(() => res.json(todos), 2000);
    });
}
module.exports = api;
