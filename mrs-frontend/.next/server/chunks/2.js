"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 7002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZZ": () => (/* binding */ fetchTeams),
/* harmony export */   "fC": () => (/* binding */ deleteTeam),
/* harmony export */   "fg": () => (/* binding */ addTeam),
/* harmony export */   "s9": () => (/* binding */ updateEmployeeTeam)
/* harmony export */ });
const BASE_PATH = `${"https://team-manager-backend.up.railway.app"}/api/teams`;
async function fetchTeams(setTeams) {
    const response = await fetch(BASE_PATH);
    const responseData = await response.json();
    setTeams(responseData);
}
async function addTeam(event, setTeams, setOpen, setErrMessage) {
    const reqBody = {
        name: event.currentTarget.teamname.value
    };
    if (!reqBody.name) {
        setErrMessage("Please choose a name.");
        return;
    }
    if (reqBody.name.split(" ").length != 1) {
        setErrMessage("Names cannot contain a space.");
        return;
    }
    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(BASE_PATH, reqOptions);
    if (response.ok) {
        await fetchTeams(setTeams);
        setOpen(false);
        setErrMessage("");
    } else {
        setErrMessage("Team name already taken.");
    }
}
async function deleteTeam(teamname, setTeams) {
    const reqOptions = {
        method: "DELETE"
    };
    const response = await fetch(`${BASE_PATH}/${teamname}`, reqOptions);
    await fetchTeams(setTeams);
}
async function updateEmployeeTeam(empId, teamToId, setTeams) {
    const reqBody = {
        empId: empId,
        teamToId: teamToId
    };
    if (!reqBody.teamToId) {
        alert("Please choose a teamid.");
        return;
    }
    const reqOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(`${"https://team-manager-backend.up.railway.app"}/api/employees`, reqOptions);
    await fetchTeams(setTeams);
}


/***/ })

};
;