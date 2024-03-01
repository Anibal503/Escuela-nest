import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


getGreeting(): string {
  return "Greetings, programmer!";
}

sumar(operador1, operador2): number{
  let resultado = 0;
  resultado = parseInt(operador1) + parseInt(operador2);
  return resultado;
}
}
