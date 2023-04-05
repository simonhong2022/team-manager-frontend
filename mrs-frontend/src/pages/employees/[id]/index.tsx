import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { Button, Modal, List, Form, Label, Card, Image, Message } from 'semantic-ui-react'
import Link from "next/link";
import { employeeDto } from "@/components/EmployeeCard";
import { teamDto } from "@/components/TeamCard";
import { fetchEmployee, updateEmployeeTeam } from "@/apicalls/specificemployee";
import { fetchTeams } from "@/apicalls/teams";

export default function SpecificEmployee() {
  const router = useRouter();
  const { id } = router.query;
  const [teams, setTeams] = useState<teamDto[]>([]);
  const [employee, setEmployee] = useState<employeeDto>(
    { id: "", firstName: "", lastName: "", type: "", months: 0, teamId: "", teamName: "" }
  );
  useEffect(() => {
    if (id) {
      fetchEmployee(id!, setEmployee);
      fetchTeams(setTeams);
    }
  }, [id]);
  const [open, setOpen] = useState(false);
  const [dropdownTeam, setDropdownTeam] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  return (
    <main className="specificemployee-main">
      <nav className="specificemployee-navbar">
        <Link className="specificemployee-navlink" href="/">Home</Link>
        <Link className="specificemployee-navlink" href="/teams">Teams</Link>
        <Link className="specificemployee-navlink" href="/employees">People</Link>
      </nav>
      <div className="specificemployee-body-container">
        <div className="specificemployee-content-wrap">
          <div className="specificemployee-card-container">
            <Card fluid>
              <Card.Content>
                <Image
                  floated='right'
                  rounded
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  style={{
                    height: 45,
                    width: 50
                  }}
                />
                <Card.Header>{employee.firstName} {employee.lastName}</Card.Header>
                <Card.Meta>{employee.teamName}</Card.Meta>
                <Card.Description>
                  Working as  <strong>{employee.type}</strong> for <strong>{employee.months}  months.</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Modal animation={false}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={<Button className="specificemployee-modal-btn" basic color='green'>Change Team</Button>}
                >
                  <Modal.Header>Change Employee Team.</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={(e) => {
                      e.preventDefault();
                      updateEmployeeTeam(employee.id, dropdownTeam, setEmployee, setOpen, setErrMessage);
                    }}>
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
                      <Button type="submit" >Change the Team</Button>
                    </Form>
                    {(errMessage.length > 0) ? <Message warning>
                                <p>{errMessage}</p>
                            </Message> : null}
                  </Modal.Content>
                </Modal>
              </Card.Content>
            </Card>
          </div>
        </div>
        <footer className="specificteam-footer">
          <List horizontal relaxed='very' inverted>
            <List.Item>
              <List.Content>
                <List.Header>Simon.H</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Rasmus.R</List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Mona.T</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </footer>
      </div>
    </main>
  )
}