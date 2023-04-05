import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Link from "next/link";
import { teamDto } from "@/components/TeamCard";
import { fetchTeam, updateTeamName } from "@/apicalls/specificteam";
import { Button, Modal, Input, Form, Label, List, Card, Message } from 'semantic-ui-react'

export default function SpecificTeam() {
  const router = useRouter();
  const { teamid } = router.query;
  const [team, setTeam] = useState<teamDto>({ id: "", name: "", employees: [] });
  useEffect(() => {
    if (teamid) {
      fetchTeam(teamid!, setTeam);
    }
  }, [teamid]);
  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState<string>("");
  return (
    <main className="specificteam-main">
      <nav className="specificteam-navbar">
        <Link className="specificteam-navlink" href="/">Home</Link>
        <Link className="specificteam-navlink" href="/teams">Teams</Link>
        <Link className="specificteam-navlink" href="/employees">People</Link>
      </nav>
      <div className="specificteam-body-container">
        <div className="specificteam-content-wrap">
          <div className="specificteam-card-container">
            <Card fluid>
              <Card.Content>
                <Card.Header style={{
                  color: "#4183C4"
                }} textAlign="center">{team.name}</Card.Header>
                <Card.Description>
                  <div className="specificteam-employee-box">
                  {team.employees.map(emp => {
                    return (
                      <div className="specificteam-employee" key={emp.id}>
                        <div>{emp.firstName} {emp.lastName}</div>
                        <div>{emp.type}</div>
                      </div>
                    )
                  })}
                  </div>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Modal animation={false}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={<Button className="specificteam-modal-btn" inverted color="orange">Change Team Name</Button>}
                >
                  <Modal.Header>Rename Team</Modal.Header>
                  <Modal.Content>
                    <Form onSubmit={(e) => {
                      e.preventDefault();
                      updateTeamName(team.id, e, setTeam, setOpen, setErrMessage);
                    }}>
                      <Form.Field>
                        <Label>Team Name</Label>
                        <Input icon="users" placeholder="Name your team" type="text" name="teamname" />
                      </Form.Field>
                      <Button type="submit">Change Team Name</Button>
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