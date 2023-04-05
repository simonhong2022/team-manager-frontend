import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Button, Image, Card, Confirm } from 'semantic-ui-react'
import { deleteEmployee } from "@/apicalls/employees";


export type employeeDto = {
    id: string;
    firstName: string;
    lastName: string;
    type: string;
    months: number;
    teamId: string;
    teamName: string;
}

type EmployeeCardProps = {
    employee: employeeDto;
    setEmployees: Dispatch<SetStateAction<employeeDto[]>>;
}

export default function EmployeeCard(props: EmployeeCardProps) {
    const [open, setOpen] = useState<boolean>(false);
    const { employee, setEmployees } = props;
    return (
        <main className="employeecard-main">
            <Card className="employeecard-card">
                <Image src='' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <Link className="employeecard-employeeLink" href={"/employees/" + employee.id}>{employee.firstName} {employee.lastName}</Link>
                    </Card.Header>
                    <Card.Meta>
                        <span >{employee.type} |</span>
                        <span >Months worked: {employee.months} |</span>
                        <span >Team: {employee.teamName} </span>
                    </Card.Meta>

                </Card.Content>

                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' href={"/employees/" + employee.id}>
                            Employee Details
                        </Button>
                        <Button basic color='red' onClick={() => setOpen(true)}>
                            Delete Employee
                        </Button>
                        <Confirm
                            open={open}
                            onCancel={() => setOpen(false)}
                            onConfirm={() => {
                                deleteEmployee(employee.id, setEmployees);
                                setOpen(false);
                            }}
                        />
                    </div>
                </Card.Content>
            </Card>

        </main>
    )
}