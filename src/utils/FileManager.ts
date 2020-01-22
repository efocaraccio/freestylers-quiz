import fs from 'fs';


export class FileManager {

    constructor() { }

    createFile(path: string, data: string) {

        fs.writeFile(path, data,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }

    readFile(fileLocation: string) {
       return fs.readFileSync(fileLocation);
    }
}
