// 1. Inserción de Documentos (Crear)

// Insertar un paciente en la colección Pacientes

db.Pacientes.insertOne({
    "nombre": "Miguel",
    "email": "miguel100@ejemplo.com",
    "telefono": "+34612345678",
    "fecha_registro": ISODate("2023-09-15T10:00:00Z"),
    "fecha_nacimiento": ISODate("1990-05-20T00:00:00Z"),
    "direccion": {
        "calle": "Avenida Central 10",
        "ciudad": "Madrid",
        "estado": "Madrid",
        "codigo_postal": "28004"
    },
    "historial_medico": "Diabetes tipo 2"
});

// Insertar un médico en la colección Medicos
db.Medicos.insertOne({
    "nombre": "Dr. Sofia",
    "especialidad": "Ginecología",
    "email": "sofia123@medico.com",
    "telefono": "+34623456789",
    "horario": {
        "dias": ["lunes", "miércoles", "viernes"],
        "hora_inicio": "08:00",
        "hora_fin": "14:00"
    },
    "consultorio": "Consultorio 5"
});

// Insertar una cita en la colección Citas

db.Citas.insertOne({
    "paciente_id": ObjectId("6736a30852032ada018a08df"),  // ID de un paciente existente
    "medico_id": ObjectId("6736a35752032ada018a08e0"),  // ID de un médico existente
    "fecha": ISODate("2023-11-20T15:30:00Z"),
    "hora": "15:30",
    "motivo": "Consulta de seguimiento",
    "estado": "pendiente"
});

// 2. Selección de Documentos (Leer)

// Obtener todos los pacientes
db.Pacientes.find({});

// Obtener los médicos que tengan una especialidad específica
db.Medicos.find({ "especialidad": "Ginecología" }, {_id:0});

// Buscar todas las citas de un paciente específico
db.Citas.find({ "paciente_id": ObjectId("6736a30852032ada018a08df") } , {_id:0});

// Buscar citas programadas para una fecha específica
db.Citas.find({ "fecha": ISODate("2023-11-20T15:30:00Z") }, {_id:0});

// 3. Actualización de Documentos (Actualizar)

// Actualizar el número de teléfono de un paciente
db.Pacientes.updateOne(
    { "nombre": "Miguel" },
    { $set: { "telefono": "+34655555555" } }
);

// 4. Eliminación de Documentos (Eliminar)

// Eliminar un paciente por su nombre
db.Pacientes.deleteOne({ "nombre": "Miguel" });

// Eliminar todas las citas que estén en estado "cancelada"
db.Citas.deleteMany({ "estado": "cancelada" });