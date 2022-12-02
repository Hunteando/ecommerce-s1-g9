import app from './server';
import { PORT } from './config/globals';
import { getConnection } from './dao/db/connection';

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

getConnection();
