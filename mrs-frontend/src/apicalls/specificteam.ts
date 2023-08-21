import { Dispatch, SetStateAction } from "react";
import { teamDto } from "@/components/TeamCard";

type TeamRequestDto = {
    name: string;
}

const BASE_PATH: string = `${process.env.NEXT_PUBLIC_PORT}/api/teams`;

export async function fetchTeam(teamid: string | string[], setTeam: Dispatch<SetStateAction<teamDto>>) {
    const response = await fetch(`${BASE_PATH}/${teamid}`);
    const responseData: teamDto = await response.json();
    setTeam(responseData);
}

export async function updateTeamName(teamid: string | string[], event: React.FormEvent<HTMLFormElement>,
    setTeam: Dispatch<SetStateAction<teamDto>>, setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>) {
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
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(`${BASE_PATH}/${teamid}`, reqOptions);
    if(response.ok) {
        await fetchTeam(teamid, setTeam);
        setOpen(false);
        setErrMessage('');
    } else {
        setErrMessage('Team name already taken.');
    }
}
