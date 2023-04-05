import { Dispatch, SetStateAction } from "react";
import { teamDto } from "@/components/TeamCard";

export type TeamRequestDto = {
    name: string;
}

type MoveEmployeeDTO = {
    empId: string;
    teamToId: string;
}

const BASE_PATH: string = 'https://teammanager-backend-app.azurewebsites.net/api/teams';

export async function fetchTeams(setTeams: Dispatch<SetStateAction<teamDto[]>>) {
    const response = await fetch(BASE_PATH);
    const responseData: teamDto[] = await response.json();
    setTeams(responseData);
}

export async function addTeam(event: React.FormEvent<HTMLFormElement>,
    setTeams: Dispatch<SetStateAction<teamDto[]>>, setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>){
    const reqBody: TeamRequestDto = {
        name: event.currentTarget.teamname.value
    };
    if(!reqBody.name) {
        setErrMessage('Please choose a name.');
        return;
    }
    if(reqBody.name.split(' ').length != 1) {
        setErrMessage('Names cannot contain a space.');
        return;
    }
    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(BASE_PATH, reqOptions);
    if(response.ok) {
        await fetchTeams(setTeams);
        setOpen(false);
        setErrMessage('');
    } else {
        setErrMessage('Team name already taken.');
    }
}

export async function deleteTeam(teamname: string, setTeams: Dispatch<SetStateAction<teamDto[]>>) {
    const reqOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_PATH}/${teamname}`, reqOptions);
    await fetchTeams(setTeams);
}

export async function updateEmployeeTeam(empId: string, teamToId: string,
    setTeams: Dispatch<SetStateAction<teamDto[]>>) {
    const reqBody: MoveEmployeeDTO = {
        empId: empId,
        teamToId: teamToId
    };
    if(!reqBody.teamToId) {
        alert('Please choose a teamid.');
        return;
    }
    const reqOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch('https://teammanager-backend-app.azurewebsites.net/api/employees', reqOptions);
    await fetchTeams(setTeams);
}