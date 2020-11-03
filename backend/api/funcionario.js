exports.list = function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('SELECT * FROM funcionario', [], function (err, result) {
            if (err) return res.status(400).json();

            return res.status(200).json(result);
        });
    });
}

exports.create = function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')

    var data = req.body;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('INSERT INTO funcionario SET ?', [data], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.getById = function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')

    var Registro = req.params.Registro;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('SELECT * FROM funcionario WHERE Registro = ?', [Registro],
            function (err, result) {
                if (err) return res.status(400).json(err);

                return res.status(200).json(result[0]);
            });
    });
}

exports.update = function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')

    var data = req.body,
        Registro = req.params.Registro;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('UPDATE funcionario SET ? WHERE Registro = ? ', [data, id],
            function (err, result) {
                if (err) return res.status(400).json(err);

                return res.status(200).json(result);
            });
    });
}

exports.delete = function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')

    var Registro = req.params.Registro;

    req.getConnection(function (err, connection) {
        if (err) return res.status(400).json();
        connection.query('DELETE FROM funcionario WHERE Registro = ? ', [Registro], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}