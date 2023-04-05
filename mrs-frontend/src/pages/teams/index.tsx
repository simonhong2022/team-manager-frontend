import Link from "next/link";
import { List } from 'semantic-ui-react'
import TeamsContent from "@/components/TeamsContent";


export default function Teams() {
  return (
    <main className="teams-main">
      <nav className="teams-navbar">
        <Link className="teams-navlink" href="/">Home</Link>
        <Link className="teams-navlink" href="/teams">Teams</Link>
        <Link className="teams-navlink" href="/employees">People</Link>
      </nav>
      <div className="teams-body-container">
        <TeamsContent />
        <footer className="teams-footer">
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