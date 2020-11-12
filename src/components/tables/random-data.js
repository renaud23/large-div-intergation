import Chance from "chance";

const chance = new Chance();

export function getPerson() {
  const name = chance.name({ nationality: "fr" });
  const [firstName, lastName] = name.split(" ");
  const birthday = chance.birthday({ string: true });
  const email = chance.email();
  const country = chance.country({ full: true });
  const profession = chance.profession({ rank: true });

  return { firstName, lastName, birthday, email, country, profession };
}

export function getPersonsRows(how) {
  return new Array(how).fill(null).map(function () {
    const {
      firstName,
      lastName,
      birthday,
      email,
      country,
      profession,
    } = getPerson();
    return {
      firstName: { value: firstName, editable: true },
      lastName: { value: lastName, editable: true },
      birthday: { value: birthday, css: ["align-right"], editable: true },
      email: { value: email, css: ["align-left"], editable: true },
      country: { value: country, css: ["align-left"], editable: true },
      profession: { value: profession, css: ["align-left"], editable: true },
      __height: 40,
    };
  });
}

export function generatePersonData(how) {
  return {
    header: [
      { path: "firstName", label: "Prenom", __width: 100, resizable: true },
      { path: "lastName", label: "Nom", __width: 100, resizable: true },
      {
        path: "birthday",
        label: "Date de naissance",
        __width: 150,
        resizable: true,
      },
      { path: "email", label: "Mail", __width: 200, resizable: true },
      { path: "country", label: "Pays", __width: 350, resizable: true },
      {
        path: "profession",
        label: "Profession",
        __width: 350,
        resizable: true,
      },
    ],
    rows: getPersonsRows(how),
  };
}
