import { Dispatch, SetStateAction } from "react";
import { employeeDto } from "@/components/EmployeeCard";

type MoveEmployeeDTO = {
    empId: string,
    teamToId: string
}

const BASE_PATH: string = `${process.env.NEXT_PUBLIC_PORT}/api/employees`;

export async function fetchEmployee(id: string | string[], setEmployee: Dispatch<SetStateAction<employeeDto>>) {
    const response = await fetch(`${BASE_PATH}/${id}`);
    const responseData: employeeDto = await response.json();
    setEmployee(responseData);
}

export async function updateEmployeeTeam(id: string, teamToId: string,
    setEmployee: Dispatch<SetStateAction<employeeDto>>, setOpen: Dispatch<SetStateAction<boolean>>,
    setErrMessage: Dispatch<SetStateAction<string>>) {
    const reqBody: MoveEmployeeDTO = {
        empId: id,
        teamToId: teamToId
    };
    if(!reqBody.teamToId) {
        setErrMessage('Please choose a team id.');
        return;
    }
    const reqOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(BASE_PATH, reqOptions);
    await fetchEmployee(id, setEmployee);
    setOpen(false);
    setErrMessage('');
}