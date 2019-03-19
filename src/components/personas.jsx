import React, { Component } from "react";
import { GetPerosna } from "./../Service/perosnasServices";

class Personas extends Component {
  state = {
    Datos: GetPerosna()
  };

  handlerdelete = persona => {
    const Datos = this.state.Datos.filter(p => p.id !== persona.id);
    this.setState({ Datos });
    console.log(persona);
  };

  handlerAdd = () => {
    const Datos = this.state.Datos;
    const newPersona = {
      id: Math.random() * 1000,
      Nombre: "Persona Nueva",
      Edad: Math.random() * 100,
      Estado: true
    };
    Datos.push(newPersona);
    this.setState({ Datos });
  };

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    <span data-feather="home" />
                    Inicio<span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file" />
                    Ordenes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="shopping-cart" />
                    Productos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="users" />
                    Customers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="bar-chart-2" />
                    Reportes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="layers" />
                    Integraciones
                  </a>
                  <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text" />
                        Current month
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text" />
                        Last quarter
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text" />
                        Social engagement
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <span data-feather="file-text" />
                        Year-end sale
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Clase Practica</h1>
              </div>
            </main>
            <canvas class="my-4 w-100" id="myChart" width="1050" height="1" />
            <div className="table-responsive">
              <h1>Total de personas:{this.state.Datos.length}</h1>
              <button onClick={this.handlerAdd} className="btn btn-info">
                Agregar Persona
              </button>

              <div class="table-responsive">
                <table class="table table-striped table-sm">
                  <thead className="">
                    <tr>
                      <th>Identificador</th>
                      <th>Nombres</th>
                      <th>Apellidos</th>
                      <th>Deportes</th>
                      <th>Municipio</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Datos.map(persona => (
                      <tr>
                        <td>{persona.id}</td>
                        <td>{persona.Nombre}</td>
                        <td>{persona.Apellido}</td>
                        <td>{persona.Deporte}</td>
                        <td>{persona.Municipio}</td>
                        <td>
                          <button
                            onClick={() => this.handlerdelete(persona)}
                            className="btn btn-warning pull-rigth btn-sx"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personas;
