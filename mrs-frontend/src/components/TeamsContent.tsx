import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Modal, Input, Icon, Form, Label, Popup, Message } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import TeamCard, { teamDto } from "@/components/TeamCard";
import { fetchTeams, addTeam } from "@/apicalls/teams";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function TeamsContent() {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const [teams, setTeams] = useState<teamDto[]>([]);
    useEffect(() => {
        fetchTeams(setTeams);
    }, []);
    const [open, setOpen] = useState(false);
    const [errMessage, setErrMessage] = useState<string>("");
    if (status === "authenticated") {
        return (
            <div className="teams-content-wrap">
                <div className="teams-add-info">
                    <Modal animation={false}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button className="teams-modal-btn" inverted color="orange">Add Team +</Button>}
                    >
                        <Modal.Header>Make Your Team</Modal.Header>
                        <Modal.Content>
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                addTeam(e, setTeams, setOpen, setErrMessage);
                            }}>
                                <Form.Field>
                                    <Label>Team Name</Label>
                                    <Input icon="users" placeholder="Name your team" type="text" name="teamname" />
                                </Form.Field>
                                <Button type="submit">Add Team +</Button>
                            </Form>
                            {(errMessage.length > 0) ? <Message warning>
                                <p>{errMessage}</p>
                            </Message> : null}
                        </Modal.Content>
                    </Modal>
                    <Button className="teams-signout-btn" size="tiny" onClick={() => signOut()}>Sign out</Button>
                    <Popup className="teams-helphover" content='Drag an employee to a different team to move them.'
                        trigger={<Button color="orange" icon='question' />} />
                </div>
                <div className="teams-TeamCard-box">
                    {teams.map((team) => {
                        return (
                            <DndProvider key={team.id} backend={HTML5Backend}>
                                <TeamCard team={team} setTeams={setTeams} />
                            </DndProvider>
                        )
                    })}
                </div>
            </div>
        )
    }
    return (
        <div className="teams-content-wrap">
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