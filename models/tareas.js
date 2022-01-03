const Tarea = require('./tarea');

class Tareas {

     _listado = {};

/**
 *  _listado:
 *      {  '582982bf-a00e-4cd3-84d8-daeb9547eb1e: { id:582982bf-a00e-4cd3-84d8-daeb9547eb1e, desc:asd, completadoeEN:92231 }  },
 */

     constructor( desc ){
         this._listado = {};
         
     }
     
     borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }
     
    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => { //matriz de claves
            //console.log(key, this._listado[key]); //ID, Objeto asociado al ID
            const tarea = this._listado[key];//obtengo valor de la KEY
            listado.push( tarea );
        });
        /*
        Ejemplo de retorno
        listado:  [
            Tarea {
                id: '527b7b97-7057-421c-a519-f6ab2b30e9b9',
                desc: 'test4',
                completadoEn: null
                }
            ]
        */
        return listado;
    }

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    listadoCompleto() {
        
        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });         
    }

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });     

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }

}

module.exports = Tareas;