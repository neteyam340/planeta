class Planeta {
    constructor(nombre, cantidadSatelites, masa, volumen, diametro, distanciaAlSol, esObservable) {
      this.nombre = nombre;
      this.cantidadSatelites = cantidadSatelites;
      this.masa = masa;
      this.volumen = volumen;
      this.diametro = diametro;
      this.distanciaAlSol = distanciaAlSol;
      this.esObservable = esObservable;
    }
  
    
    calcularDensidad() {
      return this.masa / this.volumen;
    }
  
    
    imprimirAtributos() {
      console.log(`Nombre: {this.nombre}`);
      console.log(`Cantidad de satélites: {this.cantidadSatelites}`);
      console.log(`Masa: {this.masa}`);
      console.log(`Volumen: {this.volumen}`);
      console.log(`Diámetro: {this.diametro}`);
      console.log(`Distancia al sol: {this.distanciaAlSol}`);
      console.log(`Es observable: {this.esObservable}`);
      console.log(`Densidad: {this.calcularDensidad()}`);
    }
  }
  
  
  let p1 = new Planeta("Tierra", 1, 5.9736E24, 1.08321E12, 12742, 150000000, true);
  let p2 = new Planeta("Jupiter", 1, 1.899E27, 1.4313E15, 139820, 750000000, true);
  
  
  p1.imprimirAtributos();
  p2.imprimirAtributos();