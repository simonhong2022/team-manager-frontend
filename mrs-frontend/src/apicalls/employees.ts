import { Dispatch, SetStateAction } from "react";
import { employeeDto } from "@/components/EmployeeCard";

export type EmployeeRequestDto = {
    firstName: string;
    lastName: string;
    type: string;
    months: number;
    teamId: string;
}

const BASE_PATH: string = 'https://teammanager-backend-app.azurewebsites.net/api/employees';

export async function fetchAllEmployees(setEmployees: Dispatch<SetStateAction<employeeDto[]>>) {
    const response = await fetch(BASE_PATH);
    const responseData: employeeDto[] = await response.json();
    setEmployees(responseData);
    return responseData;
}

export async function addEmployee(event: React.FormEvent<HTMLFormElement>,
    teamId: string, setEmployees: Dispatch<SetStateAction<employeeDto[]>>,
    setOpen: Dispatch<SetStateAction<boolean>>, setErrMessage: Dispatch<SetStateAction<string>>) {
    const reqBody: EmployeeRequestDto = {
        firstName: event.currentTarget.firstName.value,
        lastName: event.currentTarget.lastName.value,
        type: event.currentTarget.type.value,
        months: event.currentTarget.months.value,
        teamId: teamId,

    };
    if (!reqBody.firstName || !reqBody.lastName || !reqBody.type || !reqBody.months || !reqBody.teamId) {
        setErrMessage('Please fill the form.');
        return;
    }
    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
    };
    const response = await fetch(BASE_PATH, reqOptions);
    await fetchAllEmployees(setEmployees);
    setOpen(false);
    setErrMessage('');
}

export async function deleteEmployee(employeeId: string, setEmployees: Dispatch<SetStateAction<employeeDto[]>>) {
    const reqOptions = {
        method: 'DELETE'
    }
    const response = await fetch(`${BASE_PATH}/${employeeId}`, reqOptions);
    await fetchAllEmployees(setEmployees);
}