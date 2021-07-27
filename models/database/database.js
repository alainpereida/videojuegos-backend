const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    process.env.NAME_BASE_DATOS, //Se puede cambiar el nombre de la base de datos
    process.env.USER_BASE_DATOS, //Pueden cambiar el usuario 
    process.env.PASSWORD_BASE_DATOS, //Pueden cambiar el passport
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

const Company = sequelize.define('Company', {
    IdCompany: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING(125),
        allowNull: false
    },
    Estado: {
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo',
        allowNull: false,
    }
});

const Console = sequelize.define('Console', {
    IdConsole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

const VideoGame = sequelize.define('Videogame', {
    IdGame: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FechaLanzamiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Portada: {
        type: DataTypes.BLOB,
        allowNull: false
    },
});

const GameWantPlayConsole = sequelize.define('GameWantPlayConsole', {
    VideogameIdGame: {
        type: DataTypes.INTEGER,
        references: {
            model: VideoGame,
            key: 'IdGame'
        }
    },
    ConsoleIdConsole: {
        type: DataTypes.INTEGER,
        references: {
            model: Console,
            key: 'IdConsole'
        }
    }
});

const User = sequelize.define('User', {
    IdUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NombreUsuario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CorreoConfirmado: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ApellidoPaterno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ApellidoMaterno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Sexo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const ListOfGames = sequelize.define('ListOfGames', {
    VideogameIdGame: {
        type: DataTypes.INTEGER,
        references: {
            model: VideoGame,
            key: 'IdGame'
        }
    },
    UserIdUser: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'IdUser'
        }
    },
    EsFavorito: {
        type: DataTypes.BIGINT,
        allowNull: true,
    }
});

const Role = sequelize.define('Role', {
    IdRole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Console.belongsTo(Company, { foreignKey: 'IdCompany' });
VideoGame.belongsTo(Company, { foreignKey: 'IdCompany' });
VideoGame.belongsToMany(Console, { through: GameWantPlayConsole });
Console.belongsToMany(VideoGame, { through: GameWantPlayConsole });
VideoGame.belongsToMany(User, { through: ListOfGames });
User.belongsToMany(VideoGame, { through: ListOfGames });
User.belongsTo(Role, { foreignKey: 'IdRole' });

// async function orden() {
//     await Role.sync({ force: true });
//     await Company.sync({ force: true });
//     await Console.sync({ force: true });
//     await VideoGame.sync({ force: true });
//     await GameWantPlayConsole.sync({ force: true });
//     await User.sync({ force: true });
//     await ListOfGames.sync({ force: true });
// };

// orden();

exports.Sequelize = Sequelize;
exports.sequelize = sequelize;
exports.Company = Company;
exports.Console = Console;
exports.VideoGame = VideoGame;
exports.Role = Role;
exports.User = User;