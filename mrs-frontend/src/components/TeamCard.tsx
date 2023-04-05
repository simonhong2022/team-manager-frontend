import { deleteTeam, updateEmployeeTeam } from "@/apicalls/teams";
import { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Image, Card, Confirm } from 'semantic-ui-react'

export type employeeDto = {
    id: string;
    firstName: string;
    lastName: string;
    type: string;
    months: number;
    teamId: string;
    teamName: string;
}
export type teamDto = {
    id: string;
    name: string;
    employees: employeeDto[];
}

type TeamCardProps = {
    team: teamDto;
    setTeams: Dispatch<SetStateAction<teamDto[]>>;
}

type EmployeeBoxProps = {
    emp: employeeDto;
}

type dragItem = {
    empId: string;
}

function EmployeeBox(props: EmployeeBoxProps) {
    const { emp } = props;
    const [{ isDragging }, dragref] = useDrag(() => ({
        type: 'BOX',
        item: {
            empId: emp.id
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));
    return (
        <div ref={dragref} className="teamcard-employee-details">
            <div>{emp.firstName} {emp.lastName}</div>
            <div>{emp.type}</div>
        </div>
    )
}

export default function TeamCard(this: any, props: TeamCardProps) {
    const [open, setOpen] = useState<boolean>(false);

    const { team, setTeams } = props;
    const [{ canDrop, isOver }, dropref] = useDrop(() => ({
        accept: 'BOX',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: (item: dragItem) => updateEmployeeTeam(item.empId, team.id, setTeams)
    }));
    return (
        <main ref={dropref} className="teamcard-main">
            <Card className="teamcard-card">
                <Image src='' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <Link className="teamcard-teamLink" href={"/teams/" + team.id}>{team.name}</Link>
                    </Card.Header>
                    <div className="teamcard-employees">
                        {team.employees.map(emp => {
                            return (
                                <DndProvider key={emp.id} backend={HTML5Backend}>
                                    <EmployeeBox emp={emp} />
                                </DndProvider>
                            )
                        })}
                    </div>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' href={"/teams/" + team.id}>
                            Team Details
                        </Button>
                        <Button basic color='red' onClick={() => setOpen(true)}>
                            Delete Team
                        </Button>
                        <Confirm
                            open={open}
                            onCancel={() => setOpen(false)}
                            onConfirm={() => {
                                deleteTeam(team.name, setTeams);
                                setOpen(false);
                            }}
                        />
                    </div>
                </Card.Content>
            </Card>

        </main>
    )
}