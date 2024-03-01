import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('alumnos')
export class AlumnosController {

@Get()
getAll(){
 return "Listado de alumnos";
}
}