const express = require("express");
var morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

let persons = [
  {
    id: 1,
    name: "Ivan",
    number: "07862131312",
  },
  {
    id: 2,
    name: "Jim",
    number: "078341262131312",
  },
  {
    id: 3,
    name: "Bob",
    number: "0892121213",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/info", (req, res) => {
  const numberOfPeople = persons.length;
  res.send(`<p>Phonebook has info for ${numberOfPeople} people</p>
  <p>${new Date()}</p>`);
});

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(10000));
}

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const nameCheck = persons.find((person) => person.name === body.name);
  if (nameCheck) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }
  const Person = {
    name: body.name,
    number: body.number,
    id: getRandomInt(),
  };

  persons = persons.concat(Person);

  response.json(Person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
