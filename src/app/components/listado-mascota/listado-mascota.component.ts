import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/interfaces';

const list_mascotas: Mascota[] = [
  {id: 1, nombre: 'Lupita',edad: 7, raza:"Puddle", color:"blanco", peso: 10},
  {id: 2, nombre: 'Lupito',edad: 5, raza:"Puddle", color:"azul", peso: 9},
  {id: 3, nombre: 'Lupiti',edad: 3, raza:"Puddle", color:"negro", peso: 8},
  {id: 4, nombre: 'Lupitu',edad: 6, raza:"Puddle", color:"morado", peso: 11},
  {id: 5, nombre: 'Lupite',edad: 2, raza:"Puddle", color:"celeste", peso: 13},
  {id: 6, nombre: 'Juan',edad: 2, raza:"Puddle", color:"azul", peso: 13},
  {id: 7, nombre: 'Pedrito',edad: 2, raza:"Puddle", color:"verde", peso: 13},
  {id: 8, nombre: 'jorgito',edad: 2, raza:"Puddle", color:"rojo", peso: 13},
  {id: 9, nombre: 'Chika',edad: 2, raza:"Puddle", color:"dorado", peso: 13},
  {id: 10, nombre: 'Guaren',edad: 2, raza:"Puddle", color:"negro", peso: 13},
  {id: 11, nombre: 'Guarencia',edad: 2, raza:"Puddle", color:"gris", peso: 13},
  {id: 12, nombre: 'Guarencilla',edad: 2, raza:"Puddle", color:"morena cachetona", peso: 13},
  
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})


export class ListadoMascotaComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'nombre',  'edad','raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(list_mascotas);
  loading: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _snackbar: MatSnackBar){

  }

  ngOnInit(): void {
  
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  eliminarMascota(){
    this.loading = !this.loading;
    this._snackbar.open('La Mascota fue eliminada con exito','',{
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    })
    
  }

}
 
