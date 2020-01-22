import { FileManager } from "../../utils/FileManager";

export const getQuestions = (country: string) : string => {

    let fr = new FileManager;

    try{
        let data = fr.readFile(country + "-questions.json");
        return JSON.parse(data.toString());

    } catch { 
        console.log("Error: archivo no existente") 
        throw Error();
    }

} 