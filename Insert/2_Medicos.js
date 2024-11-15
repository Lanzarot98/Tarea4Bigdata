// insert de varios registros de medicos

db.Medicos.insertMany([
    {
        "_id": "7c8c6af9-0083-4e42-91ce-7a85b91cda43",
        "nombre": "Diana",
        "especialidad": "Cardiolog\u00eda",
        "email": "jos\u00e996@medico.com",
        "telefono": "+34629848225",
        "horario": {
            "dias": [
                "lunes",
                "jueves",
                "viernes",
                "martes",
                "mi\u00e9rcoles"
            ],
            "hora_inicio": "08:45",
            "hora_fin": "14:15"
        },
        "consultorio": "Consultorio 15"
    },
    {
        "_id": "1052ccb4-d7b5-4212-b4dd-61fd1ac4cfe1",
        "nombre": "Pedro",
        "especialidad": "Medicina General",
        "email": "jorge28@medico.com",
        "telefono": "+34607894910",
        "horario": {
            "dias": [
                "martes",
                "mi\u00e9rcoles"
            ],
            "hora_inicio": "09:45",
            "hora_fin": "09:00"
        },
        "consultorio": "Consultorio 16"
    },
    {
        "_id": "b0cb06f5-fdc3-4be7-8d88-a50701fc5cb6",
        "nombre": "Mar\u00eda",
        "especialidad": "Medicina General",
        "email": "laura84@medico.com",
        "telefono": "+34639180464",
        "horario": {
            "dias": [
                "lunes",
                "martes",
                "viernes",
                "jueves",
                "mi\u00e9rcoles"
            ],
            "hora_inicio": "15:15",
            "hora_fin": "09:00"
        },
        "consultorio": "Consultorio 1"
    },
    {
        "_id": "92cceb85-98b6-4315-a46d-00d3aade6ce3",
        "nombre": "Diana",
        "especialidad": "Cardiolog\u00eda",
        "email": "jorge12@medico.com",
        "telefono": "+34605369931",
        "horario": {
            "dias": [
                "lunes",
                "mi\u00e9rcoles",
                "martes",
                "viernes"
            ],
            "hora_inicio": "16:15",
            "hora_fin": "09:00"
        },
        "consultorio": "Consultorio 4"
    },
    {
        "_id": "bc080909-fb0d-46e0-9399-c881fa582c78",
        "nombre": "Pedro",
        "especialidad": "Cardiolog\u00eda",
        "email": "pedro29@medico.com",
        "telefono": "+34634601053",
        "horario": {
            "dias": [
                "jueves",
                "martes",
                "mi\u00e9rcoles",
                "lunes"
            ],
            "hora_inicio": "15:45",
            "hora_fin": "10:00"
        },
        "consultorio": "Consultorio 8"
    },
    {
        "_id": "de4a147e-8c2b-422c-ba6a-a45e69c9b74e",
        "nombre": "Jorge",
        "especialidad": "Neurolog\u00eda",
        "email": "pedro95@medico.com",
        "telefono": "+34692811470",
        "horario": {
            "dias": [
                "viernes",
                "jueves",
                "martes",
                "mi\u00e9rcoles",
                "lunes"
            ],
            "hora_inicio": "11:45",
            "hora_fin": "13:00"
        },
        "consultorio": "Consultorio 18"
    },
    {
        "_id": "5d1ca983-2aa9-4506-9f6a-e7169134b1e4",
        "nombre": "Jos\u00e9",
        "especialidad": "Medicina General",
        "email": "laura37@medico.com",
        "telefono": "+34628265238",
        "horario": {
            "dias": [
                "martes",
                "jueves",
                "lunes",
                "viernes"
            ],
            "hora_inicio": "10:30",
            "hora_fin": "11:00"
        },
        "consultorio": "Consultorio 4"
    },
    {
        "_id": "dd84b020-4072-49c0-96aa-722d323ea501",
        "nombre": "Diana",
        "especialidad": "Neurolog\u00eda",
        "email": "pedro49@medico.com",
        "telefono": "+34684809123",
        "horario": {
            "dias": [
                "mi\u00e9rcoles",
                "lunes",
                "martes",
                "viernes"
            ],
            "hora_inicio": "08:30",
            "hora_fin": "12:45"
        },
        "consultorio": "Consultorio 17"
    },
    {
        "_id": "fe45714f-e1eb-4692-9e5e-73a0f422cc7e",
        "nombre": "Ana",
        "especialidad": "Neurolog\u00eda",
        "email": "laura29@medico.com",
        "telefono": "+34637602858",
        "horario": {
            "dias": [
                "jueves",
                "martes",
                "lunes",
                "mi\u00e9rcoles",
                "viernes"
            ],
            "hora_inicio": "12:00",
            "hora_fin": "15:00"
        },
        "consultorio": "Consultorio 4"
    },
    {
        "_id": "469fcb15-39b0-4e10-8f0e-6e7afbbeb7c8",
        "nombre": "Pedro",
        "especialidad": "Neurolog\u00eda",
        "email": "carlos81@medico.com",
        "telefono": "+34639232461",
        "horario": {
            "dias": [
                "lunes",
                "jueves",
                "mi\u00e9rcoles"
            ],
            "hora_inicio": "13:45",
            "hora_fin": "12:45"
        },
        "consultorio": "Consultorio 16"
    }
]);