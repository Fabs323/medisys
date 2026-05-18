import React from "react";

export default function MediSysApp() {

  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logueado, setLogueado] = React.useState(false);
  const [errorLogin, setErrorLogin] = React.useState("");

  const [paciente, setPaciente] = React.useState("");
  const [doctor, setDoctor] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [hora, setHora] = React.useState("");
  const [mensaje, setMensaje] = React.useState("");

  const [citas, setCitas] = React.useState([
    {
      paciente: "María López",
      doctor: "Dra. Hernández",
      fecha: "2026-05-15",
      hora: "08:00"
    }
  ]);

  const iniciarSesion = () => {

    if(usuario === "" || password === ""){
      setErrorLogin("Complete todos los campos");
      return;
    }

    if(usuario === "admin" && password === "1234"){
      setLogueado(true);
      setErrorLogin("");
    }else{
      setErrorLogin("Usuario o contraseña incorrectos");
    }

  };

  const registrarCita = () => {

    if(
      paciente === "" ||
      doctor === "" ||
      fecha === "" ||
      hora === ""
    ){
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    const citaDuplicada = citas.find(
      cita => cita.fecha === fecha && cita.hora === hora
    );

    if(citaDuplicada){
      setMensaje("Ese horario ya está ocupado");
      return;
    }

    const nuevaCita = {
      paciente,
      doctor,
      fecha,
      hora
    };

    setCitas([...citas, nuevaCita]);

    setMensaje("Cita registrada correctamente");

    setPaciente("");
    setDoctor("");
    setFecha("");
    setHora("");

  };

  const eliminarCita = (index) => {

    const nuevasCitas = citas.filter(
      (_, i) => i !== index
    );

    setCitas(nuevasCitas);

  };

  if(!logueado){

    return(

      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-orange-100 flex items-center justify-center p-6">

        <div className="bg-white rounded-[35px] shadow-2xl w-full max-w-md p-8 border-4 border-pink-200">

          <div className="text-center mb-8">

            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              MediSys
            </h1>

            <p className="text-gray-600 mt-3 text-lg">
              Sistema de Citas Médicas
            </p>

          </div>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
            />

            {
              errorLogin &&

              <div className="bg-red-100 text-red-700 p-3 rounded-2xl text-center">
                {errorLogin}
              </div>

            }

            <button
              onClick={iniciarSesion}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white p-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
            >
              Iniciar Sesión
            </button>

          </div>

          <div className="mt-6 text-center text-sm text-gray-500">

            Usuario: admin <br />
            Contraseña: 1234

          </div>

        </div>

      </div>

    );

  }

  return(

    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-orange-50 p-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-[35px] shadow-2xl p-8 border-4 border-pink-200 mb-8">

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            MediSys
          </h1>

          <p className="text-gray-600 mt-2 text-lg">
            Proyecto Académico - Sistema de Gestión de Citas Médicas
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-[35px] shadow-2xl p-8 border-4 border-pink-200">

            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              Registrar Nueva Cita
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Nombre del paciente"
                value={paciente}
                onChange={(e) => setPaciente(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
              />

              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
              >

                <option value="">
                  Seleccione un médico
                </option>

                <option>
                  Dra. Hernández
                </option>

                <option>
                  Dr. Martínez
                </option>

                <option>
                  Dra. Gómez
                </option>

              </select>

              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
              />

              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-pink-200 bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300"
              />

              {
                mensaje &&

                <div className="bg-pink-100 text-pink-700 p-3 rounded-2xl text-center">
                  {mensaje}
                </div>

              }

              <button
                onClick={registrarCita}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white p-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
              >
                Registrar Cita
              </button>

            </div>

          </div>

          <div className="bg-white rounded-[35px] shadow-2xl p-8 border-4 border-pink-200">

            <h2 className="text-3xl font-bold text-pink-600 mb-6">
              Lista de Citas
            </h2>

            <div className="space-y-4">

              {
                citas.map((cita, index) => (

                  <div
                    key={index}
                    className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-3xl p-5 shadow-lg flex justify-between items-center"
                  >

                    <div>

                      <p className="font-bold text-lg text-gray-700">
                        {cita.paciente}
                      </p>

                      <p className="text-pink-600">
                        {cita.doctor}
                      </p>

                      <p className="text-gray-500 text-sm">
                        {cita.fecha} - {cita.hora}
                      </p>

                    </div>

                    <button
                      onClick={() => eliminarCita(index)}
                      className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-md hover:scale-105 transition"
                    >
                      Eliminar
                    </button>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

        <div className="bg-white rounded-[35px] shadow-2xl p-8 border-4 border-pink-200 mt-8">

          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            Métricas ISO/IEC 25010
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-3xl p-5">

              <h3 className="font-bold text-xl text-pink-600">
                Usabilidad
              </h3>

              <p className="text-gray-600 mt-2">
                Interfaz sencilla y fácil de usar.
              </p>

            </div>

            <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-3xl p-5">

              <h3 className="font-bold text-xl text-pink-600">
                Seguridad
              </h3>

              <p className="text-gray-600 mt-2">
                Acceso protegido mediante login.
              </p>

            </div>

            <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-3xl p-5">

              <h3 className="font-bold text-xl text-pink-600">
                Fiabilidad
              </h3>

              <p className="text-gray-600 mt-2">
                Validación para evitar citas duplicadas.
              </p>

            </div>

            <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-200 rounded-3xl p-5">

              <h3 className="font-bold text-xl text-pink-600">
                Mantenibilidad
              </h3>

              <p className="text-gray-600 mt-2">
                Código modular y organizado.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}