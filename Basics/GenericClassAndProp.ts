
interface IMongoDB {
    url: string;
}

interface IMySQL {
    host: string;
    user: string;
    password: string;
}

class Database<T> {

    public ConnectionString: T | null = null;

    public Connect(): void {

        Object.keys(this.ConnectionString).map(key =>{

            console.log(`${key}:${this.ConnectionString[key]}`);

        })
    }
}


let Mysql = new Database<IMySQL>();

Mysql.ConnectionString ={host:"anil",user:"root",password:"123"};

Mysql.Connect();


let mongoDB = new Database<IMongoDB>();

mongoDB.ConnectionString={url:"http://localhost:0.0.1.27017"};

mongoDB.Connect();