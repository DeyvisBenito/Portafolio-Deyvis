import React from "react";
import FotoDeyvisPerfil from '../../assets/images/fotoDeyvisPerfil.jpg';

export const Presentacion = () => {
  return (
    <div className="text-center">
      <h1> Soy Deyvis Benito </h1>
      <h2>Soy un desarrollador principiante con conocimientos .NET y NodeJS</h2>
      <h5>
        <a
          href="https://github.com/DeyvisBenito"
          className="githubLink"
          target="_blank"
          rel="nofollow noreferrer"
        >
          GitHub Personal
        </a>
      </h5>

      <img id="foto" src={FotoDeyvisPerfil} alt="Foto Deyvis Benito" />
    </div>
  );
};
