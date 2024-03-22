//create a validation for particular collection

db.createCollection("student", {
  validator: {
    $jsonSchema: {
      required: ["name", "class", "enr"],
      properties: {
        name: {
          bsonType: "string",
          discription: "must be string ans is required",
        },
        class: {
          bsonType: "string",
          discription: "must be string ans is required",
        },
        enr: {
          bsonType: "number",
          discription: "must be number ans is required",
        },
      },
    },
  },
  validationeAction: "error",
});

//update a validation for particular collection which is already exist

db.runCommand({
  collMod: "student",
  validator: {
    $jsonSchema: {
      required: ["name", "class", "enr", "detail"],
      properties: {
        name: {
          bsonType: "string",
          discription: "must be string ans is required",
        },
        class: {
          bsonType: "string",
          discription: "must be string ans is required",
        },
        enr: {
          bsonType: "number",
          discription: "must be number ans is required",
        },
        detail: {
          bsonType: "array",
          discription: "must be number array is required",
          items: {
            bsonType: "object",
            required: ["number", "email"],
            properties: {
              number: {
                bsonType: "number",
              },
              email: {
                bsonType: "string",
              },
            },
          },
        },
      },
    },
  },
  validationeAction: "error",
});
