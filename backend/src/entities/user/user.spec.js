// DESCRIBE - bloco de testes - tests suites
// IT or TEST - declara um teste unitário - tests cases
// EXPECT - asserções do resultado - valida resultados

// const { user_errors } = require("../../errors/100-user");
// const { hashPassword, passwordValidation } = require("../../services/hash");

const { mockedUsers } = require("../mocks/user.mock");
const userController = require("./user.controller");
const { user_errors } = require("../../errors/100-user");

jest.mock("../../models", () => ({
  User: {
    findOne: jest.fn((input) => {
      const userFound = mockedUsers.find(
        (user) => user.email === input.where.email
      );
      if (userFound) {
        return Promise.resolve({ dataValues: userFound });
      }

      return Promise.resolve(null);
    }),
    create: jest.fn((input) =>
      Promise.resolve({
        status: 201,
        json: {
          user: {
            name: input.name,
            email: input.email,
            bio: input.bio,
          },
        },
      })
    ),
  },
}));

const requestsWithoutEmail = [
  {
    body: {
      name: "Weverton Junior",
      email: "",
      password: "123456",
    },
  },
  {
    body: {
      name: "Luan Antunes",
      email: undefined,
      password: "123456",
      bio: "I <3 green!",
    },
  },
  {
    body: {
      name: "Mayke Macedo",
      email: null,
      password: "123456",
    },
  },
  {
    body: {
      name: "José Rafael",
      password: "123456",
    },
  },
];

const requestsWithoutPassword = [
  {
    body: {
      name: "Gustavo Scarpa",
      email: "gustavo_scarpa@email.com",
      password: "",
    },
  },
  {
    body: {
      name: "Vinicius Carvalho",
      email: "vinicius_carvalho@email.com",
      password: null,
    },
  },
  {
    body: {
      name: "Benjamin Kuscevic",
      email: "benjamin_k@email.com",
      password: undefined,
      bio: "Sol na prancha!",
    },
  },
  {
    body: {
      name: "Jorge Barbosa",
      email: "jorge_barbosa@email.com",
    },
  },
];

describe("Create account", () => {
  let response;

  beforeEach(() => {
    response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test("Return error if name is not provided", async () => {
    const requests = [
      {
        body: {
          name: "",
          email: "marcelo_lomba@email.com",
          password: "123456",
        },
      },
      {
        body: {
          name: undefined,
          email: "marcos_rocha@email.com",
          password: "123456",
          bio: "batata2",
        },
      },
      {
        body: {
          name: null,
          email: "eduardo@email.com",
          password: "123456",
        },
      },
      {
        body: {
          email: "gustavo_gomez@email.com",
          password: "123456",
        },
      },
    ];

    requests.map(async (request) => {
      await userController.create(request, response);

      expect(response.status).toHaveBeenCalledWith(401);
      expect(response.json).toHaveBeenCalledWith({
        code: 104,
        message: user_errors["104"],
      });
    });
  });

  test("Return error if email is not provided", async () => {
    requestsWithoutEmail.map(async (request) => {
      await userController.create(request, response);

      expect(response.status).toHaveBeenCalledWith(401);
      expect(response.json).toHaveBeenCalledWith({
        code: 105,
        message: user_errors["105"],
      });
    });
  });

  test("Return error if password is not provided", async () => {
    requestsWithoutPassword.map(async (request) => {
      await userController.create(request, response);

      expect(response.status).toHaveBeenCalledWith(401);
      expect(response.json).toHaveBeenCalledWith({
        code: 106,
        message: user_errors["106"],
      });
    });
  });

  test("Passwords lesser than 6 characters and greater than 30 return error", async () => {
    const requests = [
      {
        body: {
          name: "Jaílson Smite",
          email: "jailson_smite@email.com",
          password: "'",
        },
      },
      {
        body: {
          name: "Ronielson Silva",
          email: "ronielson@email.com",
          password: "12345",
        },
      },
      {
        body: {
          name: "Raphael Veiga",
          email: "raphael_veiga@email.com",
          password: "essaSenhaTemTrintaEUmCaracteres",
          bio: "Sol na prancha!",
        },
      },
    ];

    requests.map(async (request) => {
      await userController.create(request, response);

      expect(response.status).toHaveBeenCalledWith(401);
      expect(response.json).toHaveBeenCalledWith({
        code: 103,
        message: user_errors["103"],
      });
    });
  });

  test("Return error if user already exists", async () => {
    const request = {
      body: {
        name: "Eduard Atuesta",
        email: "xandao@email.com",
        password: "123456",
        bio: "Colombia livre",
      },
    };
    await userController.create(request, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      code: 100,
      message: user_errors["100"],
    });
  });

  test("Create user should return user object if data is correct", async () => {
    const requests = [
      {
        body: {
          name: "Joaquin Piquerez",
          email: "joacopique@email.com",
          password: "123456",
          bio: "dale",
        },
      },
      {
        body: {
          name: "Murilo Paim",
          email: "murilopai@email.com",
          password: "123456",
        },
      },
    ];

    requests.map(async (request) => {
      await userController.create(request, response);

      expect(response.status).toHaveBeenCalledWith(201);
      expect(response.json).toHaveBeenCalledWith({
        user: {
          name: request.body.name,
          email: request.body.email,
          bio: request.body.bio,
        },
      });
    });
  });
});

describe("Login", () => {
  let response;
  test("Return error if email is not provided", async () => {});
  test("Return error if password is not provided", async () => {});
  test("Return error if user does not exist", async () => {});
  test("Return success if data is correct", async () => {
    const request = {
      body: {
        name: "Joaquin Piquerez",
        email: "xandao@email.com",
        password: "123456",
        bio: "dale",
      },
    };

    await userController.login(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      token: expect.any(String),
    });
  });
});
