import React, { Component } from "react";

const persona = [
  {
    id: 1,
    Nombre: "Luis",
    Apellido: "Aria",
    Deporte: "futball",
    Municipio: "Jinotepe",
    Estado: true
  },
  {
    id: 2,
    Nombre: "Marcos",
    Apellido: "Perez",
    Deporte: "Beisbol",
    Municipio: "Direiamba",
    Estado: true
  },
  {
    id: 3,
    Nombre: "Pedro",
    Apellido: "Gaitan",
    Deporte: "Natacion",
    Municipio: "Jinotega",
    Estado: true
  },
  {
    id: 4,
    Nombre: "Maria",
    Apellido: "Hernandez",
    Deporte: "Ciclismo",
    Municipio: "Matagalpa",
    Estado: true
  },
  {
    id: 5,
    Nombre: "Juana",
    Apellido: "Lopez",
    Deporte: "Boxeo",
    Municipio: "Masaya",
    Estado: true
  }
];

export function GetPerosna() {
  return persona;
}
