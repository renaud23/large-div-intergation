import Chance from "chance";

const chance = new Chance();

export function getPerson() {
  const name = chance.name({ nationality: "fr" });
  const [firstName, lastName] = name.split(" ");
  const birthday = chance.birthday({ string: true });
  const email = chance.email();
  const locale = chance.locale({ full: true });
  const profession = chance.profession({ rank: true });

  return { firstName, lastName, birthday, email, locale, profession };
}

export function getPersonsRows(how) {
  return new Array(how).fill(null).map(function () {
    const {
      firstName,
      lastName,
      birthday,
      email,
      locale,
      profession,
    } = getPerson();
    return {
      firstName: { value: firstName, type: "string" },
      lastName: { value: lastName, type: "string" },
      birthday: { value: birthday, css: ["align-right"], type: "string" },
      email: { value: email, css: ["align-left"], type: "string" },
      locale: { value: locale, css: ["align-left"], type: "locale" },
      profession: { value: profession, css: ["align-left"], type: "string" },
      percent: { value: Math.trunc(Math.random() * 100), type: "percent" },
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
      { path: "locale", label: "Pays", __width: 350, resizable: true },
      { path: "percent", label: "percent", __width: 350, resizable: false },
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
