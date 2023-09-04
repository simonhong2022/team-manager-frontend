import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import EmployeeCard, { employeeDto } from "@/components/EmployeeCard";
import { teamDto } from "@/components/TeamCard";
import { fetchTeams } from "@/apicalls/teams";
import { fetchAllEmployees, addEmployee } from "@/apicalls/employees";
import { Button, Modal, Input, Icon, Form, Label, Message } from 'semantic-ui-react'



export default function EmployeesContent() {
    //const { data: session, status } = useSession();
    //const loading = status === "loading";

    const [employees, setEmployees] = useState<employeeDto[]>([]);
    const [teams, setTeams] = useState<teamDto[]>([]);
    useEffect(() => {
        fetchAllEmployees(setEmployees);
        fetchTeams(setTeams);
    }, []);
    const [open, setOpen] = useState(false);
    const [dropdownTeam, setDropdownTeam] = useState<string>("");
    const [errMessage, setErrMessage] = useState<string>("");
   // if (status === "authenticated") 
    {
        return (
            <div className="employees-content-wrap">
                <div className="employees-add-info">
                    <Modal animation={false}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button className="employees-modal-btn" inverted color="orange">Add Employee +</Button>}
                    >
                        <Modal.Header>Add Employee Info.</Modal.Header>
                        <Modal.Content>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                addEmployee(e, dropdownTeam, setEmployees, setOpen, setErrMessage);
                            }}>
                                <Form.Field>
                                    <Label>First Name</Label>
                                    <Input placeholder="first name" type="text" name="firstName" />
                                    <Label>Last Name</Label>
                                    <Input placeholder="last name" type="text" name="lastName" />
                                    <Label>Specialisation</Label>
                                    <Input placeholder="spec." type="text" name="type" />
                                    <Label>Months Worked</Label>
                                    <Input placeholder="months" type="number" name="months" />
                                </Form.Field>
                                <Label>Team</Label>
                                <Form.Select type="text"
                                    placeholder="team name"
                                    fluid
                                    selection
                                    options={teams.map(team => {
                                        return { key: team.id, text: team.name, value: team.id }
                                    })}
                                    onChange={(e, data) => { setDropdownTeam(String(data.value)); }}
                                />
                                <Button type="submit">Add Employee +</Button>
                            </Form>
                            {(errMessage.length > 0) ? <Message warning>
                                <p>{errMessage}</p>
                            </Message> : null}
                        </Modal.Content>
                    </Modal>
                    {/* <Button className="employees-signout-btn" size="tiny" onClick={() => signOut()}>Sign out</Button> */}
                </div>
                <div className="employees-person-box">
                    {employees.map(emp => {
                        return <EmployeeCard key={emp.id} employee={emp} setEmployees={setEmployees} />
                    })}
                </div>
            </div>
        )
    }
    return (
        <div className="employees-content-wrap">
            <div className="signin-container">
                <div className="signin-box">
                    <p className="signin-text">Authenticated users only</p>
                    <Button basic color="blue" className="signin-btn" onClick={() => signIn()}>
                        Sign in
                        <Icon name="chevron right" />
                    </Button>
                </div>
            </div>
        </div>
    )
}