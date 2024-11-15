// Filtros con Operadores en la Colección Pacientes

//Buscar pacientes que tengan un historial médico específico o estén en una ciudad específica
db.Pacientes.find({
    $or: [
        { "historial_medico": "Historial de asma" },
        { "direccion.ciudad": "Barcelona" }
    ]
});

//2. Filtros con Operadores en la Colección Médicos

// Buscar médicos que trabajen en ciertos días de la semana
db.Medicos.find({ "horario.dias": { $in: ["lunes", "miércoles"] } }, {_id:0});

// Buscar médicos que tengan más de una especialidad específica
db.Medicos.find({ "especialidad": { $in: ["Cardiología", "Neurología"] } }, {_id:0});

// Buscar médicos cuyo horario comience antes de las 10:00 AM
db.Medicos.find({ "horario.hora_inicio": { $lt: "10:00" } }, {_id:0});

// 3. Filtros con Operadores en la Colección Citas


// Buscar citas programadas dentro de un rango de fechas
db.Citas.find({
    "fecha": {
        $gte: ISODate("2023-11-01T00:00:00Z"),
        $lte: ISODate("2023-11-30T23:59:59Z")
    }
}, {_id:0});

// Buscar citas que ocurran en ciertos horarios específicos
db.Citas.find({ "hora": { $in: ["08:00", "10:00", "15:30"] } }, {_id:0});

// Consultar citas que no están en estado "completada" ni "cancelada"
db.Citas.find({ "estado": { $nin: ["completada", "cancelada"] } }, {_id:0});

//4. Consultas con Operadores Agregados y de Comparación Combinados

// Contar el número de citas completadas de un médico específico
db.Citas.find({
    "medico_id": "7c8c6af9-0083-4e42-91ce-7a85b91cda43",
    "estado": "completada"
}).count();

// Obtener pacientes cuyo nombre comience con "An" (utilizando regex)
db.Pacientes.find({ "nombre": { $regex: "^An", $options: "i" } }, {_id:0});

// Buscar médicos que trabajen en un consultorio específico y tengan un horario en un rango determinado
db.Medicos.find({
    "consultorio": "Consultorio 5",
    "horario.hora_inicio": { $gte: "08:00" },
    "horario.hora_fin": { $lte: "14:00" }
}, {_id:0});

//5. Consultas de Agregación

//Obtener el número de citas por cada estado
db.Citas.aggregate([
    { $group: { _id: "$estado", total_citas: { $sum: 1 } } }
]);

// Calcular la edad promedio de los pacientes
db.Pacientes.aggregate([
    {
        $addFields: {
            fecha_nacimiento_fecha: { $toDate: "$fecha_nacimiento" }  // Convert string to Date
        }
    },
    {
        $addFields: {
            edad: {$subtract: [
                    { $year: "$$NOW" },             // Current year
                    { $year: "$fecha_nacimiento_fecha" }  // Year of birth
                ]
            }
        }
    },
    {
        $group: {_id: 0,
            edad_promedio: { $avg: "$edad" }
        }
    }
]);