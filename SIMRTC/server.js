const express = require('express');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const db = require('./config/database');
const marcasRoutes = require('./marca/marca.routes');
const tipoVehiculoRoutes = require('./tipoVehiculo/tipoVehiculo.routes');
const notificacionRoutes = require('./notificacion/notificacion.routes');
const eventoRoutes = require('./evento/evento.routes');
const alertaRoutes = require('./alerta/alerta.routes');
const personaRoutes = require('./persona/persona.routes');
const dispositivoMovilRoutes = require('./dispositivoMovil/dispositivoMovil.routes');

//Inicializamos la base de datos
db();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});   
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//Inicializamos las rutas
const router = express.Router();
//Usar express route. Agregar las demás rutas.
app.use('/api', router);
marcasRoutes(router);
tipoVehiculoRoutes(router);
notificacionRoutes(router);
eventoRoutes(router);
alertaRoutes(router);
personaRoutes(router);
dispositivoMovilRoutes(router);

app.listen(properties.PORT, () => console.log(`El servidor está corriendo en el puerto ${properties.PORT}`));
