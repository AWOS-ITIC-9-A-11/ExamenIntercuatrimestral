import { UploadedFile } from "express-fileupload";
import * as UniqId from "uniqid";
import * as Path from "path";
import * as Fs from "fs";

export class FileUpload {

    constructor(private strRuta: string, private extensiones: string[]){}

    subirArchivo(file: UploadedFile): string {
        let nombreArchivo = UniqId.default() + Path.extname(file.name);

        if(!this.extensiones.includes(file.mimetype)){
            throw new Error(`Sólo son aceptadas las siguientes extensiones ${this.extensiones.join(', ')}`);
        }

        file.mv(Path.resolve(__dirname, `../../uploads/${this.strRuta}/${nombreArchivo}`)).catch((err: any) => {
            throw new Error("No se pudo procesar el archivo.");
        });

        return nombreArchivo;
    }

    eliminarArchivo(strNombreArchivo: string): void {

        let file = Path.resolve(__dirname, `../../uploads/${this.strRuta}/${strNombreArchivo}`);

        if(Fs.existsSync(file)) {
            Fs.unlinkSync(file);
        }

    }
}