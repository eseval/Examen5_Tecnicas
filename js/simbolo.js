function Simbolo() {
    var simbolos = ['cereza', 'limon', 'campana', 'siete', 'bar'];

    this.indice = Math.floor(Math.random() * simbolos.length);
    this.nombre = simbolos[this.indice];

    this.getImagen = function () {
        return "imagenes/simbolos/" + this.nombre + ".jpg";
    };

    this.getNombre = function () {
        return this.nombre;
    };

    this.getIndice = function () {
        return this.indice;
    };
}